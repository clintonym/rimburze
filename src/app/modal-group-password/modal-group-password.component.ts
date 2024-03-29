import { Component, OnInit, Input } from '@angular/core';
import { Organisasi, Users } from '../organisasi/organisasi.model';
import { ModalController, ToastController } from '@ionic/angular';
import { OrganisasiService } from '../organisasi/organisasi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-group-password',
  templateUrl: './modal-group-password.component.html',
  styleUrls: ['./modal-group-password.component.scss'],
})
export class ModalGroupPasswordComponent implements OnInit {
  @Input() selectedOrgs: Organisasi;
  @Input() selectedOrgId: string;

  enterPwd: string;
  @Input() user: Users;

  constructor(
    private modalCtrl: ModalController, 
    private orgService:OrganisasiService, 
    private router: Router,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.user = this.orgService.getUser();
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  enterGroup(){
    if(this.selectedOrgs.password == this.enterPwd){
      this.orgService.setSelectedOrgs(this.selectedOrgs);
      this.router.navigate(['/organisasi', this.selectedOrgId]);
      this.modalCtrl.dismiss(null, 'cancel');
    }
    else{
      this.passwordToast();
    }
    // this.orgService.joinOrg(org.id,password);
    // this.orgService.setSelectedOrgs(org);
    // this.router.navigate(['/organisasi', org.id]);
  }
  async passwordToast() {
    const toast = await this.toastCtrl.create({
      message: 'Wrong password',
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
