import { Component, OnInit } from '@angular/core';
import {ApiFaceRecoService} from '../api-face-reco.service';

@Component({
  selector: 'app-add-photo-student',
  templateUrl: './add-photo-student.component.html',
  styleUrls: ['./add-photo-student.component.css']
})
export class AddPhotoStudentComponent implements OnInit {
  numberEtud: string;
  selectedImage = null;

  constructor(private apiFaceRecoService: ApiFaceRecoService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedImage = event.target.files[0];
  }
  addPhoto() {
    console.log(this.selectedImage);
    this.apiFaceRecoService.addPhotoStudent(this.selectedImage, this.numberEtud).subscribe(data => {
      alert ('Photo ajoutée pour l\'étudiant : ' + this.numberEtud);
    });
  }

}
