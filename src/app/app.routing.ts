import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ItemsComponent } from "./items/items.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerEditComponent } from "./customer-edit/customer-edit.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerEditComponent },
  { path: '', component: LoginComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
