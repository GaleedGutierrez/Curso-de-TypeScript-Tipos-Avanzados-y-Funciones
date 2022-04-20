export const createProduct = (
    id: string | number,
    isNew: boolean = true,
    stock: number = 10
) => {
    return {
        id,
        isNew,
        stock
    }
}

const p1 = createProduct(1, true, 12);
const p2 = createProduct(2);
const p3 = createProduct(3, false, 0);
const p4 = createProduct(4, true, 100);
const p5 = createProduct(5, false);
console.log({p1, p2, p3, p4, p5});
