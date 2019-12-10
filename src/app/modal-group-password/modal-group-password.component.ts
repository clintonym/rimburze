import { Component, OnInit, Input } from '@angular/core';
import { Organisasi, Users } from '../organisasi/organisasi.model';
import { ModalController, ToastController } from '@ionic/angular';
import { OrganisasiService } from '../organisasi/organisasi.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-modal-group-password',
  templateUrl: './modal-group-password.component.html',
  styleUrls: ['./modal-group-password.component.scss'],
})
export class ModalGroupPasswordComponent implements OnInit {
  @Input() selectedOrgs: Organisasi;
  @Input() user: Users;

  enterPwd: string;
  orgId = null;
  path: any;

  constructor(
    private modalCtrl: ModalController, 
    private orgService:OrganisasiService, 
    private router: Router,
    private toastCtrl: ToastController,
    private actvRoute: ActivatedRoute,
    //db: AngularFirestore
    ) {
      const db = firebase.firestore();
      const ref = db.collection('organisasi').doc();
      const id = ref.id;
      console.log(id);
    }

  ngOnInit() {
    this.user = this.orgService.getUser();
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  enterGroup(){
    if(this.selectedOrgs.password == this.enterPwd){
      this.orgService.setSelectedOrgs(this.selectedOrgs);
      this.router.navigate(['/organisasi', this.selectedOrgs.id]);
      this.modalCtrl.dismiss(null, 'cancel');
    }
    else{
      this.passwordToast();
    }
    // this.orgService.joinOrg(org.id,password);
    // this.orgService.setSelectedOrgs(org);
    // this.router.navigate(['/organisasi', org.id]);
  }
  async passwordToast() {
    const toast = await this.toastCtrl.create({
      message: 'Wrong password',
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

}
