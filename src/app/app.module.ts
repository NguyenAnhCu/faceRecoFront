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
    CreateTimesheetComponent
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
    MatInputModule
  ],
  providers: [ApiFaceRecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
