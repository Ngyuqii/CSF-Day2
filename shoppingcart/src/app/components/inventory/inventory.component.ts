import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Subject} from 'rxjs';
import { INVENTORY, Inventory } from 'src/app/models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {

  inventories = INVENTORY;

	form!: FormGroup;

	@Output()
	onNewItem = new Subject<Inventory>();

	constructor(private fb: FormBuilder) { }

	//Initialize form creation
	ngOnInit(): void {
		this.form = this.createForm();
	}

	//Method to create a form with form controls and validators
	private createForm(): FormGroup {
		return this.fb.group({
			item: this.fb.control<string>('', [ Validators.required ]),
			unitPrice: this.fb.control<number>(0, [ Validators.required ]),
			quantity: this.fb.control<number>(0, [ Validators.required, Validators.min(1) ])
		});
	}

	//Method to get a form control of input fields
	//Find for matching item in inventory and set item values to form
	selectItem(item: string) {
		const itemCtrl = this.form.get('item') as FormControl;
		const unitPriceCtrl = this.form.get('unitPrice') as FormControl;
		console.log(itemCtrl, unitPriceCtrl);
		const match = this.findItem(item);
		if (!!match) {
			itemCtrl.setValue(match.item);
			unitPriceCtrl.setValue(match.unitPrice);
		}
	}

	//Method to find for item in inventories array
	//Returns the first matching element in array, else return undefined
	findItem(item: string): Inventory | undefined {
		return this.inventories.find(i => i.item == item);
	}

	//Method called upon ngSubmit to retrieve values of the form controls as Inventory object
  //Emits the selection object as an event
  //Resets form
	addToCart() {
		const selection = this.form.value as Inventory;
		this.onNewItem.next(selection);
		this.form.reset();
	}

}
