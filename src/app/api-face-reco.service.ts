import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupDetails} from './group';
import {PromotionDetails} from './promotion';
import {StudentDetails} from './student';
import {TimesheetDetails} from './timesheet';

const url = 'http://localhost:8080/api/';
const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + btoa('admin:admin')
  })
};
const httpOptionP = {
  headers: new HttpHeaders({
    'Content-Type': 'application/octet-stream',
    Authorization: 'Basic ' + btoa('admin:admin')
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiFaceRecoService {
  constructor(private httpClient: HttpClient ) { }

  getAllPromotions(): Observable<PromotionDetails[]> {
    return this.httpClient.get<PromotionDetails[]>(url + 'promotion', httpOption);
  }
  getAllGroups(): Observable<GroupDetails[]> {
    return this.httpClient.get<GroupDetails[]>(url + 'group', httpOption);
  }
  getStudentByGroup(group: string): Observable<StudentDetails[]> {
    return this.httpClient.get<StudentDetails[]>(url + 'student/group/' + group, httpOption);
  }
  getStudentByPromotion(promotion: string): Observable<StudentDetails[]> {
    return this.httpClient.get<StudentDetails[]>(url + 'student/promotion/' + promotion, httpOption);
  }
  getAllTimeSheet(): Observable<TimesheetDetails[]> {
    return this.httpClient.get<TimesheetDetails[]>(url + 'timesheet', httpOption);
  }
  getPromotionById(id: string): Observable<PromotionDetails> {
    return this.httpClient.get<PromotionDetails>(url + 'promotion/' + id, httpOption);
  }
  getGroupById(id: string): Observable<GroupDetails> {
    return this.httpClient.get<GroupDetails>(url + 'group/' + id, httpOption);
  }
  postStudent(student) {
    return this.httpClient.post<StudentDetails>(url + 'student', student, httpOption);
  }
  addPhotoStudent(photo, id) {
    return this.httpClient.post( url  + 'student/' + id + '/photo', photo, httpOptionP);
  }
  recognition(photo, id): Observable<StudentDetails> {
    return this.httpClient.post<StudentDetails>(url + 'timesheet/' + id + '/recognition', photo, httpOptionP);
  }
  postTimeSheet(timesheet) {
    return this.httpClient.post(url + 'timesheet', timesheet, httpOption);
  }
  validateRecognition(presenceModel) {
    return this.httpClient.post(url + 'timesheet/validatePresence', presenceModel, httpOption);
  }

  getStudentDetails(id: number): Observable<StudentDetails> {
    return this.httpClient.get<StudentDetails>(url + 'etudiant/' + id, httpOption);
  }
}
