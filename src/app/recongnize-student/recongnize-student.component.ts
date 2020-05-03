import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import * as stream from 'stream';

@Component({
  selector: 'app-recongnize-student',
  templateUrl: './recongnize-student.component.html',
  styleUrls: ['./recongnize-student.component.css']
})
export class RecongnizeStudentComponent implements OnInit {

  public captures: Array<any>;
  constructor(private renderer: Renderer2) {
    this.captures = [];
  }
  public selectedImage = null;
  videoWidth = 0;
  videoHeight = 0;
  constraints = {
    video: {
      facingMode: 'environment',
      width: { ideal: 4096 },
      height: { ideal: 2160 }
    }
  };

  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  attachVideo(stream) {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
  }

  ngOnInit() {
  }

  startCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
    } else {
      alert('Sorry, camera not available.');
    }
  }

  onFileSelected(event) {
    this.selectedImage = event.target.files[0];
    console.log(event);
  }

  capture() {
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
    this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
  }
  handleError(error) {
    console.log('Error: ', error);
  }
}
