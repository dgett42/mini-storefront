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

{entries.length === 0 ? (
<div className="text-sm text-gray-500">Your cart is empty.</div>
) : (
<ul className="space-y-2">
{entries.map(([id, qty]) => {
const p = products.find(x => x.id === id);
if (!p) return null;
return (
<li key={id} className="flex items-center justify-between text-sm">
<span>{p.name} × {qty}</span>
<div className="flex items-center gap-2">
<button
onClick={() => onDecrement(id)}
className="px-2 py-1 rounded-lg border"
>−</button>
<span>${(p.price * qty).toFixed(2)}</span>
</div>
</li>
);
})}
</ul>
)}

<button
onClick={onReset}
disabled={entries.length === 0}
className="mt-3 w-full rounded-xl px-3 py-2 border"
>
Reset Cart
</button>
</div>
);
}