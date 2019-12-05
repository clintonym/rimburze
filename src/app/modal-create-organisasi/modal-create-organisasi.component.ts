import { Component, OnInit, Input } from '@angular/core';
import { Organisasi, Users } from '../organisasi/organisasi.model';
import { ActivatedRoute } from '@angular/router';
import { OrganisasiService } from '../organisasi/organisasi.service';
import { LoadingController, NavController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-create-organisasi',
  templateUrl: './modal-create-organisasi.component.html',
  styleUrls: ['./modal-create-organisasi.component.scss'],
})
export class ModalCreateOrganisasiComponent implements OnInit {

  selectedOrgs: Organisasi;
  user: Users;

  constructor(
    private route: ActivatedRoute,
    private orgsService: OrganisasiService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
  ) {}

  ngOnInit() {
    this.user = this.orgsService.getUser();
    this.selectedOrgs = {
      name: '',
      password: '',
      year: new Date().getFullYear(),
      history: [],
      outcome: [
        {
          email: this.user.email,
          name: this.user.displayName,
          obj: [
            {
              objName: '',
              price: null,
              date: ''
            }
          ]
        }
      ]
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  async createGroup() {
    const loading = await this.loadingCtrl.create({
      message: 'Creating Group...'
    });
    await loading.present();

    this.orgsService.addOrgs(this.selectedOrgs).then(() => {
      loading.dismiss();
      this.onCancel();
      this.groupCreatedToast();
    })
  }

  async groupCreatedToast() {
    const toast = await this.toastCtrl.create({
      message: 'Group created',
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
