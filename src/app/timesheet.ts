import {Presence, PresenceDetails} from './presence';

export interface TimesheetDetails {
  id: number;
  date: string;
  presence: PresenceDetails[];
}

export class Timesheet {
  constructor(private id: number, private date: string, private presence: Presence[]) {
  }
  getId(): number {
    return this.id;
  }
  getDate(): string {
    return this.date;
  }
  getPresence(): Presence[] {
    return this.presence;
  }
}
