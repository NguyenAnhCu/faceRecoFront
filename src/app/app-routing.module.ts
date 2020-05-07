import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {AjoutEtudiantComponent} from './ajout-etudiant/ajout-etudiant.component';
import {TimesheetDisplayComponent} from './timesheet-display/timesheet-display.component';
import {RecongnizeStudentComponent} from './recongnize-student/recongnize-student.component';
import {PromotionDisplayComponent} from './promotion-display/promotion-display.component';
import {GroupDisplayComponent} from './group-display/group-display.component';
import {AddPhotoStudentComponent} from './add-photo-student/add-photo-student.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {CreateTimesheetComponent} from './create-timesheet/create-timesheet.component';
const routes: Routes = [
  {path: 'studentForm', component: AjoutEtudiantComponent},
  {path: 'timesheets', component: TimesheetDisplayComponent},
  {path: 'recognition', component: RecongnizeStudentComponent},
  {path: 'promotion', component: PromotionDisplayComponent},
  {path: 'group', component: GroupDisplayComponent},
  {path: 'addPhoto', component: AddPhotoStudentComponent},
  {path: 'etudiant', component: StudentDetailsComponent},
  {path: 'createTimeSheet', component: CreateTimesheetComponent},
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
