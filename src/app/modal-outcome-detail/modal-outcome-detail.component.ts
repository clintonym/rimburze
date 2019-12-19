import { Component, OnInit, Input} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { storage } from 'firebase';
import { Users } from '../organisasi/organisasi.model';
import * as firebase from 'firebase';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-outcome-detail',
  templateUrl: './modal-outcome-detail.component.html',
  styleUrls: ['./modal-outcome-detail.component.scss'],
})
export class ModalOutcomeDetailComponent implements OnInit {

  @Input() objName: string;
  @Input() user: Users;
  @Input() orgId: string;
  @Input() outcomeId: string;
  @Input() objId: string;

  base64Image = null;
  pictures: any;
  objNoSpace: string;

  constructor(
    private camera: Camera,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.objNoSpace = this.objName.replace(/\s/g, "");
    if(this.pictures) {
      this.pictures = storage().refFromURL('pictures/' + this.objNoSpace);
    }
    
    console.log(this.objNoSpace);
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  openCamera() {
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
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.pictures = storage().ref('pictures/' + this.objNoSpace);
      this.pictures.putString(this.base64Image, 'data_url');
      
    }, (err) => {

    }).then( () => {
      this.updatePhoto();
    });

    
    
    
  }

  updatePhoto(){
    firebase.firestore()
    .collection('organisasi').doc(this.orgId).collection('outcome').doc(this.outcomeId).collection('obj').doc(this.objId).update({ 
        foto: this.pictures
    },
    ).then( () => {
      // console.log("updated");
      this.onCancel();
      // this.presentToast(f.value.inpObjName);
    });
  }
}
