import asl from '../assets/tasks/asl.png';
import bathroom from '../assets/tasks/bathroom.png';
import bedtime from '../assets/tasks/bedtime.png';
import boardgame from '../assets/tasks/boardgame.png';
import circleTime from '../assets/tasks/circletime.png';
import dance from '../assets/tasks/dance.png';
import dressup from '../assets/tasks/dressup.png';
import freeplay from '../assets/tasks/freeplay.png';
import brushhair from '../assets/tasks/brushhair.png';
import groupplay from '../assets/tasks/groupplay.png';
import computerTime from '../assets/tasks/computer.png';
import lunch from '../assets/tasks/lunch.png';
import music from '../assets/tasks/music.png';
import math from '../assets/tasks/math.png';
import pairplay from '../assets/tasks/pairplay.png';
import pretend from '../assets/tasks/pretend.png';
import reading from '../assets/tasks/reading.png';
import science from '../assets/tasks/science.png';
import tablet from '../assets/tasks/tablet.png';
import tablework from '../assets/tasks/tablework.png';

const uniqueIdGenerator = () => {
    const timestamp = Date.now(); //gets current time and date
    const randomNumber = Math.random(); //gets random number
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`; // template string creating unique id
};

export const taskchoices = [
    { id: uniqueIdGenerator(), name: 'Read Book', img: reading },
    { id: uniqueIdGenerator(), name: 'Table Work', img: tablework },
    { id: uniqueIdGenerator(), name: 'Group Play', img: groupplay },
    { id: uniqueIdGenerator(), name: 'Math Time', img: math },
    { id: uniqueIdGenerator(), name: 'Lunch', img: lunch },
    { id: uniqueIdGenerator(), name: 'Practice Sign Language', img: asl },
    { id: uniqueIdGenerator(), name: 'Bathroom', img: bathroom },
    { id: uniqueIdGenerator(), name: 'Circle Group', img: circleTime },
    { id: uniqueIdGenerator(), name: 'Music', img: music },
    { id: uniqueIdGenerator(), name: 'Pretend Play', img: pretend },
    { id: uniqueIdGenerator(), name: 'Science', img: science },
    { id: uniqueIdGenerator(), name: 'Dance', img: dance },
];

export const goalchoices = [
    { id: uniqueIdGenerator(), name: 'Tablet', img: tablet },
    { id: uniqueIdGenerator(), name: 'Free Choice', img: freeplay },
    { id: uniqueIdGenerator(), name: "Gracie's Corner", img: music },
    { id: uniqueIdGenerator(), name: 'Board Game', img: boardgame },
    { id: uniqueIdGenerator(), name: 'Dress Up', img: dressup },
];
