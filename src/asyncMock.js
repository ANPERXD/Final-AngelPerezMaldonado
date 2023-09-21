const products = [{}];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    });
};
export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    });
};
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