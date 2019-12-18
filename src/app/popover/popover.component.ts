import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrganisasiService } from '../organisasi/organisasi.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Users, Organisasi , History} from '../organisasi/organisasi.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { firestore } from 'firebase';
import * as firebase from 'firebase';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  @Input() selectedOrgId;

  user: Users;
  orgId = null;
  private histCollection: AngularFirestoreCollection<History>;
  private hist: Observable<History[]>;
  loadedHist: History[];
  
  constructor(
    private modalCtrl: ModalController,
    private orgsService: OrganisasiService,
    private actvRoute: ActivatedRoute,
    private db: AngularFirestore,
  ) { 
    this.user = this.orgsService.getUser();
    //this.orgId = this.actvRoute.snapshot.params['organisasiId'];
    
    // this.histCollection = db.collection('organisasi').doc(this.selectedOrgId).collection('history');
    
    // this.hist = this.histCollection.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc.id;
    //       return { id, ...data };
    //     });
    //   })
    // )
    // this.hist.subscribe(res => {
    //   this.loadedHist = res;
    // });
    
  }

  ngOnInit() {
    //console.log("id nya: " + this.selectedOrgId);
    //console.log(this.selectedOrgs);
    // this.hist.subscribe(res => {
    //   this.loadedHist = res;
    // });
  }
  
  loadData(){

    // this.histCollection = firebase.firestore().collection('organisasi').doc(this.selectedOrgId).collection('history');
    
    // this.hist = this.histCollection.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc.id;
    //       return { id, ...data };
    //     });
    //   })
    // )
    // this.hist.subscribe(res => {
    //   this.loadedHist = res;
    // });
  }
  

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
