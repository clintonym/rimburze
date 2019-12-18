import { Component, OnInit } from '@angular/core';
import { Organisasi, Outcome, Users } from '../organisasi.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisasiService } from '../organisasi.service';
import { ModalController, PopoverController, ToastController } from '@ionic/angular';
import { ModalOutcomeDetailComponent } from 'src/app/modal-outcome-detail/modal-outcome-detail.component';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Observable } from 'rxjs';
import { tokenName } from '@angular/compiler';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.page.html',
  styleUrls: ['./outcome.page.scss'],
})
export class OutcomePage implements OnInit {

  private outcomeCollection: AngularFirestoreCollection<Outcome>;
  private outcome: Observable<Outcome[]>;

  loadedOrgs: Organisasi;
  user: Users;
  orgId = null;
  tombolAdd = true;
  loadedOutcome: Outcome[];
  oc: Outcome;
  ref: any;
  outcome2: Outcome[];
  listLength: any;
  ada = false;

  constructor(
    private activatedOrgs: ActivatedRoute,
    private orgsService: OrganisasiService,
    private modalCtrl: ModalController,
    private router: Router,
    private popoverCtrl: PopoverController,
    private actvRoute: ActivatedRoute,
    private db: AngularFirestore,
    private toastCtrl: ToastController,
  ) {
    this.orgId = this.actvRoute.snapshot.params['organisasiId'];

    this.outcomeCollection = db.collection<Organisasi>('organisasi').doc(this.orgId).collection<Outcome>('outcome');
    
    this.outcome = this.outcomeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    )
    this.listLength = 0;
    this.outcome.subscribe(res => {
      this.outcome2 = res;
      this.listLength = res.length;
      return this.cekUser(this.outcome2);
    });
  }

  ngOnInit() {
    this.loadedOrgs = this.orgsService.getSelectedOrgs();
    this.user = this.orgsService.getUser();
    this.orgId = this.actvRoute.snapshot.params['organisasiId'];
  }
  
  ionViewWillEnter() {
    this.loadedOrgs = this.orgsService.getSelectedOrgs();
    this.user = this.orgsService.getUser();
    this.orgId = this.actvRoute.snapshot.params['organisasiId'];
  }

  cekUser(oc) {   
    for(let v of oc) {
      console.log(v.name + v.email);
      if(this.user.email == v.email) {
        console.log("ada");
        this.ada = true;
      }
      else if(this.user.email != v.email) {
        this.ada = this.ada;
        console.log("belum ada");
      }
      if(this.ada == true) {
        this.tombolAdd = false;
      }
      else if(this.ada == false) {
        this.tombolAdd = true;
      }
    }
  }
  
  addUserOnClick() {
    firebase.firestore()
    .collection('organisasi').doc(this.orgId).collection('outcome').add(
      { 
        email: this.user.email,
        name: this.user.displayName,
        obj: []
      },
    ).then(() => {
      console.log("updated");
      this.joinToast();
    });
    
  }

  async joinToast() {
    const toast = await this.toastCtrl.create({
      message: 'Welcome to \"' + this.loadedOrgs.name + '\"',
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

  async modalOnClick(orgs: Outcome) {
    const modal = await this.modalCtrl.create({
      component: ModalOutcomeDetailComponent,
      componentProps: { selectedOrgs: orgs, }
    });
    return await modal.present();
  }

  outcomeDetail(oc) {
    this.orgsService.setOutcome(oc);
    this.router.navigate(['/organisasi', this.orgId, oc.id]);
  }

  async histOnClick(orgs: Organisasi) {
    const modal = await this.modalCtrl.create({
      component: PopoverComponent,
      componentProps: {selectedOrgs: orgs}
    });
    return await modal.present();
  }

}