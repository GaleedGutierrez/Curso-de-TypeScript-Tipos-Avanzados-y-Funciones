import { Product } from "./product.model";
import { CreateProductDto } from "./product.dto";
import { faker } from '@faker-js/faker';


export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
    const newProduct = {
        ...data,
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent()
        }
    }
    products.push(newProduct);
    return newProduct;
}

export const readProduct = (idSearch: string | number, products: Product[]): void => {
    const productFindIndex = products.findIndex(({id}) => id === idSearch);
    if (productFindIndex !== -1) {
        console.log(products[productFindIndex]);
    } else {
        messageNotFind(idSearch);
    }

}

export const deleteProduct = (idSearch: string | number, products: Product[]): void => {
    const productFindIndex = products.findIndex(({id}) => id === idSearch);
    if (productFindIndex !== -1) {
        products.splice(productFindIndex, 1);
    } else {
        console.log(`No se pudo eliminar al producto con id: ${idSearch}`);
    }

}

export const updateProduct = (idSearch: string | number, changes: Product, products: Product[]): void => {
    const productFindIndex = products.findIndex(({id}) => id === idSearch);
    if (productFindIndex !== -1) {
        products[productFindIndex] = changes;
    } else {
        messageNotFind(idSearch);
    }
}

const messageNotFind = (idSearch: string | number): void => {
    console.log(`No se pudo encontrar al producto con id: ${idSearch}`);
}
