import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisasiService } from '../../organisasi.service';
import { ModalController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Organisasi, Outcome, Obj, Users } from '../../organisasi.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
    @Inject(Camera) private camera: Camera,
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
          text: 'Photo',
          handler: () => {
            console.log("Camera Opened");
            this.openCamera();
            console.log("Camera Closed");
          }
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
      message: 'Are you sure want to close the receipt? You still can add another item.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => 
          {
            //ambil data, bnr gk ya...
            // data = firebase.firestore()
            // .collection('organisasi').doc(this.orgId).collection('outcome').doc(this.outcomeId).collection('obj').get();
            
            ////delete dulu yang di obj tapi gk bisa delete collection, gmn yah..
            

            ////taro ke history
            // firebase.firestore()
            // .collection('organisasi').doc(this.orgId).collection('history').add(
            //   {   
            //     histName: data.inpName,
            //     histDate: new Date(),
            //     histTotal: data.sumVal,
            //     histUser: this.user.displayName
            //   },
            //   // { merge: true }
            // ).then(function() {
            //   console.log("updated");
            // });
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

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

}
