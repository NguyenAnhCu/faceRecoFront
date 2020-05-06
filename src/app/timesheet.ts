import {Presence, PresenceDetails} from './presence';

export interface TimesheetDetails {
  id: number;
  date: string;
  wording: string;
  presence: PresenceDetails[];
}

export class Timesheet {
  constructor(private id: number, private date: string, private wording: string, private presence: Presence[]) {
  }
  getId(): number {
    return this.id;
  }
  getWording(): string {
    return this.wording;
  }
  getDate(): string {
    return this.date;
  }
  getPresence(): Presence[] {
    return this.presence;
  }
}
