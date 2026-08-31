//| Using array iteration methods, produce an object containing:
/*
|    {
|        totalRevenue: ...,
|        bestSellingProduct: ...,
|        topCustomer: ...,
|        categoryRevenue: {
|          Electronics: ...,
|          Furniture: ...
|        },
|        highValueTransactions: [...]
|    } 
*/

const sales = [
  { product: "Laptop", category: "Electronics", price: 50000, quantity: 2, customer: "Justin" },
  { product: "Laptop", category: "Electronics", price: 50000, quantity: 3, customer: "Justin" },
  { product: "Mouse", category: "Electronics", price: 1200, quantity: 5, customer: "Mark" },
  { product: "Keyboard", category: "Electronics", price: 2500, quantity: 3, customer: "Justin" },
  { product: "Chair", category: "Furniture", price: 7500, quantity: 1, customer: "Anna" },
  { product: "Desk", category: "Furniture", price: 12000, quantity: 2, customer: "Mark" },
  { product: "Monitor", category: "Electronics", price: 15000, quantity: 2, customer: "Anna" },
  { product: "Headset", category: "Electronics", price: 3500, quantity: 4, customer: "Justin" },
  { product: "Lamp", category: "Furniture", price: 1800, quantity: 3, customer: "Anna" },
  { product: "Webcam", category: "Electronics", price: 4500, quantity: 2, customer: "Mark" }
];

const totalRev = sales.reduce((total, product) => {
   return product.price * product.quantity + total;
}, 0);

const productArr = [];

const productQuantity = sales.map(product => {
    const findDuplicate = productArr.find(productName => productName.name === product.product);

    if (!findDuplicate) {
        productArr.push({ name: product.product, quantity: product.quantity });
    } else {
        findDuplicate.quantity = findDuplicate.quantity + product.quantity;
    }
});

const bestSeller = Math.max(...productArr.map(value => value.quantity));

const bestSellingProd = productArr.filter(value => value.quantity === bestSeller);

const bestSellingResult = bestSellingProd.length === 1 ? bestSellingProd[0].name : bestSellingProd.map(value => value.name);

const customers = [];

const identifyCustomers = sales.map(value => {
    const findDuplicate = customers.find(customer => customer.name === value.customer);

    if (!findDuplicate) {
        customers.push({ name: value.customer, total: value.price * value.quantity });
    } else {
        findDuplicate.total = findDuplicate.total + value.price * value.quantity;
    }
});

const highestSpender = Math.max(...customers.map(a => a.total));

const findHighestSpender = customers.filter(customer => customer.total === highestSpender);

const topCustomer = findHighestSpender.length === 1 ? findHighestSpender[0].name : findHighestSpender.map(a => a.name);

const category = {};

const categoryRev = sales.map(value => {
    const keys = Object.keys(category);
    const categoryName = value.category
    const findDuplicate = keys.find(value => value === categoryName);

    if (!findDuplicate) {
        category[categoryName] = value.price * value.quantity;
    } else {
        category[categoryName] = value.price * value.quantity + category[categoryName];
    }
});

const highValueTransactions = sales.filter(value => value.price * value.quantity > 20000);

const result = {
    totalRevenue: totalRev.toLocaleString(),
    bestSellingProduct: bestSellingResult,
    topCustomer: topCustomer,
    categoryRevenue: category,
    highValueTransactions: highValueTransactions
};
console.log(result);