import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Subject } from 'rxjs';
import { Activity } from 'src/app/models';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})

export class ProgramComponent implements OnInit {

  activityForm!: FormGroup;
  programArray!: FormArray;

  @Output()
  onNewActivity = new Subject<Activity>();

  constructor(private fb: FormBuilder){ }

  //Initialize form creation
  ngOnInit(): void {
    this.activityForm = this.createActivityForm();
  }

  //Method to create a form with form controls and validators
  //Include the programs array
  private createActivityForm(): FormGroup {
    //Create an array form control that is empty - requires a minimum of 1 element
    this.programArray = this.fb.array([], [Validators.minLength(1)]);

    return this.fb.group({
      apparatus: this.fb.control<string>('', [Validators.required]),
      programs: this.programArray
    })
  }

  //Method to create a form with form controls and validators
  //Add this form into the program array
  addProgram() {
    const p = this.fb.group({
      description: this.fb.control<string>('', [Validators.required]),
      programDate: this.fb.control<string>('', [Validators.required])
    })
    this.programArray.push(p);
    console.log('Added new program line.');
  }

  //Method to remove form from the program array at index parameter
  deleteProgram(index: number) {
    this.programArray.removeAt(index);
    console.log('Removed program line >>>', index);
  }

  //Method that returns true if form input is not pristine and invalid
  invalidControl(ctrlName: string): boolean {
    const ctrl = this.activityForm.get(ctrlName) as FormControl;
    return ctrl.invalid && (!ctrl.pristine);
  }

  //Method that returns true if form is invalid or program array has no element
  invalidForm(): boolean {
    return this.activityForm.invalid || this.programArray.length <= 0;
  }

  //ngSubmit
  registerActivity() {
    const activities = this.activityForm.value as Activity;
    this.onNewActivity.next(activities);
    this.activityForm = this.createActivityForm();
  }

}