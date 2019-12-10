import { Component, OnInit } from '@angular/core';
import { OrganisasiService } from './organisasi.service';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Organisasi, Users } from './organisasi.model';
import { ModalCreateOrganisasiComponent } from '../modal-create-organisasi/modal-create-organisasi.component';
import { ModalGroupPasswordComponent } from '../modal-group-password/modal-group-password.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-organisasi',
  templateUrl: './organisasi.page.html',
  styleUrls: ['./organisasi.page.scss'],
})
export class OrganisasiPage implements OnInit {

  loadedOrgs: Organisasi[];
  user: Users;

  private orgsCollection: AngularFirestoreCollection<Organisasi>;
  private organisasi: Observable<Organisasi[]>;
  private orgSubs: Subscription;
  
  constructor(
    private orgsService: OrganisasiService,
    private alertCtrl: AlertController,
    private router: Router,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.user = this.orgsService.getUser();
    this.orgSubs = this.orgsService.getOrgs().subscribe(res => {
      this.loadedOrgs = res;
      console.log(this.loadedOrgs);
    });
    console.log(this.user);
  }

  ionViewDidLoad() {
    this.user = this.orgsService.getUser();
    this.orgSubs = this.orgsService.getOrgs().subscribe(res => {
      this.loadedOrgs = res;
      console.log(this.loadedOrgs);
    });
    console.log(this.user);
  }

  ngOnDestroy() {
    console.log("destroyed");
    this.orgSubs.unsubscribe();
  }

  //Join Group
  async selectOrgs(org: Organisasi, iniId: string){
    const modal = await this.modalCtrl.create({
      component: ModalGroupPasswordComponent,
      componentProps: {selectedOrgs: org, selectedOrgId: iniId},
    });

    return await modal.present();
  }

  orgsOnClick(id: string) {
    this.router.navigate(['/organisasi', id]);
  }

  //Create Group
  async createOnClick(orgs: Organisasi) {
    const modal = await this.modalCtrl.create({
      component: ModalCreateOrganisasiComponent,
      componentProps: {selectedOrgs: orgs}
    });

    return await modal.present();
  }

  async createToast() {
    const toast = await this.toastCtrl.create({
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
}
