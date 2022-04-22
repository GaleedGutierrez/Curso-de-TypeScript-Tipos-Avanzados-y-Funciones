import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto, FindProductDto } from "./product.dto";
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

export const findProduct = (dto: FindProductDto): Product[] => {
    // code
    // dto.isNew = false; // Error
    // dto.tags = []; // Error
    // dto.tags?.pop(); // Error
    // dto.tags?.push('1'); // Error
    return products;
}

export const deleteProduct = (idSearch: string | number, products: Product[]): void => {
    const productFindIndex = products.findIndex(({id}) => id === idSearch);
    if (productFindIndex !== -1) {
        products.splice(productFindIndex, 1);
    } else {
        console.log(`No se pudo eliminar al producto con id: ${idSearch}`);
    }

}

export const updateProduct = (idSearch: Product['id'], changes: UpdateProductDto, products: Product[]): Product => {
    const productFindIndex = products.findIndex(({id}) => id === idSearch);
    const prevData = products[productFindIndex];
    if (productFindIndex !== -1) {
        products[productFindIndex] = {
            ...prevData,
            ...changes
        };
    } else {
        messageNotFind(idSearch);
    }
    return products[productFindIndex];
}

const messageNotFind = (idSearch: string | number): void => {
    console.log(`No se pudo encontrar al producto con id: ${idSearch}`);
}
