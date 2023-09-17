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
    category: 'notebook',
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

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter((product) =>
                product.category.toLowerCase() === category.toLowerCase()
            );
            resolve(filteredProducts);
        }, 500);
    });
};