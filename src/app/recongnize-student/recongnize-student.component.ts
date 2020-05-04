import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-recongnize-student',
  templateUrl: './recongnize-student.component.html',
  styleUrls: ['./recongnize-student.component.css']
})
export class RecongnizeStudentComponent implements OnInit {

  public captures: Array<any>;
  public camOpen: boolean;
  constructor(private renderer: Renderer2) {
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


}
