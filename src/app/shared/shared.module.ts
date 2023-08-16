import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    MaintenanceComponent,
    HeaderComponent
  ],
  exports: [
    NotFoundComponent,
    MaintenanceComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class SharedModule { }
