import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {MaintenanceComponent} from "./shared/maintenance/maintenance.component";


const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent},
  { path: 'maintenance', component: MaintenanceComponent},
  { path: '' ,redirectTo:"home", pathMatch: "full"},
  { path: 'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: '**', redirectTo: "not-found", pathMatch: "full" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
