import './css/styles.scss';
console.log('hi from root')
import a from './js/a.js';
console.log(a);
import b from './js/b.js';
console.log(b);
const acc = () => a + b;
console.log(acc());