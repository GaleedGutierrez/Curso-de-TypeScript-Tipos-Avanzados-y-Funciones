import { addProduct } from './products/product.service'

addProduct({
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    title: 'p1',
    stock: 90,
    category: {
        id: '12',
        name: 'c1',
        createdAt: new Date(),
        updatedAt: new Date()
    }
});
