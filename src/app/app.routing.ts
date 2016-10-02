import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ItemsComponent } from "./items/items.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'items', component: ItemsComponent },
  { path: '', component: LoginComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
