import { addProduct, products, updateProduct, readProduct, deleteProduct } from './products/product.service';
import { faker } from '@faker-js/faker';
import { Product } from './products/product.model';

for (let index = 0; index < 2; index++) {
    addProduct({
        id: faker.datatype.uuid(),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        color: faker.commerce.color(),
        size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
        price: parseInt(faker.commerce.price()),
        isNew: faker.datatype.boolean(),
        tags: faker.random.arrayElements(),
        title: faker.commerce.productName(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        stock: faker.datatype.number({min: 10, max: 100}),
        category: {
            id: faker.datatype.uuid(),
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent()
        }
    });
}
addProduct({
    id: 123,
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElements(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({min: 10, max: 100}),
    category: {
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
    }
});

addProduct({
    id: 465,
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElements(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({min: 10, max: 100}),
    category: {
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
    }
});

const changes: Product = {
    id: 'changes',
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElements(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.datatype.number({min: 10, max: 100}),
    category: {
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
    }
}

updateProduct(123, changes, products);
readProduct('changes', products);
deleteProduct('changes', products);
readProduct('changes', products);
updateProduct(123, changes, products);
deleteProduct('changes', products);
// console.log({products});
