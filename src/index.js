import { num } from './module';
import './scss/css.scss';

console.log(num);

async function f() {
  return await Promise.resolve('async workinq asdsadg');
}

f().then(data=> console.log(data));
