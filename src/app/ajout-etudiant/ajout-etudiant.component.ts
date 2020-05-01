import { Component, OnInit } from '@angular/core';
import {ApiFaceRecoService} from '../api-face-reco.service';
import {Promotion} from '../promotion';
import {Group} from '../group';
import {NgForm} from '@angular/forms';
import {Student} from '../student';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent implements OnInit {
  promotions: Promotion[] = [];
  groups: Group[];
  numeroEtud = '';
  nomEtud = '';
  prenomEtud = '';
  groupChoisi: Group;
  promotionChoisie: Promotion;

  constructor(private apiFaceRecoServ: ApiFaceRecoService) { }

  ngOnInit() {
    this.apiFaceRecoServ.getAllPromotions().subscribe(data => {
      console.log(data);
      // promotions = ...
    });
    this.apiFaceRecoServ.getAllGroups().subscribe(data => {
      console.log(data);
      // groups = ...
    });
  }

  createStudent(studentForm: NgForm) {
    const student: Student = new Student(Number(this.numeroEtud), this.nomEtud, this.prenomEtud, this.groupChoisi);
    this.apiFaceRecoServ.postStudent(student).subscribe(data => {
      console.log('Etudiant ajouté');
    });
  }

  resetForm(studentForm: NgForm) {
    studentForm.resetForm();
  }

}
