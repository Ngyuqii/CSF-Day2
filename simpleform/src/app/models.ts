//RSVP form
export interface Rsvp {
    name: string;
    email: string;
    age: number;
    attendance: boolean;
}

//Activities form include program array
export interface Activity {
    Apparatus: string;
    programs: Program[];
  }

//Program form
export interface Program {
    description: string;
    programDate: string;
}