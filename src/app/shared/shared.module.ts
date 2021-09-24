import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ButtonsModule, IconsModule, NavbarModule, WavesModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
