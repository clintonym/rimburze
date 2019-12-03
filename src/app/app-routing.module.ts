import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { getHtmlTagDefinition } from '@angular/compiler';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { 
    path: 'organisasi', 
    children: [
      {
        path: '',
        loadChildren: './organisasi/organisasi.module#OrganisasiPageModule' 
      },
      {
        path: ':organisasiId',
        children: [
          {
            path: '',
            loadChildren: './organisasi/outcome/outcome.module#OutcomePageModule'  
          },
          {
            path:':outcomeId',
            loadChildren: './organisasi/outcome/outcome-detail/outcome-detail.module#OutcomeDetailPageModule'
          }
        ]
      }
    ]
  },
  //{ path: 'outcome', loadChildren: './organisasi/outcome/outcome.module#OutcomePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
