import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users, History } from '../organisasi.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { OrganisasiService } from '../organisasi.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  user: Users;
  orgId = null;
  private histCollection: AngularFirestoreCollection<History>;
  private hist: Observable<History[]>;
  loadedHist: History[];

  constructor( 
    private modalCtrl: ModalController,
    private orgsService: OrganisasiService,
    private actvRoute: ActivatedRoute,
    private db: AngularFirestore,) 
    {
      this.user = this.orgsService.getUser();
      this.orgId = this.actvRoute.snapshot.params['organisasiId'];
      
      this.histCollection = db.collection('organisasi').doc(this.orgId).collection('history');
      
      this.hist = this.histCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      )
      this.hist.subscribe(res => {
        this.loadedHist = res;
      });
   }

  ngOnInit() {
  }

}
