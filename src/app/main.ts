import { addProduct, products, updateProduct, deleteProduct, findProduct } from './products/product.service';
import { faker } from '@faker-js/faker';
import { Product } from './products/product.model';

for (let index = 0; index < 2; index++) {
    addProduct({
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        color: faker.commerce.color(),
        size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
        price: parseInt(faker.commerce.price()),
        isNew: faker.datatype.boolean(),
        tags: faker.random.arrayElements(),
        title: faker.commerce.productName(),
        stock: faker.datatype.number({min: 10, max: 100}),
        categoryId: faker.datatype.uuid()
    });
}

const product = products[0];
updateProduct(product.id, {
    title: 'New title',
    stock: 80,
}, products);

findProduct({
    stock: 10,
    color: 'red',
    createdAt: new Date(),
    isNew: true,
    tags: ['as', 'xd']
});
// addProduct({
//     id: 123,
//     description: faker.commerce.productDescription(),
//     image: faker.image.imageUrl(),
//     color: faker.commerce.color(),
//     size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
//     price: parseInt(faker.commerce.price()),
//     isNew: faker.datatype.boolean(),
//     tags: faker.random.arrayElements(),
//     title: faker.commerce.productName(),
//     createdAt: faker.date.recent(),
//     updatedAt: faker.date.recent(),
//     stock: faker.datatype.number({min: 10, max: 100}),
//     category: {
//         id: faker.datatype.uuid(),
//         name: faker.commerce.department(),
//         createdAt: faker.date.recent(),
//         updatedAt: faker.date.recent()
//     }
// });

// addProduct({
//     id: 465,
//     description: faker.commerce.productDescription(),
//     image: faker.image.imageUrl(),
//     color: faker.commerce.color(),
//     size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
//     price: parseInt(faker.commerce.price()),
//     isNew: faker.datatype.boolean(),
//     tags: faker.random.arrayElements(),
//     title: faker.commerce.productName(),
//     createdAt: faker.date.recent(),
//     updatedAt: faker.date.recent(),
//     stock: faker.datatype.number({min: 10, max: 100}),
//     category: {
//         id: faker.datatype.uuid(),
//         name: faker.commerce.department(),
//         createdAt: faker.date.recent(),
//         updatedAt: faker.date.recent()
//     }
// });

// const changes: Product = {
//     id: 'changes',
//     description: faker.commerce.productDescription(),
//     image: faker.image.imageUrl(),
//     color: faker.commerce.color(),
//     size: faker.random.arrayElement(['S', 'M', 'L', 'XL']),
//     price: parseInt(faker.commerce.price()),
//     isNew: faker.datatype.boolean(),
//     tags: faker.random.arrayElements(),
//     title: faker.commerce.productName(),
//     createdAt: faker.date.recent(),
//     updatedAt: faker.date.recent(),
//     stock: faker.datatype.number({min: 10, max: 100}),
//     category: {
//         id: faker.datatype.uuid(),
//         name: faker.commerce.department(),
//         createdAt: faker.date.recent(),
//         updatedAt: faker.date.recent()
//     }
// }

// updateProduct(123, changes, products);
// readProduct('changes', products);
// deleteProduct('changes', products);
// readProduct('changes', products);
// updateProduct(123, changes, products);
// deleteProduct('changes', products);
// console.log({products});
