import {Group} from './group';

export class Promotion {
  constructor(private wording: string, private groups: Group[]) {
  }
  getWording(): string{
    return this.wording;
  }
  getGroups(): Group[] {
    return this.groups;
  }
}
