import { Component, OnInit } from '@angular/core';
import {ApiFaceRecoService} from '../api-face-reco.service';

@Component({
  selector: 'app-add-photo-student',
  templateUrl: './add-photo-student.component.html',
  styleUrls: ['./add-photo-student.component.css']
})
export class AddPhotoStudentComponent implements OnInit {
  numeroEtud: string;
  selectedImage = null;

  constructor(private apiFaceRecoService: ApiFaceRecoService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedImage = event.target.files[0];
    console.log(event);
  }
  addPhoto() {
    console.log(this.selectedImage);
    this.apiFaceRecoService.addPhotoStudent(this.selectedImage, this.numeroEtud).subscribe(data => {
      console.log('Photo ajoutée');
    });
  }

}
