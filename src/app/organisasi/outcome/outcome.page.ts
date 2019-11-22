import { Component, OnInit } from '@angular/core';
import { Organisasi, Outcome } from '../organisasi.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisasiService } from '../organisasi.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalOutcomeDetailComponent } from 'src/app/modal-outcome-detail/modal-outcome-detail.component';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Observable } from 'rxjs';
import { tokenName } from '@angular/compiler';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.page.html',
  styleUrls: ['./outcome.page.scss'],
})
export class OutcomePage implements OnInit {

  loadedOrgs: Organisasi;
  orgId = null;

  constructor(
    private activatedOrgs: ActivatedRoute,
    private orgsService: OrganisasiService,
    private modalCtrl: ModalController,
    private router: Router,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    console.log(this.orgsService.getSelectedOrgs());
    this.loadedOrgs = this.orgsService.getSelectedOrgs();
 
    // this.orgId = this.activatedOrgs.snapshot.params['organisasiId'];
    // if(this.orgId){
    //   console.log(this.orgId);
    //   this.orgsService.getOrg(this.orgId).subscribe(res => {
    //     this.loadedOrgs = res;
    //   });;
    //   console.log(this.loadedOrgs);
    // }
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
