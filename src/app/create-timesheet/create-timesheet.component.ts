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

  dateTimesheet: Date;
  wordingT: string;
  promotionId: string;
  promotions: Promotion[] = [];

  constructor(private apiFaceReco: ApiFaceRecoService) { }

  ngOnInit() {
    this.apiFaceReco.getAllPromotions().subscribe(data => {
      data.forEach((p) => {
        this.promotions.push(new Promotion(p.id, p.wording));
      });
    });
  }
  changeDate(event) {
    const dateT = event.target.value;
    this.dateTimesheet = dateT.toISOString();
    console.log(this.dateTimesheet);
  }
  createTimesheet(formTimesheet: NgForm) {
    console.log(this.dateTimesheet);
/*    current = current.replace('T', ' ');
    current = current.split('.')[0];
    const students: number[] = [];
    this.apiFaceReco.getStudentByPromotion(this.promotionId).subscribe(data => {
      data.forEach((s) => {
        students.push(s.number);
      });
      const timesheet: TimesheetModel = new TimesheetModel(current, this.wordingT, students);
      this.apiFaceReco.postTimeSheet(timesheet).subscribe(res => {
        alert('Feuille de présence créee : ' + this.wordingT);
        formTimesheet.resetForm();
      });
    });*/
  }

}
