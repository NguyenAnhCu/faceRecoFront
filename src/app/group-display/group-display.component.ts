import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {Group} from '../group';
import {ApiFaceRecoService} from '../api-face-reco.service';
import {Promotion, PromotionDetails} from '../promotion';

@Component({
  selector: 'app-group-display',
  templateUrl: './group-display.component.html',
  styleUrls: ['./group-display.component.css']
})
export class GroupDisplayComponent implements OnInit {

  groups: Group[] = [];
  groupChoisi: string;
  students: Student [] = [];

  constructor(private apiService: ApiFaceRecoService) { }

  ngOnInit() {
    this.apiService.getAllGroups().subscribe(data => {
      data.forEach((g) => {
        const promotion: Promotion = new Promotion(g.promotion.id, g.promotion.wording);
        this.groups.push(new Group(g.id, g.wording, promotion));
      });
    });
  }
  findStudents() {
    this.students.splice(0, this.students.length);
    this.apiService.getStudentByGroup(this.groupChoisi).subscribe(data => {
      data.forEach((s) => {
        const promo: Promotion = new Promotion(s.group.promotion.id, s.group.promotion.wording);
        const group: Group = new Group(s.group.id, s.group.wording, promo);
        this.students.push(new Student(s.number, s.lastName, s.firstName, group));
      });
    });
  }

}
