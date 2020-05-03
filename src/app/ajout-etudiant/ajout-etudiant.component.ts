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
  groups: Group[] = [];
  numeroEtud = '';
  nomEtud = '';
  prenomEtud = '';
  group: Group;
  groupsChoisis: Group[] = [];
  groupChoisi: string;
  promotionId: string;
  promotionChoisie: Promotion;

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
    this.apiFaceRecoServ.getGroupById(this.groupChoisi).subscribe(data => {
      const group = new Group(data.id, data.wording, this.promotionChoisie);
      const student = new Student ((Number(this.numeroEtud)), this.nomEtud, this.prenomEtud, group);
      this.apiFaceRecoServ.postStudent(student).subscribe(d =>{
        this.apiFaceRecoServ.postStudent(student);
        console.log('Etudiant ajouté')
        studentForm.resetForm();
      });
    });
  }

  findGroups() {
    this.apiFaceRecoServ.getPromotionById(this.promotionId).subscribe(data =>{
      this.promotionChoisie = new Promotion(data.id, data.wording);
      this.groupsChoisis.splice(0, this.groupsChoisis.length);
      this.groups.forEach((e) => {
        if (e.getPromotion().getWording() === this.promotionChoisie.getWording()) {
          this.groupsChoisis.push(e);
        }
      });
    });
  }

  resetForm(studentForm: NgForm) {
    studentForm.resetForm();
  }

}
