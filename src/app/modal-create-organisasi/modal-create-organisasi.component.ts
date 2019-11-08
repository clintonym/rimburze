import { Component, OnInit, Input } from '@angular/core';
import { Organisasi } from '../organisasi/organisasi.model';
import { ActivatedRoute } from '@angular/router';
import { OrganisasiService } from '../organisasi/organisasi.service';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal-create-organisasi',
  templateUrl: './modal-create-organisasi.component.html',
  styleUrls: ['./modal-create-organisasi.component.scss'],
})
export class ModalCreateOrganisasiComponent implements OnInit {

  // @Input() selectedOrgs: Organisasi;

  selectedOrgs: Organisasi;

  constructor(
    private route: ActivatedRoute,
    private orgsService: OrganisasiService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // this.organisasiId = this.route.snapshot.params['id'];
    // if(this.organisasiId) {
    //   this.loadedOrgs();
    // }
    this.selectedOrgs = {
      id: '',
      name: '',
      password: '',
      year: '',
      history: [
        {
          id: 'org1h1',
          name: 'Kevin Brooks',
          date: '4 Januari 2017',
          total: 50000
        }
      ],
      outcome: [
        {
          id: 'org1o1',
          name: 'Kevin Brooks',
          obj: [
            {
              id: 'org1o1b1',
              objName: 'Karat Besi',
              price: 50000,
              date: '28 Oktober 2016'
            }
          ]
        },
      ]
    }
  }

  // async loadedOrgs() {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'Loading...'
  //   });
  //   await loading.present();
    
  //   this.orgsService.getOrg(this.organisasiId).subscribe(res => {
  //     loading.dismiss();
  //     this.orgs = res;
  //   })
  // }

  async createGroup() {
    const loading = await this.loadingCtrl.create({
      message: 'Creating Group...'
    });
    await loading.present();

    this.orgsService.addOrgs(this.selectedOrgs).then(() => {
      loading.dismiss();
      this.navCtrl.navigateBack('organisasi');
    })
  }

}
