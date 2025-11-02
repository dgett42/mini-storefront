export async function GET() {
// 8–12 items, 3+ categories
const products = [
{ id: 'p1', name: 'Laptop 14"', price: 1099, category: 'Electronics', stock: 5 },
{ id: 'p2', name: 'Noise‑Cancel Headphones', price: 199, category: 'Electronics', stock: 8 },
{ id: 'p3', name: 'Smartphone XL', price: 899, category: 'Electronics', stock: 4 },
{ id: 'p4', name: 'Standing Desk', price: 399, category: 'Furniture', stock: 3 },
{ id: 'p5', name: 'Ergo Desk Chair', price: 159, category: 'Furniture', stock: 7 },
{ id: 'p6', name: 'Ceramic Mug', price: 15, category: 'Home', stock: 25 },
{ id: 'p7', name: 'LED Table Lamp', price: 45, category: 'Home', stock: 10 },
{ id: 'p8', name: 'Trail Running Shoes', price: 120, category: 'Outdoors', stock: 6 },
{ id: 'p9', name: 'Insulated Water Bottle',price: 28, category: 'Outdoors', stock: 20 },
{ id: 'p10', name: 'Mechanical Keyboard', price: 129, category: 'Electronics', stock: 9 },
{ id: 'p11', name: 'Bookshelf (3‑tier)', price: 89, category: 'Furniture', stock: 5 },
{ id: 'p12', name: 'Throw Blanket', price: 39, category: 'Home', stock: 12 },
];
return Response.json(products);
}