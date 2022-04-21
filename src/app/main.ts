import { addProduct, products } from './products/product.service';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
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

console.log({products});
