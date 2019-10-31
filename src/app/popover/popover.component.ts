import { Component, OnInit, Input } from '@angular/core';
import { Organisasi, Outcome, Obj } from '../organisasi/organisasi.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  @Input() selectedOrgs: Organisasi;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.selectedOrgs);
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
