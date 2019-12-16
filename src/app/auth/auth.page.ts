import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { ModalSignUpComponent } from '../modal-sign-up/modal-sign-up.component';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { OrganisasiService } from '../organisasi/organisasi.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private authSvc: AuthService,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private orgService: OrganisasiService
  ) { }

  ngOnInit() {
  }

  onLogin(f: NgForm) {
    
    this.authSvc.login(f.value.email, f.value.pwd).subscribe(resp => {
      console.log(resp);
      this.orgService.setSelectedUser(resp);
      this.navCtrl.navigateRoot('organisasi');
      // this.router.navigateByUrl('organisasi');
    }, err => {
      this.passwordToast();
    })
  }

  async passwordToast() {
    const toast = await this.toastCtrl.create({
      message: 'Wrong email or password',
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ],
      duration: 5000
    });
    toast.present();
  }

  async modalSignUp() {
    const modal = await this.modalCtrl.create({
      component: ModalSignUpComponent
    });
    return await modal.present();
  }

}
