import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-sign-up',
  templateUrl: './modal-sign-up.component.html',
  styleUrls: ['./modal-sign-up.component.scss'],
})
export class ModalSignUpComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private authSvc: AuthService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {}

  onSignUp(f: NgForm) {
    console.log(f.value);
    this.authSvc.signup(f.value.email, f.value.pwd).subscribe(resp => {
      console.log(resp);
      this.presentLoading();
      this.modalCtrl.dismiss();
    })
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

}
