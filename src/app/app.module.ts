import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalOutcomeDetailComponent } from './modal-outcome-detail/modal-outcome-detail.component';
import { PopoverComponent } from './popover/popover.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ModalCreateOrganisasiComponent } from './modal-create-organisasi/modal-create-organisasi.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ModalSignUpComponent } from './modal-sign-up/modal-sign-up.component';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth/auth.service';
// import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [AppComponent, ModalOutcomeDetailComponent, ModalCreateOrganisasiComponent, ModalSignUpComponent, PopoverComponent],
  entryComponents: [ModalOutcomeDetailComponent, ModalCreateOrganisasiComponent, ModalSignUpComponent, PopoverComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, FormsModule],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
