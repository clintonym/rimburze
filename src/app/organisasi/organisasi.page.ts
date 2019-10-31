import { Component, OnInit } from '@angular/core';
import { OrganisasiService } from './organisasi.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Organisasi } from './organisasi.model';

@Component({
  selector: 'app-organisasi',
  templateUrl: './organisasi.page.html',
  styleUrls: ['./organisasi.page.scss'],
})
export class OrganisasiPage implements OnInit {

  loadedOrgs: Organisasi[];

  constructor(
    private orgsService: OrganisasiService,
    private alertCtrl: AlertController,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadedOrgs = this.orgsService.orgs;
  }

  orgsOnClick(id: string) {
    this.router.navigate(['/organisasi', id]);
  }

  async createOnClick() {
    const alert = await this.alertCtrl.create({
      header: 'Create Group',
      message: 'Create a group for you and your friends',
      inputs: [
        {
          name: 'id',
          placeholder: 'ID',
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Create',
          handler: () => {
            this.createToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async joinOnClick() {
    const alert = await this.alertCtrl.create({
      header: 'Join Group',
      message: 'Join a group that has been created',
      inputs: [
        {
          name: 'id',
          placeholder: 'ID',
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Join',
          handler: () => {
            this.joinToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async createToast() {
    const toast = await this.toastController.create({
      message: 'Group created',
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

  async joinToast() {
    const toast = await this.toastController.create({
      message: 'Welcome',
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
