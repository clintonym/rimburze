import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisasiService } from '../../organisasi.service';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Organisasi, Outcome, Obj } from '../../organisasi.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-outcome-detail',
  templateUrl: './outcome-detail.page.html',
  styleUrls: ['./outcome-detail.page.scss'],
})
export class OutcomeDetailPage implements OnInit {

  private objCollection: AngularFirestoreCollection<Obj>;
  private obj: Observable<Obj[]>;

  loadedObj: Obj[];
  loadedOutcome: Outcome;

  orgId = null;
  outcomeId = null;

  constructor(
    private actvRoute: ActivatedRoute,
    private activatedOrgs: ActivatedRoute,
    private orgsService: OrganisasiService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router,
    private db: AngularFirestore,
  ) { 
    this.orgId = this.actvRoute.snapshot.params['organisasiId'];
    this.outcomeId = this.actvRoute.snapshot.params['outcomeId'];
    console.log("Outcome Id: " + this.outcomeId);

    this.objCollection = db.collection<Organisasi>('organisasi').doc(this.orgId).collection<Outcome>('outcome').doc(this.outcomeId).collection('obj');
    
    this.obj = this.objCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    )
  }

  ngOnInit() {
    this.loadedOutcome = this.orgsService.getOutcome();
  }

  ionViewWillEnter(){
    this.loadedOutcome = this.orgsService.getOutcome();
    this.obj.subscribe(res => {
      this.loadedObj = res;
    });
    console.log("Loaded OBJ: " + this.loadedObj);
  }

  getTotalPrice() {
    let sumVal = 0;
    if(!this.loadedObj) {

    }
    else if(this.loadedObj) {
      for(let item of this.loadedObj) {
        sumVal = +sumVal + +item.price;
      }
      console.log(sumVal);
      return sumVal;
    }
    
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
            .collection('organisasi').doc(this.orgId).collection('outcome').doc(this.outcomeId).collection('obj').add(
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