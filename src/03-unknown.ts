let anyVar: any;
anyVar = true;
anyVar = '';
anyVar = 1;
anyVar = [];

let isNew: boolean = anyVar;

anyVar.doShomething();
anyVar.toUppercase();

let unknownVar: unknown;
unknownVar = true;
unknownVar = '';
unknownVar = 1;
unknownVar = [];
// unknownVar.doShomething();

if (typeof(unknownVar) === 'string') {
    unknownVar.toUpperCase();
}

if (typeof(unknownVar) === 'boolean') {
    let isNewV2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
    return JSON.parse(str);
}




