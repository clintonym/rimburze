import { Injectable } from '@angular/core';
import { Organisasi, Users, Outcome } from './organisasi.model';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { fromBytesBE } from 'long';


@Injectable({
  providedIn: 'root'
})

export class OrganisasiService {

  // private _organisasi: Organisasi[] = [
  //   {
  //     id: 'org1',
  //     name: 'CSIC',
  //     year: '2016',
  //     history: [
  //       {
  //         id: 'org1h1',
  //         name: 'Kevin Brooks',
  //         date: '4 Januari 2017',
  //         total: 50000
  //       }
  //     ],
  //     outcome: [
  //       {
  //         id: 'org1o1',
  //         name: 'Kevin Brooks',
  //         obj: [
  //           {
  //             id: 'org1o1b1',
  //             objName: 'Karat Besi',
  //             price: 50000,
  //             date: '28 Oktober 2016'
  //           }
  //         ]
  //       },
  //       {
  //         id: 'org1o2',
  //         name: 'Arnold Matilde',
  //         obj: [
  //           {
  //             id: 'org1o2b1',
  //             objName: 'Sapu Lidi',
  //             price: 12000,
  //             date: '28 Oktober 2016'
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id: 'org2',
  //     name: 'Grup Keluarga Cemara',
  //     year: '2017',
  //     history: [
  //       {
  //         id: 'org2h1',
  //         name: 'Leo Cooper',
  //         date: '3 Maret 2018',
  //         total: 42000
  //       }
  //     ],
  //     outcome: [
  //       {
  //         id: 'org2o1',
  //         name: 'Leo Cooper',
  //         obj: [
  //           {
  //             id: 'org2o1b1',
  //             objName: 'Selang Bocor',
  //             price: 35000,
  //             date: '7 Desember 2017'
  //           },
  //           {
  //             id: 'org2o1b2',
  //             objName: 'Tali Plastik',
  //             price: 7000,
  //             date: '10 Desember 2017'
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id: 'org3',
  //     name: 'Grup Mobile Bebas',
  //     year: '2018',
  //     history: [
  //       {
  //         id: 'org3h1',
  //         name: 'Ross Martina',
  //         date: '18 April 2019',
  //         total: 179000
  //       },
  //       {
  //         id: 'org3h2',
  //         name: 'Gloria Stephanie',
  //         date: '20 April 2019',
  //         total: 55000
  //       }
  //     ],
  //     outcome: [
  //       {
  //         id: 'org3o1',
  //         name: 'Ross Martina',
  //         obj: [
  //           {
  //             id: 'org3o1b1',
  //             objName: 'Mama Lemon',
  //             price: 14000,
  //             date: '1 November 2018'
  //           },
  //           {
  //             id: 'org3o1b2',
  //             objName: 'Kabel LAN 10m',
  //             price: 125000,
  //             date: '1 November 2017'
  //           },
  //           {
  //             id: 'org3o1b3',
  //             objName: 'Kayu plastik',
  //             price: 40000,
  //             date: '4 November 2017'
  //           }
  //         ]
  //       },
  //       {
  //         id: 'org3o2',
  //         name: 'Gloria Stephanie',
  //         obj: [
  //           {
  //             id: 'org3o2b1',
  //             objName: 'Paku Beton',
  //             price: 55000,
  //             date: '5 November 2017'
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]

  private orgsCollection: AngularFirestoreCollection<Organisasi>;
  private organisasi: Observable<Organisasi[]>;
  private selectedOrganisasi: Organisasi;

  private usersCollection: AngularFirestoreCollection<Users>;
  private user: Observable<Users[]>;
  private selectedUser: Users;

  private addUserCollection: AngularFirestoreDocument<Outcome>;
  private outcome: Observable<Outcome[]>;
  private addedUser: Outcome;

  private OrgId: any;

  private path: any;
  private dbUser: AngularFirestore;

  constructor(
    db: AngularFirestore
  ) {
    this.orgsCollection = db.collection<Organisasi>('organisasi');
    
    this.organisasi = this.orgsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          this.path = a.payload.doc.ref.path;
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          this.OrgId = id;
          console.log("PATH: " + this.path);
          console.log("OrgID: " + this.OrgId);
          return { id, ...data };
        });
      })
    )

    this.usersCollection = db.collection<Users>('users');

    this.user = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map( u => {
          const data = u.payload.doc.data();
          const id = u.payload.doc.id;
          return {id, ...data};
        });
      })
    )
  }

  getOrgs() {
    return this.organisasi;
  }

  getOrg(organisasiId) {
    return this.orgsCollection.doc<Organisasi>(organisasiId).valueChanges();
  }

  updateOrgs(orgs: Organisasi, organisasiId: string) {
    return this.orgsCollection.doc(organisasiId).update(orgs);
  }

  addOrgs(orgs: Organisasi) {
    return this.orgsCollection.add(orgs);
  }

  // joinOrg(id,password){
  //   this.orgsCollection.doc<Organisasi>(id).collection('password',password);
  // }

  removeOrgs(organisasiId) {
    return this.orgsCollection.doc(organisasiId).delete();
  }

  setSelectedOrgs(Orgs: Organisasi){
    this.selectedOrganisasi = Orgs;
  }

  getSelectedOrgs(){
    return this.selectedOrganisasi;
  }
  
  // getOutcomes(id){
  //   return this.orgsCollection.doc<Organisasi>(id).collection('outcomes');
  // }

  addUser(user: Users) {
    return this.usersCollection.add(user);
  }

  setSelectedUser(resp){
    this.selectedUser = resp;
  }

  getUser(){
    return this.selectedUser;
  }

  addUserOutcome(oc) {
    return this.orgsCollection.doc(this.OrgId).collection('outcome').add(oc);
  }

  tambahUser(oc) {
    return this.dbUser.doc<Organisasi>(this.OrgId).set(oc);
  }
}
