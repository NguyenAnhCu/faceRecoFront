import {Promotion} from "./promotion";

export class Group {
  constructor(private wording: string, private promotion: Promotion) {
  }
  getWording(): string{
    return this.wording;
  }
  getPromotion(): Promotion {
    return this.promotion;
  }
}
