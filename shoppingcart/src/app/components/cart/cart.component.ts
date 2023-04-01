import { Component, Input } from '@angular/core';
import { Inventory } from 'src/app/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  
	@Input()
	contents: Inventory[] = [];

	//Method to remove element from the contents array at index
	RemoveItem(index: number): void {
		this.contents.splice(index, 1);
	}


}
