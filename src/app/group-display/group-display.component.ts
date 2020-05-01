import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {Group} from '../group';
import {ApiFaceRecoService} from '../api-face-reco.service';

@Component({
  selector: 'app-group-display',
  templateUrl: './group-display.component.html',
  styleUrls: ['./group-display.component.css']
})
export class GroupDisplayComponent implements OnInit {

  groups: Group[] = [];
  groupChoisi: Group;
  students: Student [];

  constructor(private apiService: ApiFaceRecoService) { }

  ngOnInit() {
    this.apiService.getAllGroups().subscribe(data => {
      console.log(data);
      // groups = ...
    });
  }

}
