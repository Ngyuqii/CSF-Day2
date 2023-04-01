export interface Inventory {
	item: string; 
	unitPrice: number;
	image: string;
	quantity: number;
}

export const INVENTORY: Inventory[] = [
	{ item: 'acorn squash', unitPrice: .5, image: 'acorn_squash.png', quantity:0 },
	{ item: 'apple', unitPrice: .3, image: 'apple.png', quantity:0 },
	{ item: 'blueberries', unitPrice: 1.5, image: 'blueberries.png', quantity:0 },
	{ item: 'carrot', unitPrice: .7, image: 'carrot.png', quantity:0 },
	{ item: 'chilli pepper', unitPrice: .5, image: 'chili_pepper.png', quantity:0 },
	{ item: 'corn', unitPrice: 1.5, image: 'corn.png', quantity:0 },
	{ item: 'eggplant', unitPrice: .2, image: 'eggplant.png', quantity:0 },
	{ item: 'mushroom', unitPrice: 0.2, image: 'mushroom.png', quantity:0 },
	{ item: 'radish', unitPrice: 1, image: 'radish.png', quantity:0 },
	{ item: 'zucchini', unitPrice: 2, image: 'zucchini.png', quantity:0 },
]
