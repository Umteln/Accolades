import { atom } from 'recoil';
import { pictureList } from '../utils/pictureList.js';
import { blankBoardInfo, threeTask } from '../utils/taskArray';
import { selector } from 'recoil';
import { filterPictureListByCategoryGetter } from './selectors';

export const pictureListAtom = atom({
	key: 'pictureListAtom',
	default: pictureList,
});

export const filteredPictureListAtom = selector({
	key: 'filteredPictureList',
	get: filterPictureListByCategoryGetter,
});

export const boardStateAtom = atom({
	key: 'boardStateAtom',
	default: [],
});



export const tabValueStateAtom = atom({
	key: 'tabValueStateAtom',
	default: 'activity',
});

// task amount
export const taskAmountStateAtom = atom({
	key: 'taskAmountStateAtom',
	default: threeTask,
});

// board information

export const boardInfoStateAtom = atom({
	key: 'boardInfoStateAtom',
	default: blankBoardInfo,
});
