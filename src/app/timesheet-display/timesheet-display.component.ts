import { Component, OnInit } from '@angular/core';
import {ApiFaceRecoService} from '../api-face-reco.service';

@Component({
  selector: 'app-timesheet-display',
  templateUrl: './timesheet-display.component.html',
  styleUrls: ['./timesheet-display.component.css']
})
export class TimesheetDisplayComponent implements OnInit {
  timesheets: any[];

  constructor(private apiService: ApiFaceRecoService) { }

  ngOnInit() {
  }
  findTimesheet() {
    // Appeler l'API pour avoir les timesheet d'une certaine heure ...
  }

}
