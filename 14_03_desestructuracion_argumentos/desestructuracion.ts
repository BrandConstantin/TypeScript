interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350
}

interface taxCalculationOptions{
    tax: number;
    products: Product[];
}

function taxCalculation(options: taxCalculationOptions): number[]{
    const {tax, products}  = options;
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return[total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax, // es el tax: tax en ES6
});

console.log('Total ', total);
console.log('Tax ', tax);