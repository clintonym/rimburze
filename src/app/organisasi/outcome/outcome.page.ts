import { Component, OnInit } from '@angular/core';
import { Organisasi, Outcome } from '../organisasi.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganisasiService } from '../organisasi.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalOutcomeDetailComponent } from 'src/app/modal-outcome-detail/modal-outcome-detail.component';
import { PopoverComponent } from 'src/app/popover/popover.component';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.page.html',
  styleUrls: ['./outcome.page.scss'],
})
export class OutcomePage implements OnInit {

  loadedOrgs: Organisasi;

  constructor(
    private activatedOrgs: ActivatedRoute,
    private orgsService: OrganisasiService,
    private modalCtrl: ModalController,
    private router: Router,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.activatedOrgs.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('organisasiId')) {
          return;
        }
        this.loadedOrgs = this.orgsService.getOrgs(paramMap.get('organisasiId'));
      }
    )
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
