import { Component, OnInit, Input } from '@angular/core';
import { Outcome } from '../organisasi/organisasi.model';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-outcome-detail',
  templateUrl: './modal-outcome-detail.component.html',
  styleUrls: ['./modal-outcome-detail.component.scss'],
})
export class ModalOutcomeDetailComponent implements OnInit {

  @Input() selectedOrgs: Outcome;

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  getTotalPrice() {
    let sumVal = 0;
    for(let item of this.selectedOrgs.obj) {
      sumVal += item.price;
    }
    console.log(sumVal);
    return sumVal;
  }

  async addOnClick() {
    const alert = await this.alertCtrl.create({
      message: 'What was the last item you bought?',
      inputs: [
        {
          name: 'obj',
          placeholder: 'Item\'s name',
        },
        {
          name: 'price',
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
          text: 'Submit',
          handler: () => {
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
      message: 'Are you sure want to close the receipt? did you got paid?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes, and I want to close it',
          handler: () => {
            this.router.navigate(['/organisasi']);
            this.presentToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
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

}
