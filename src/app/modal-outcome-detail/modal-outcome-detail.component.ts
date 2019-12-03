import { Component, OnInit, Input } from '@angular/core';
import { Outcome, Obj, Organisasi } from '../organisasi/organisasi.model';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modal-outcome-detail',
  templateUrl: './modal-outcome-detail.component.html',
  styleUrls: ['./modal-outcome-detail.component.scss'],
})
export class ModalOutcomeDetailComponent implements OnInit {

  @Input() selectedOrgs: Outcome;
  orgId = null;
  ocId = null;

  private outcomeCollection: AngularFirestoreCollection<Outcome>;
  private outcome: Observable<Outcome[]>;
  
  selectedObj: Obj[];

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router,
    private actvRoute: ActivatedRoute,
    private db: AngularFirestore
  ) { 
    this.orgId = this.actvRoute.snapshot.params['organisasiId'];
    
    this.outcomeCollection = db.collection<Organisasi>('organisasi').doc(this.orgId).collection<Outcome>('outcome');
    
    this.outcome = this.outcomeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          this.ocId = id;
          return { id, ...data };
        });
      })
    )
    console.log("OC ID: " + this.ocId);

    // this.objCollection = db.collection<Organisasi>('organisasi').doc(this.orgId).collection<Outcome>('outcome').doc(this.selectedOrgs.id).collection('obj');
    
    // this.outcome = this.outcomeCollection.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc.id;
    //       return { id, ...data };
    //     });
    //   })
    // )
    // this.listLength = 0;
    // this.outcome.subscribe(res => {
    //   this.outcome2 = res;
    //   this.listLength = res.length;
    // });
  }

  ngOnInit() {
    this.orgId = this.actvRoute.snapshot.params['organisasiId'];
    // this.user = this.orgsService.getUser();
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  getTotalPrice() {
    let sumVal = 0;
    for(let item of this.selectedOrgs.obj) {
      sumVal += item.price;
    }
    console.log(sumVal);
    return sumVal;
  }

  async addOnClick() {
    const alert = await this.alertCtrl.create({
      message: 'What was the last item you bought?',
      inputs: [
        {
          name: 'inpName',
          placeholder: 'Item\'s name',
        },
        {
          name: 'inpPrice',
          placeholder: 'Price',
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Submit',
          handler: data => {
            firebase.firestore()
            .collection('organisasi').doc(this.orgId).collection('outcome').doc(this.selectedOrgs.id).collection('obj').add(
              { 
                objName: data.inpName,
                price: data.inpPrice,
                date: new Date()
              },
              // { merge: true }
            ).then(function() {
              console.log("updated");
            });
            console.log("Hope you get reimbursement");
          }
        }
      ]
    });
    await alert.present();
  }

  async doneOnClick() {
    const alert = await this.alertCtrl.create({
      header: 'Reimburse',
      message: 'Are you sure want to close the receipt? did you got paid?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes, and I want to close it',
          handler: () => {
            this.router.navigate(['/organisasi']);
            this.presentToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Thank you',
      position: 'bottom',
      duration: 2000,
      buttons: [
        {
          side: 'end',
          text: 'Close',
          role: 'cancel'
        }
      ]
    })
    await toast.present();
  }

}
