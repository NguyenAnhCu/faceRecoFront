import {Group} from './group';

export interface PromotionDetails {
  id: number;
  wording: string;
}

export class Promotion {
  constructor(private id: number, private wording: string) {
  }
  getId(): number {
    return this.id;
  }
  getWording(): string {
    return this.wording;
  }

}
