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
      displayName: '',
      email: ''
    }
    this.userSub = this.orgService.getUsers().subscribe(res => {
      this.allUser = res;
    });
  }

  onSignUp(f: NgForm) {

    if(f.value.confirmPwd != f.value.pwd) {
      this.passwordToast();
    }
    else if(f.value.confirmPwd == f.value.pwd) {
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
        this.authSvc.signup(f.value.inpEmail, f.value.pwd,f.value.inpName).subscribe(resp => {
          console.log(resp);
          this.presentLoading();
          this.modalCtrl.dismiss();
        });
        this.selectedUser = {
          displayName: f.value.inpName,
          email: f.value.inpEmail
        }
        console.log(this.selectedUser);
      }
    }
  }

  async passwordToast() {
    const toast = await this.toastCtrl.create({
      message: 'Password didn\'t match',
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

  ionViewDidLoad(){
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
