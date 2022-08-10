import needButton from './Frontend/FrontEndComponents/needButton.js';
import './Styles/main.scss';
import zelda from './Assets/Zelda.jpeg';

const zeldaImg = document.getElementById('zeldaImg')
zeldaImg.src = zelda;

console.log('It begins.');
console.log(needButton());
