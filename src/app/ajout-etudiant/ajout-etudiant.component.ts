import { Component, OnInit } from '@angular/core';
import {ApiFaceRecoService} from '../api-face-reco.service';
import {Promotion} from '../promotion';
import {Group} from '../group';
import {NgForm} from '@angular/forms';
import {Student, StudentDetails} from '../student';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent implements OnInit {
  promotions: Promotion[] = [];
  groups: Group[] = [];
  numberEtud = '';
  nameEtud = '';
  lastNameEtud = '';
  group: Group;
  selectedGroups: Group[] = [];
  selectedGroup: string;
  promotionId: string;
  selectedPromotion: Promotion;
  selectedImage = null;

  constructor(private apiFaceRecoServ: ApiFaceRecoService) { }

  ngOnInit() {
    this.apiFaceRecoServ.getAllPromotions().subscribe(data => {
      data.forEach((p) => {
        this.promotions.push(new Promotion(p.id, p.wording));
      });
    });
    this.apiFaceRecoServ.getAllGroups().subscribe(data => {
      data.forEach((g) => {
        const promotion: Promotion = new Promotion(g.promotion.id, g.promotion.wording);
        this.groups.push(new Group(g.id, g.wording, promotion));
      });
    });
  }

  createStudent(studentForm: NgForm) {
    this.apiFaceRecoServ.getGroupById(this.selectedGroup).subscribe(data => {
      const group = new Group(data.id, data.wording, this.selectedPromotion);
      const student = new Student (Number(this.numberEtud), this.nameEtud, this.lastNameEtud, group);
      this.apiFaceRecoServ.postStudent(student).subscribe(d => {
        alert('Etudiant ajouté : '  + this.numberEtud);
        this.apiFaceRecoServ.postStudent(student);
        this.addPhoto(student.getNumber());
        studentForm.resetForm();
      });
    });
  }
  private addPhoto(idEtud) {
    if (this.selectedImage) {
      this.apiFaceRecoServ.addPhotoStudent(this.selectedImage, idEtud).subscribe(data => {
        console.log('Photo ajoutée');
      });
    }
  }

  findGroups() {
    this.apiFaceRecoServ.getPromotionById(this.promotionId).subscribe(data => {
      this.selectedPromotion = new Promotion(data.id, data.wording);
      this.selectedGroups.splice(0, this.selectedGroups.length);
      this.groups.forEach((e) => {
        if (e.getPromotion().getWording() === this.selectedPromotion.getWording()) {
          this.selectedGroups.push(e);
        }
      });
    });
  }

  onFileSelected(event) {
    this.selectedImage = event.target.files[0];
  }

  resetForm(studentForm: NgForm) {
    studentForm.resetForm();
  }

}
