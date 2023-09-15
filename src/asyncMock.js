const products = [{
    id: '1',
    name: 'Samsung',
    price: 200,
    category: 'celular',
    img: '',
    stock: 500,
    description: ''
}, {
    id: '2',
    name: 'ASUS',
    price: 1500,
    category: 'notebokk',
    img: '',
    stock: 50,
    description: ''
}, {
    id: '3',
    name: 'Apple',
    price: 500,
    category: 'tablet',
    img: '',
    stock: 100,
    description: ''
}]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}