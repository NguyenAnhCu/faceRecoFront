import { Component, OnInit } from '@angular/core';
import {Promotion} from '../promotion';
import {ApiFaceRecoService} from '../api-face-reco.service';
import {NgForm} from '@angular/forms';
import {TimesheetModel} from '../timesheet';

@Component({
  selector: 'app-create-timesheet',
  templateUrl: './create-timesheet.component.html',
  styleUrls: ['./create-timesheet.component.css']
})
export class CreateTimesheetComponent implements OnInit {

  dateTimesheet = new Date();
  wordingT: string;
  promotionId: string;
  promotions: Promotion[] = [];

  constructor(private apiFaceReco: ApiFaceRecoService) {}


  ngOnInit() {
    this.apiFaceReco.getAllPromotions().subscribe(data => {
      data.forEach((p) => {
        this.promotions.push(new Promotion(p.id, p.wording));
      });
    });
  }

  createTimesheet(formTimesheet: NgForm) {
   const dateT = this.dateTimesheet.toLocaleString();
   const dates = dateT.split('/');
   const year = dates[2].split(' ')[0];
   const month = dates [1];
   const day = dates [0];
   const dateComplete = year + '-' + month + '-' + day + ' 00:00:00';
   const students: number[] = [];
   this.apiFaceReco.getStudentByPromotion(this.promotionId).subscribe(data => {
     data.forEach((s) => {
       students.push(s.number);
     });
     const timesheet: TimesheetModel = new TimesheetModel(dateComplete, this.wordingT, students);
     this.apiFaceReco.postTimeSheet(timesheet).subscribe(res => {
       alert('Feuille de présence créée : ' + this.wordingT);
       formTimesheet.resetForm();
     });
    });
  }

}
