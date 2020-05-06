import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiFaceRecoService} from '../api-face-reco.service';
import {Student} from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student;
  constructor(private apiService: ApiFaceRecoService ) {}

  ngOnInit() {
    this.apiService.getStudentDetails(this.student.getNumber()).subscribe(data => {
      this.apiService.getStudentDetails(this.student.getNumber());
      console.log(data);
    });
  }

}
