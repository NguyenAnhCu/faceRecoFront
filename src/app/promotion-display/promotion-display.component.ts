import { Component, OnInit } from '@angular/core';
import {Promotion} from '../promotion';
import {Student} from '../student';
import {ApiFaceRecoService} from '../api-face-reco.service';
import {Group} from '../group';

@Component({
  selector: 'app-promotion-display',
  templateUrl: './promotion-display.component.html',
  styleUrls: ['./promotion-display.component.css']
})
export class PromotionDisplayComponent implements OnInit {

  promotions: Promotion[] = [];
  promotionChoisie: string;
  students: Student [] = [];

  constructor(private apiService: ApiFaceRecoService) { }

  ngOnInit() {
    this.apiService.getAllPromotions().subscribe(data => {
       data.forEach((p) => {
         this.promotions.push(new Promotion(p.id, p.wording));
       });
    });
  }

  findStudents() {
    this.students.splice(0, this.students.length);
    this.apiService.getStudentByPromotion(this.promotionChoisie).subscribe(data => {
      data.forEach((s) => {
        const promo: Promotion = new Promotion(s.group.promotion.id, s.group.promotion.wording);
        const group: Group = new Group(s.group.id, s.group.wording, promo);
        this.students.push(new Student(s.number, s.lastName, s.firstName, group));
      });
    });
  }

}
