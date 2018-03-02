import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CssBindingComponent } from './css-binding/css-binding.component';



export const router: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'binding', component: CssBindingComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
