import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Asegúrate de importar IonicModule

import { TeacherhomePageRoutingModule } from './teacherhome-routing.module';
import { TeacherHomePage } from './teacherhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Necesario para usar componentes de Ionic
    TeacherhomePageRoutingModule
  ],
  declarations: [TeacherHomePage]
})
export class TeacherHomePageModule {}
