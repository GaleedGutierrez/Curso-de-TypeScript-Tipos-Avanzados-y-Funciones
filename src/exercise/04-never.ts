const withoutEnd = () => {
    while (true) {
        console.log('Nunca pares de aprender');
    }
}

const fail = (message: string) => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (typeof(input) === 'string') {
        return 'Es un string.';
    } else if (Array.isArray(input)) {
        return 'Es un array.'
    }
    return fail('Not match');
}

console.log(example('Galeed'));
console.log(example([1,1,1,1,1]));
console.log(example(1234));
console.log(example('Depués del fail.'));
