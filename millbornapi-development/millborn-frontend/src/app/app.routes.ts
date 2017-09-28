import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AppContainerComponent } from './components/app-container/app-container.component';
import { SigninComponent } from './components/signin/signin.component';
import { ClientTypeComponent } from './components/client-type/client-type.component';
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientApprovalComponent } from './components/client-approval/client-approval.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { SharedModule } from "./components/shared/shared.module";


const routes: Routes = [
  {
    path: 'account',
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: SigninComponent },

    ]
  },
  {
    path: 'app',
    component: AppContainerComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
      { path: 'clienttype', component: ClientTypeComponent, canActivate:[AuthGuard] },
      { path: 'productregistration', component: ProductRegistrationComponent, canActivate:[AuthGuard] },
      {
        path : 'product',
        children : [
          { path: 'list', component: ProductListComponent, canActivate:[AuthGuard] },
          { path: 'update/:id', component: ProductRegistrationComponent, canActivate:[AuthGuard] }
        ]
      },
      {
        path : 'client',
        children : [
          { path: 'create', component: ClientRegistrationComponent, canActivate:[AuthGuard] },
          { path: 'update/:id', component: ClientRegistrationComponent, canActivate:[AuthGuard] },
          { path: 'list', component: ClientListComponent, canActivate:[AuthGuard] },
          { path: 'approval/:id', component: ClientApprovalComponent, canActivate:[AuthGuard] }
        ]
      }
    ]
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }