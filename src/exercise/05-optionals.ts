export const createProduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number
) => {
    return {
        id,
        isNew: isNew ?? true,
        stock: stock ?? 10
    }
}

const p1 = createProduct(1, true, 12);
const p2 = createProduct(1);
const p3 = createProduct(1, false, 0);
console.log({p1, p2, p3});
