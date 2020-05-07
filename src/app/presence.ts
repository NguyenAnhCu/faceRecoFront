import {Student, StudentDetails} from './student';

export interface PresenceDetails {
  present: boolean;
  student: StudentDetails;
}

export class Presence {
  constructor(private present: boolean, private student: Student) {
  }
  getPresent(): boolean{
    return this.present;
  }
  getStudent(): Student {
    return this.student;
  }
}

export class PresenceModel {
  constructor(private timesheet: number, private student: number, private present: boolean) {
  }
}
