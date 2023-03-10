//activities
import blocks from '../assets/activities/blocks.jpg';
import bubbles from '../assets/activities/bubbles.jpg';
import puzzle from '../assets/activities/puzzle.jpg';
import slide from '../assets/activities/slide.jpg';
import swing from '../assets/activities/swing.jpg';
import trampoline from '../assets/activities/trampoline.jpg';

//clothing
import shirt from '../assets/clothing/shirt.jpg';
import belt from '../assets/clothing/belt.jpg';
import hat from '../assets/clothing/hat.jpg';
import jacket from '../assets/clothing/jacket.jpg';
import pants from '../assets/clothing/pants.jpg';
import shoes from '../assets/clothing/shoes.jpg';
import shorts from '../assets/clothing/shorts.jpg';
import socks from '../assets/clothing/socks.jpg';
//household
import bowl from '../assets/household/bowl.jpg';
import chair from '../assets/household/chair.jpg';
import couch from '../assets/household/couch.jpg';
import drinkingGlass from '../assets/household/drinking-glass.jpg';
import stairs from '../assets/household/stairs.jpg';

const uniqueIdGenerator = () => {
	const timestamp = Date.now(); //gets current time and date
	const randomNumber = Math.random(); //gets random number
	const hexadecimalString = randomNumber.toString(16);

	return `id-${timestamp}-${hexadecimalString}`; // template string creating unique id
};

export const pictureList = [
	{
		id: uniqueIdGenerator(),
		source: blocks,
		category: 'activity',
	},
	{
		id: uniqueIdGenerator(),
		source: puzzle,
		category: 'activity',
	},
	{
		id: uniqueIdGenerator(),
		source: bubbles,
		category: 'activity',
	},
	{
		id: uniqueIdGenerator(),
		source: slide,
		category: 'activity',
	},
	{
		id: uniqueIdGenerator(),
		source: swing,
		category: 'activity',
	},
	{
		id: uniqueIdGenerator(),
		source: trampoline,
		category: 'activity',
	},
	{
		id: uniqueIdGenerator(),
		source: shoes,
		category: 'clothing',
	},
	{
		id: uniqueIdGenerator(),
		source: shirt,
		category: 'clothing',
	},
	{
		id: uniqueIdGenerator(),
		source: pants,
		category: 'clothing',
	},
	{
		id: uniqueIdGenerator(),
		source: jacket,
		category: 'clothing',
	},
	{
		id: uniqueIdGenerator(),
		source: hat,
		category: 'clothing',
	},
	{
		id: uniqueIdGenerator(),
		source: belt,
		category: 'clothing',
	},
	{
		id: uniqueIdGenerator(),
		source: socks,
		category: 'clothing',
	},
	{
		id: uniqueIdGenerator(),
		source: shorts,
		category: 'clothing',
	},
	{
		id: uniqueIdGenerator(),
		source: bowl,
		category: 'household',
	},
	{
		id: uniqueIdGenerator(),
		source: chair,
		category: 'household',
	},
	{
		id: uniqueIdGenerator(),
		source: couch,
		category: 'household',
	},
	{
		id: uniqueIdGenerator(),
		source: stairs,
		category: 'household',
	},
	{
		id: uniqueIdGenerator(),
		source: drinkingGlass,
		category: 'household',
	},
];
