// ? these problems are medium difficulty

// ? PROBLEM 1: Product Inventory Summary

const products = [
  { name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
  { name: "Phone", category: "Electronics", price: 30000, stock: 5 },
  { name: "Desk", category: "Furniture", price: 7000, stock: 2 },
  { name: "Chair", category: "Furniture", price: 3000, stock: 4 }
];

let totalProduct = products.reduce((total, value) => {
    let categoryName = value.category;
    let totalPrice = value.price * value.stock;

    if (!total[categoryName]) {
        total[categoryName] = totalPrice;
    } else {
        total[categoryName] += totalPrice;
    }
    
    return total;
}, {});

console.log(totalProduct);
