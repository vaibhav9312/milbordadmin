import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule, Directive } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './common/auth.guard';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt.js';
import { CKEditorModule } from 'ng2-ckeditor';
import { SharedFileUploadModule } from './modules/app.fileupload.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from "./components/shared/shared.module";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { SigninComponent } from './components/signin/signin.component';
import { AppContainerComponent } from './components/app-container/app-container.component';

import { AccountService } from './services/account.service';
import { ClientManagementService } from './services/client-management.service';
import { ProductManagementService } from './services/product-management.service';
import { ProductGroupManagementService } from './services/product-group-management.service';

import { ClientTypeComponent } from './components/client-type/client-type.component';
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientApprovalComponent } from './components/client-approval/client-approval.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ConfirmDirective } from './directives/confirm.directive';
import {RlTagInputModule} from 'angular2-tag-input';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    headerName:'Authorization',
    headerPrefix :'',
    noTokenScheme:true,
		tokenGetter: (() => localStorage.getItem('token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}


@NgModule({
  declarations: [
    AppContainerComponent,
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    SigninComponent,
    PageNotFoundComponent,
    ClientTypeComponent,
    ConfirmDirective,
    ClientRegistrationComponent,
    ProductRegistrationComponent,
    ClientListComponent,
    ClientApprovalComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AppRoutingModule,
    MultiselectDropdownModule,
    CKEditorModule,
    SharedFileUploadModule,
    RlTagInputModule,
    BrowserAnimationsModule, 
    SimpleNotificationsModule.forRoot()
  ],
  providers: [AccountService,ClientManagementService, AuthGuard, AuthHttp, ProductManagementService, ProductGroupManagementService, {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
