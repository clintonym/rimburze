import { Component, OnInit } from '@angular/core';
import { Users } from '../organisasi/organisasi.model';
import { OrganisasiService } from '../organisasi/organisasi.service';
import { first } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: Users;
  constructor(private orgService: OrganisasiService) { 
    
  }
  
  ngOnInit() {
    this.user = this.orgService.getUser();
    
  }
 
}
