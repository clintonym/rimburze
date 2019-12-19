import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisasiService } from '../../organisasi.service';
import { ModalController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Organisasi, Outcome, Obj, Users, History } from '../../organisasi.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { ModalAddObjComponent } from 'src/app/modal-add-obj/modal-add-obj.component';

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
  base64Image: string;

  orgId = null;
  outcomeId = null;
  tombol = false;
  total = 0;

  constructor(
    private actvRoute: ActivatedRoute,
    private orgsService: OrganisasiService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private db: AngularFirestore,
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
    if(this.user.email == this.loadedOutcome.email){
      const alert = await this.alertCtrl.create({
        header: obj.objName,
        message: 'Do you want to delete or reimburse this item?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              firebase.firestore()
              .collection('organisasi').doc(this.orgId).collection('outcome').doc(this.outcomeId)
              .collection('obj').doc(obj.id).delete()
              .then( () => {
                this.toastDelete(obj.objName);
              }).catch(function(error) {
                console.error("Error removing Obj: ", error);
              });
            },
          },
          {
            text: 'Reimburse',
            handler: () => {
              firebase.firestore()
              .collection('organisasi').doc(this.orgId).collection('history').add(
                {   
                  histName: obj.objName,
                  histDate: new Date(),
                  histTotal: this.total,
                  histUser: this.user.displayName,
                  histEmail: this.user.email
                },
                // { merge: true }
              ).then(function() {
                console.log(obj.objName + " Reimbursed");
              });
  
              firebase.firestore()
              .collection('organisasi').doc(this.orgId).collection('outcome').doc(this.outcomeId)
              .collection('obj').doc(obj.id).delete()
              .then( () => {
                this.toastReimburse(obj.objName);
              }).catch(function(error) {
                console.error("Error reimbursing Obj: ", error);
              });
            }
          },
        ]
      });
      await alert.present();
    }else{
      console.log("not valid user");
    }
    
  }

  async toastDelete(name) {
    const toast = await this.toastCtrl.create({
      message:  '\"' + name + '\" has been deleted',
      buttons: [
        {
          side: 'end',
          text: 'Close',
          role: 'cancel'
        }
      ],
      duration: 2000
    });
    await toast.present();
  }

  async toastReimburse(name) {
    const toast = await this.toastCtrl.create({
      message:  '\"' + name + '\" has been reimbursed',
      buttons: [
        {
          side: 'end',
          text: 'Close',
          role: 'cancel'
        }
      ],
      duration: 2000
    });
    await toast.present();
  }

  getTotalPrice() {
    let sumVal = 0;
    if(!this.loadedObj) {

    }
    else if(this.loadedObj) {
      for(let item of this.loadedObj) {
        sumVal = +sumVal + +item.price;
      }
      this.total = sumVal;
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
            firebase.firestore()
            .collection('organisasi').doc(this.orgId).collection('outcome').doc(this.outcomeId).collection('obj').add(
              { 
                objName: data.inpName,
                price: data.inpPrice,
                date: new Date()
              },
            ).then(function() {
              console.log("updated");
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async modalAddOnClick() {
    const modal = await this.modalCtrl.create({
      component: ModalAddObjComponent,
      componentProps: { user: this.user, orgId: this.orgId, outcomeId: this.outcomeId }
    });
    return await modal.present();
  }

}
