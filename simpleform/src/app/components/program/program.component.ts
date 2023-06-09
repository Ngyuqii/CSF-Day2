import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Observable, Subject, debounceTime } from 'rxjs';
import { Activity } from 'src/app/models';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})

export class ProgramComponent implements OnInit {

  activityForm!: FormGroup;
  programArray!: FormArray;

  obs!: Observable<any>;

  @Output()
  onNewActivity = new Subject<Activity>();

  constructor(private fb: FormBuilder){ }

  //Initialize form creation
  //Observable emits event on every value change of the form with a delay of 500ms
  ngOnInit(): void {
    this.activityForm = this.createActivityForm();
    this.obs = this.activityForm.valueChanges.pipe(debounceTime(500));
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
  deleteProgram(i: number) {
    this.programArray.removeAt(i);
    console.log('Removed program line >>>', i);
  }

  //Method that returns true if form input is invalid
  invalidControl(ctrlName: string): boolean {
    const ctrl = this.activityForm.get(ctrlName) as FormControl;
    return ctrl.invalid;
  }

  //Method that returns true if form is invalid or program array has no element
  invalidForm(): boolean {
    return this.activityForm.invalid || this.programArray.length <= 0;
  }

  //Method upon ngSubmit to retrieve values of the form controls and set into Activity object
  //Emits the "activities" object as an event
  //Resets activityForm
  registerActivity() {
    const activities = this.activityForm.value as Activity;
    this.onNewActivity.next(activities);
    this.activityForm = this.createActivityForm();
  }

}