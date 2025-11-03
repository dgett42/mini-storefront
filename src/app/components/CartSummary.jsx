'use client';
import { useMemo } from 'react';


export default function CartSummary({ cart, products, onDecrement, onReset }) {
const { itemCount, total } = useMemo(() => {
let count = 0; let sum = 0;
for (const [id, qty] of Object.entries(cart)) {
const p = products.find(x => x.id === id);
if (!p) continue;
count += qty; sum += qty * p.price;
}
return { itemCount: count, total: sum };
}, [cart, products]);


const entries = Object.entries(cart);

return (
<div className="p-4 bg-white rounded-2xl shadow">
<h2 className="font-semibold mb-2">Cart</h2>
<div className="text-sm text-gray-700 mb-3">Items: <strong>{itemCount}</strong> · Total: <strong>${total.toFixed(2)}</strong></div>


