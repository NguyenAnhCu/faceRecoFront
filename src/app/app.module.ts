import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ApiFaceRecoService} from './api-face-reco.service';
import {Router, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { TimesheetDisplayComponent } from './timesheet-display/timesheet-display.component';
import { RecongnizeStudentComponent } from './recongnize-student/recongnize-student.component';
import { PromotionDisplayComponent } from './promotion-display/promotion-display.component';
import { GroupDisplayComponent } from './group-display/group-display.component';
import {AjoutEtudiantComponent} from './ajout-etudiant/ajout-etudiant.component';
import { AddPhotoStudentComponent } from './add-photo-student/add-photo-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutEtudiantComponent,
    TimesheetDisplayComponent,
    RecongnizeStudentComponent,
    PromotionDisplayComponent,
    GroupDisplayComponent,
    AddPhotoStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [ApiFaceRecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
