import { selector } from 'recoil';

import { pictureListAtom, tabValueStateAtom } from './atoms.js';

export const filterPictureListByCategoryGetter = ({ get }) => {
	const tabValue = get(tabValueStateAtom);
	const pictureList = get(pictureListAtom);
	if (!pictureList) return;
	if (tabValue === 'all') {
		return pictureList;
	}
	return pictureList.filter((item) => item.category === tabValue);
};
