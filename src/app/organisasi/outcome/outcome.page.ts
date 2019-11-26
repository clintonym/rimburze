import { Component, OnInit } from '@angular/core';
import { Organisasi, Outcome, Users } from '../organisasi.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisasiService } from '../organisasi.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalOutcomeDetailComponent } from 'src/app/modal-outcome-detail/modal-outcome-detail.component';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Observable } from 'rxjs';
import { tokenName } from '@angular/compiler';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.page.html',
  styleUrls: ['./outcome.page.scss'],
})
export class OutcomePage implements OnInit {

  loadedOrgs: Organisasi;
  user: Users;
  orgId = null;
  loadedOutcome: Outcome[];
  oc: Outcome;
  ref: any;
  

  constructor(
    private activatedOrgs: ActivatedRoute,
    private orgsService: OrganisasiService,
    private modalCtrl: ModalController,
    private router: Router,
    private popoverCtrl: PopoverController,
    private actvRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadedOrgs = this.orgsService.getSelectedOrgs();
    this.user = this.orgsService.getUser();
    this.orgId = this.actvRoute.snapshot.params['organisasiId'];

    console.log(this.orgId);
    
  }

  ionViewWillEnter(){
    var i;
    for(i=0; i<this.loadedOrgs.outcome.length; i++) {
      this.loadedOutcome = this.loadedOrgs.outcome;
      if(this.user.displayName == this.loadedOutcome[i].name) {
        console.log("ada");
      }
      else {
        console.log("belum ada");
        this.oc = {
          name: this.user.displayName,
          obj: []
        }
        console.log(this.oc);
        this.orgsService.addUserOutcome(this.orgId,this.oc);
        
      }
      console.log(this.loadedOutcome[i].name);
    }
  }

  async modalOnClick(orgs: Outcome) {
    const modal = await this.modalCtrl.create({
      component: ModalOutcomeDetailComponent,
      componentProps: {selectedOrgs: orgs}
    });

    return await modal.present();
  }

  async histOnClick(orgs: Organisasi) {
    const modal = await this.modalCtrl.create({
      component: PopoverComponent,
      componentProps: {selectedOrgs: orgs}
    });
    return await modal.present();
  }

}
