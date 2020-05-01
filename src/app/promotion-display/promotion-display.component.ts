import { Component, OnInit } from '@angular/core';
import {Promotion} from '../promotion';
import {Student} from '../student';
import {ApiFaceRecoService} from '../api-face-reco.service';

@Component({
  selector: 'app-promotion-display',
  templateUrl: './promotion-display.component.html',
  styleUrls: ['./promotion-display.component.css']
})
export class PromotionDisplayComponent implements OnInit {

  promotions: Promotion[] = [];
  promotionChoisie: Promotion;
  students: Student [];

  constructor(private apiService: ApiFaceRecoService) { }

  ngOnInit() {
    this.apiService.getAllPromotions().subscribe(data => {
      console.log(data);
      // promotions = ...
    });
  }

}
