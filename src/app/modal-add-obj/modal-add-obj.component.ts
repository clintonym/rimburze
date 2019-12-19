import { Component, OnInit, Input } from '@angular/core';
import { Obj, Users } from '../organisasi/organisasi.model';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { storage } from 'firebase';

@Component({
  selector: 'app-modal-add-obj',
  templateUrl: './modal-add-obj.component.html',
  styleUrls: ['./modal-add-obj.component.scss'],
})
export class ModalAddObjComponent implements OnInit {

  @Input() user: Users;
  @Input() orgId: string;
  @Input() outcomeId: string;

  inputObj: Obj;
  base64Image: string;
  objNoSpace: string;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private camera: Camera,
  ) { }

  ngOnInit() {
    console.log("U: " + this.user.displayName + " OrgId: " + this.orgId + " OcId: " + this.outcomeId);
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onAddItem(f: NgForm) {
    firebase.firestore()
    .collection('organisasi').doc(this.orgId).collection('outcome').doc(this.outcomeId).collection('obj').add({ 
        objName: f.value.inpObjName,
        price: f.value.inpObjPrice,
        date: new Date(),
        foto: this.base64Image
    },
    ).then( () => {
      console.log("updated");
      this.onCancel();
      this.presentToast(f.value.inpObjName);
    });
  }

  async presentToast(name) {
    const toast = await this.toastCtrl.create({
      message:  '\"' + name + '\" added',
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

  openCamera(namaObj) {
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.objNoSpace = namaObj.replace(/\s/g, "");
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      const pictures = storage().ref('pictures/' + this.objNoSpace);
      pictures.putString(this.base64Image, 'data_url');
    }, (err) => {

    });
  }

}
