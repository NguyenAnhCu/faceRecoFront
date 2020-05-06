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
  public captures: Array<any>;
  public camOpen: boolean;
  constructor(private renderer: Renderer2, private apiFaceRecoService: ApiFaceRecoService) {
    this.captures = [];
    this.camOpen = false;
  }

  public selectedImage = null;
  videoWidth = 0;
  videoHeight = 0;
  constraints = {
    video: {
      audio : false,
      facingMode: 'environment',
      width: { ideal: 4096 },
      height: { ideal: 2160 }
    }
  };

  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;


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

  startCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
      this.camOpen = true;
    } else {
      alert('Sorry, camera not available.');
    }
  }

  stopCamera(videoElement) {
    const stream = videoElement.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });
    videoElement.srcObject = null;
    this.camOpen = false;
  }

  attachVideo(stream) {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', () => {
      this.videoHeight = this.videoElement.nativeElement.videoHeight;
      this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
  }

  capture() {
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
    this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
  }
  handleError(error) {
    console.log('Error: ', error);
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
