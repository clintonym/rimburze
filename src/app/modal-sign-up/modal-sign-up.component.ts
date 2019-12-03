import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { NgForm } from '@angular/forms';
import { OrganisasiService } from '../organisasi/organisasi.service';
import { Users } from '../organisasi/organisasi.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-sign-up',
  templateUrl: './modal-sign-up.component.html',
  styleUrls: ['./modal-sign-up.component.scss'],
})
export class ModalSignUpComponent implements OnInit {
  selectedUser: Users;
  allUser: Users[];
  ada = false;
  private userSub: Subscription;

  constructor(
    private modalCtrl: ModalController,
    private authSvc: AuthService,
    private loadingCtrl: LoadingController,
    private orgService: OrganisasiService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.selectedUser = {
      name: '',
      email: ''
    }
    this.userSub = this.orgService.getUsers().subscribe(res => {
      this.allUser = res;
    });
  }

  onSignUp(f: NgForm) {

    for(let u of this.allUser) {
      console.log(f.value.email + u.email);
      if(f.value.email == u.email) {
       // console.log("ada");
        this.ada = true;
      }
      else if(f.value.email != u.email) {
        this.ada = this.ada;
       //console.log("belum ada");
      }
    }
    if(this.ada == true) {
      console.log("ada");
      this.createToast();
    }
    else if(this.ada == false) {
      console.log("blm ada");
      this.orgService.addUser(this.selectedUser);
      this.authSvc.signup(f.value.email, f.value.pwd,f.value.name).subscribe(resp => {
        console.log(resp);
        this.presentLoading();
        this.modalCtrl.dismiss();
      });
    }
  }

  ionViewDidLoad(){
    this.selectedUser = {
      name: '',
      email: ''
    }
    this.userSub = this.orgService.getUsers().subscribe(res => {
      this.allUser = res;
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Signing Up...',
      duration: 2000
    });
    await loading.present();
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  async createToast() {
    const toast = await this.toastCtrl.create({
      message: 'Email Registered. Please use different email.',
      position: 'bottom',
      duration: 3000,
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
