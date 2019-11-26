import { Component, OnInit } from '@angular/core';
import { OrganisasiService } from './organisasi.service';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Organisasi, Users } from './organisasi.model';
import { ModalCreateOrganisasiComponent } from '../modal-create-organisasi/modal-create-organisasi.component';
import { ModalGroupPasswordComponent } from '../modal-group-password/modal-group-password.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-organisasi',
  templateUrl: './organisasi.page.html',
  styleUrls: ['./organisasi.page.scss'],
})
export class OrganisasiPage implements OnInit {

  loadedOrgs: Organisasi[];
  private orgsCollection: AngularFirestoreCollection<Organisasi>;
  private organisasi: Observable<Organisasi[]>;
  user: Users;
  
  constructor(
    private orgsService: OrganisasiService,
    private alertCtrl: AlertController,
    private router: Router,
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private db: AngularFirestore
  ) { 
    // this.organisasi = this.orgsCollection.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc.id;
    //       return { id, ...data };
    //     });
    //   })
    // )
    // this.organisasi.subscribe(docs => {
    //   docs.forEach(doc => {
    //     console.log(doc.id);
    //   })
    // })
  }

  ngOnInit() {
    this.user = this.orgsService.getUser();
    this.orgsService.getOrgs().subscribe(res => {
      this.loadedOrgs = res;
      console.log(this.loadedOrgs);
    });
    console.log(this.user);
  }

  async selectOrgs(org: Organisasi){
    // const alert = await this.alertCtrl.create({
    //     header: 'Join Group',
    //     message: 'Enter Password',
    //     inputs: [
    //       {
    //         name: 'password',
    //         placeholder: 'Password',
    //         type: 'password'
    //       }
    //     ],
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         role: 'cancel',
    //       },
    //       {
    //         text: 'Join',
    //         handler: () => {
    //           // this.orgsService.joinOrg(org.id,password);
    //           // this.orgsService.setSelectedOrgs(org);
    //           // this.router.navigate(['/organisasi', org.id]);
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present();
    const modal = await this.modalCtrl.create({
      component: ModalGroupPasswordComponent,
      componentProps: {selectedOrgs: org}
    });

    return await modal.present();
  }

  orgsOnClick(id: string) {
    this.router.navigate(['/organisasi', id]);
  }

  // async createOnClick() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Create Group',
  //     message: 'Create a group for you and your friends',
  //     inputs: [
  //       {
  //         name: 'id',
  //         placeholder: 'ID',
  //       },
  //       {
  //         name: 'password',
  //         placeholder: 'Password',
  //         type: 'password'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //       },
  //       {
  //         text: 'Create',
  //         handler: () => {
  //           this.orgsService.addOrgs(this.orgs).then(() => {
  //             this.createToast();
  //           })
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  async createOnClick(orgs: Organisasi) {
    const modal = await this.modalCtrl.create({
      component: ModalCreateOrganisasiComponent,
      componentProps: {selectedOrgs: orgs}
    });

    return await modal.present();
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
