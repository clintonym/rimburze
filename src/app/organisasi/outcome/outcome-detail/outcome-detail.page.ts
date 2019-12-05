import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisasiService } from '../../organisasi.service';
import { ModalController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Organisasi, Outcome, Obj, Users } from '../../organisasi.model';
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
  user: Users;

  orgId = null;
  outcomeId = null;
  tombol = false;

  constructor(
    private actvRoute: ActivatedRoute,
    private activatedOrgs: ActivatedRoute,
    private orgsService: OrganisasiService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router,
    private db: AngularFirestore,
    private loadingCtrl: LoadingController
  ) { 
    this.user = this.orgsService.getUser();
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
    this.obj.subscribe(res => {
      this.loadedObj = res;
    });
    
    console.log(this.user.email + " " + this.loadedOutcome.email);
    if(this.user.email == this.loadedOutcome.email) {
      this.tombol = true;
    }
    else if(this.user.email != this.loadedOutcome.email) {
      this.tombol = false;
    }
  }

  async deleteObj(obj){
    const alert = await this.alertCtrl.create({
      header: 'Delete Item',
      message: 'Are you sure want to delete \"' + obj.objName + '\"?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            firebase.firestore()
            .collection('organisasi').doc(this.orgId).collection('outcome').doc(this.outcomeId)
            .collection('obj').doc(obj.id).delete()
            .then( function() {
              console.log("Obj successfully deleted!");
            }).catch(function(error) {
              console.error("Error removing Obj: ", error);
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async toastDelete() {
    const toast = await this.toastCtrl.create({
      message:  '\"' + this.loadedObj + '\" has been deleted',
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ],
      duration: 2000
    });
    toast.present();
  }

  getTotalPrice() {
    let sumVal = 0;
    if(!this.loadedObj) {

    }
    else if(this.loadedObj) {
      for(let item of this.loadedObj) {
        sumVal = +sumVal + +item.price;
      }
      return sumVal;
    }
    
  }

  async addOnClick() {
    const alert = await this.alertCtrl.create({
      header: 'Add item',
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
          text: 'Add',
          handler: data => {
            // this.addLoading();
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
      message: 'Are you sure want to close the receipt? You will not be able to add another item.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.router.navigate(['/organisasi']);
            this.toastDone();
          }
        }
      ]
    });
    await alert.present();
  }

  async toastDone() {
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
