import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders }  from './app.routing';
import { AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddressComponent } from './address/address.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBulVYHp3MWlg_Mx8OqmKmtQwu7Ao51ZZg",
  authDomain: "mdoc1.firebaseapp.com",
  databaseURL: "https://mdoc1.firebaseio.com",
  storageBucket: "project-7103516944652309740.appspot.com"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemsComponent,
    CustomerListComponent,
    AddressComponent,
    CustomerComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
