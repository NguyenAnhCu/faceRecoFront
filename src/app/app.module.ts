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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainnavComponent } from './mainnav/mainnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule, MatInputModule, MatTabsModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import {CreateTimesheetComponent} from './create-timesheet/create-timesheet.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_NATIVE_DATE_FORMATS,
  MatDateFormats,
  MatNativeDateModule
} from '@angular/material/core';
export const MY_FORMAT: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};

@NgModule({
  declarations: [
    AppComponent,
    AjoutEtudiantComponent,
    TimesheetDisplayComponent,
    RecongnizeStudentComponent,
    PromotionDisplayComponent,
    GroupDisplayComponent,
    AddPhotoStudentComponent,
    MainnavComponent,
    FooterComponent,
    CreateTimesheetComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ApiFaceRecoService,
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMAT }],
  bootstrap: [AppComponent],
})
export class AppModule { }
