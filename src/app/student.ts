import {Group, GroupDetails} from './group';

export interface StudentDetails {
  number: number;
  lastName: string;
  firstName: string;
  group: GroupDetails;
}

export class Student {
  constructor(private number: number, private lastName: string, private firstName: string, private group: Group) {
  }
  getNumber(): number {
    return this.number;
  }
  getLastName(): string {
    return this.lastName;
  }
  getFirstName(): string {
    return this.firstName;
  }
  getGroup(): Group {
    return this.group;
  }
}
