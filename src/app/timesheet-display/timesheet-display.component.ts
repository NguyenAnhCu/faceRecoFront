import { Component, OnInit } from '@angular/core';
import {ApiFaceRecoService} from '../api-face-reco.service';
import {Timesheet} from '../timesheet';
import {Presence} from '../presence';
import {Promotion} from '../promotion';
import {Group} from '../group';
import {Student} from '../student';

@Component({
  selector: 'app-timesheet-display',
  templateUrl: './timesheet-display.component.html',
  styleUrls: ['./timesheet-display.component.css']
})
export class TimesheetDisplayComponent implements OnInit {
  timesheets: Timesheet[] = [];

  constructor(private apiService: ApiFaceRecoService) { }

  ngOnInit() {
    this.apiService.getAllTimeSheet().subscribe(data => {
      data.forEach((t) => {
        const precenses: Presence[] = [];
        t.presence.forEach((e) => {
          const promo = new Promotion(e.student.group.promotion.id, e.student.group.promotion.wording);
          const group = new Group(e.student.group.id, e.student.group.wording, promo);
          const student = new Student(e.student.number, e.student.lastName, e.student.firstName, group);
          precenses.push(new Presence(e.present, student));
        });
        this.timesheets.push(new Timesheet(t.id, t.date, precenses));
      });
    });
  }
}
