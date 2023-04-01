import { Component } from '@angular/core';
import { Inventory } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  contents: Inventory[] = [];

  //Method to add selection to cart when onNewItem event passes event data selection
  //Find for item in cart contents array and returns the first element matching selection
  //If there is a match increase quantity, else add selection to cart
	addItemToCart(selection: Inventory) {
    console.info('Selection: ', selection);
		const item = this.contents.find(i => i.item == selection.item);
		if (!!item) {
			item.quantity += selection.quantity;
    }
		else {
			this.contents.push(selection);
    }
		console.info('Contents:', this.contents);
	}
}
