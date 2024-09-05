import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Asegúrate de importar IonicModule

import { StudenthomePageRoutingModule } from './studenthome-routing.module';
import { StudentHomePage } from './studenthome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Necesario para usar componentes de Ionic
    StudenthomePageRoutingModule
  ],
  declarations: [StudentHomePage]
})
export class StudentHomePageModule {}
