import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const url = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiFaceRecoService {

  constructor(private httpClient: HttpClient ) { }

  getAllStudents(): Observable<any> {
    return this.httpClient.get<any>(url + 'student');
  }
  getAllPromotions(): Observable<any> {
    return this.httpClient.get<any>(url + 'promotion');
  }
  getAllGroups(): Observable<any> {
    return this.httpClient.get<any>(url + 'group');
  }

  postStudent(student): Observable<any> {
    return this.httpClient.post(url + 'student', student);
  }


}
