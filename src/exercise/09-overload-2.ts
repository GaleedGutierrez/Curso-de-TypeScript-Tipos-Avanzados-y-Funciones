// Galeed -> ['G', 'a', 'l', 'e', 'e', 'd']
// ['G', 'a', 'l', 'e', 'e', 'd'] -> Galeed
// number -> boolean

function parseStr (input: string): string[];
function parseStr (input: string[]): string;
function parseStr (input: number): boolean;
function parseStr (input: unknown): unknown {
    if (Array.isArray(input)) return input.join(''); // string
    if (typeof(input) === 'string') return input.split(''); // string[]
    if (typeof(input) === 'number') return true; // boolean
}

const rtaArray = parseStr('Galeed');
rtaArray.reverse();
const rtaString = parseStr(['G', 'a', 'l', 'e', 'e', 'd']);
const rtaNumber = parseStr(1);
console.log('rtaArray: Galeed -> ', rtaArray);
console.log("rtaString: ['G', 'a', 'l', 'e', 'e', 'd'] -> ", rtaString);
console.log("rtaNumber: number -> ", rtaNumber);
