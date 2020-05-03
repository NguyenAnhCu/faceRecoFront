import {Promotion, PromotionDetails} from './promotion';

export interface GroupDetails {
  id: number;
  wording: string;
  promotion: PromotionDetails;
}
export class Group {
  constructor(private id: number, private wording: string, private promotion: Promotion) {
  }
  getId(): number {
    return this.id;
  }
  getWording(): string {
    return this.wording;
  }
  getPromotion(): Promotion {
    return this.promotion;
  }
}

