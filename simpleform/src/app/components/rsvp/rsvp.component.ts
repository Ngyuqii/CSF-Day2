import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Rsvp } from 'src/app/models';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})

export class RsvpComponent implements OnInit {

  rsvpForm!: FormGroup;
  rsvpStatus = "";

  constructor(private fb: FormBuilder){};

  ngOnInit(): void {
      this.rsvpForm = this.createForm();
  }

  //Create form template with validation
  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      age: this.fb.control<number>(18, [Validators.required, Validators.min(18)]),
      attendance: this.fb.control<string>('' ,[Validators.required])
    })
  }

  //Method that return true if form input is not pristine and invalid
  invalidControl (ctrlName: string): boolean {
    const ctrl = this.rsvpForm.get(ctrlName) as FormControl;
    return ctrl.invalid && (!ctrl.pristine);
  }

  //Method called upon ngSubmit
  //const rsvp = this.rsvpForm.value as RSVP
  processForm() {

    this.rsvpStatus = this.rsvpForm.get('attendance')?.value;

    const rsvp: Rsvp = {
      name: this.rsvpForm.get('name')?.value,
      email: this.rsvpForm.get('email')?.value,
      age: this.rsvpForm.get('age')?.value,
      attendance: this.rsvpStatus == 'yes',
    }
    
    console.info('>>>Form data: ', rsvp);
    this.rsvpForm.reset();

  }

}
