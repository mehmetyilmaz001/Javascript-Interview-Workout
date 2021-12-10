/**
 * Reverse giving string
 *
 * input: Hello World
 * output: dlroW olleH
 */

function reverse(str) {
  if (!str || typeof str !== 'string' || str.length < 2) return;

  const reversedArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedArr.push(str[i]);
  }

  return reversedArr.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = (str) => [...str].reverse().join('');

console.log(reverse('Hello World'));
console.log(reverse2('Hello World'));
console.log(reverse3('Hello World'));
