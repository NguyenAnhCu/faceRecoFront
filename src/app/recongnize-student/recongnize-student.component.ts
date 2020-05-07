import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ApiFaceRecoService} from '../api-face-reco.service';
import {Timesheet} from '../timesheet';
import {Presence, PresenceModel} from '../presence';
import {Promotion} from '../promotion';
import {Group} from '../group';
import {Student} from '../student';

@Component({
  selector: 'app-recongnize-student',
  templateUrl: './recongnize-student.component.html',
  styleUrls: ['./recongnize-student.component.css']
})
export class RecongnizeStudentComponent implements OnInit {

  public timesheets: Timesheet[] = [];
  public timesheetId: string;
  public idStudent: string;
  public student: Student;
  constructor(private apiFaceRecoService: ApiFaceRecoService) {
  }

  public selectedImage = null;
  ngOnInit() {
    this.apiFaceRecoService.getAllTimeSheet().subscribe( data => {
      data.forEach( (t) => {
        const precenses: Presence[] = [];
        t.presence.forEach((e) => {
          const promo = new Promotion(e.student.group.promotion.id, e.student.group.promotion.wording);
          const group = new Group(e.student.group.id, e.student.group.wording, promo);
          const student = new Student(e.student.number, e.student.lastName, e.student.firstName, group);
          precenses.push(new Presence(e.present, student));
        });
        this.timesheets.push(new Timesheet(t.id, new Date(t.date), t.wording, precenses));
      });
    });
  }

  onFileSelected(event) {
    this.selectedImage = event.target.files[0];
    console.log(event);
  }

  recognizeStudent() {
    this.apiFaceRecoService.recognition(this.selectedImage, this.timesheetId).subscribe( data => {
      if (data != null) {
        const promo =  new Promotion(data.group.promotion.id, data.group.promotion.wording);
        const group = new Group(data.group.id, data.group.wording, promo);
        this.student = new Student( data.number, data.firstName, data.firstName, group);
      } else {
        console.log('Aucun étudiant trouvé');
      }
    });
  }

  validateStudent(id) {
    const presenceM = new PresenceModel(Number(this.timesheetId), id, true);
    this.apiFaceRecoService.validateRecognition(presenceM).subscribe(data => {
      alert ('Etudiant validé');
    });
  }
  unvalidateStudent() {
    const presenceM = new PresenceModel(Number(this.timesheetId), this.student.getNumber(), false);
    this.apiFaceRecoService.validateRecognition(presenceM).subscribe(data => {
      alert ('Etudiant non validé');
    });
  }
}
