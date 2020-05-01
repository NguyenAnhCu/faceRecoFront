import {Group} from './group';

export class Student {
  constructor(private numberE: number, private lastname: string, private firstname: string, private group: Group) {
  }
  getNumberE(): number {
    return this.numberE;
  }

  getLastname(): string {
    return this.lastname;
  }

  getFirstname(): string {
    return this.firstname;
  }

  getGroup(): Group {
    return this.group;
  }
}
