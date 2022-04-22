const prices: (number | string)[] = [1, 2, 3, 4, 5];
prices.push('asdf');
prices.push(1);

let user: readonly [string, number, boolean] = ['asfd', 1, false];
// user = ['galeed', 21];

user = ['asdfxzcv', 1, true];
// user[0] = '1';
// user.pop();

const [username, age, isPro] = user;
console.log({username, age, isPro})

const o = {p: 42, q: true};
const {p: foo, q: bar} = o;
foo;
bar;
console.log({o ,foo, bar});
