// Galeed -> ['G', 'a', 'l', 'e', 'e', 'd']
//['G', 'a', 'l', 'e', 'e', 'd'] -> Galeed

function parseStr (input: string | string[]): string | string[] {
    if (Array.isArray(input)) return input.join(''); // string
    return input.split(''); // string[]
}

const rtaArray = parseStr('Galeed');
const rtaString = parseStr(['G', 'a', 'l', 'e', 'e', 'd']);
console.log('rtaArray: Galeed -> ', rtaArray);
console.log("rtaString: ['G', 'a', 'l', 'e', 'e', 'd'] -> ", rtaString);
