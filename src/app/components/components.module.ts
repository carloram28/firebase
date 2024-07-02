import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficaBarraHorizontalComponent } from './grafica-barra-horizontal/grafica-barra-horizontal.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficaBarraHorizontalComponent
  ],
  exports: [
    NavbarComponent,
    GraficaBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule { }
