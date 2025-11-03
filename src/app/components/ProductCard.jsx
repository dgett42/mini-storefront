'use client';
export default function ProductCard({ product, onAdd }) {
const { name, price, stock, category } = product;
const out = stock <= 0;
return (
<div className="bg-white rounded-2xl shadow p-4 flex flex-col">
<div className="text-sm text-gray-500">{category}</div>
<h3 className="font-semibold text-lg">{name}</h3>
<div className="mt-2 text-xl font-bold">${price}</div>
<div className="mt-1 text-sm">Stock: <span className={out ? 'text-red-600' : 'text-green-700'}>{stock}</span></div>
{out && <div className="mt-1 text-xs text-red-600">Out of stock</div>}
<button
onClick={onAdd}
disabled={out}
className="mt-auto inline-flex justify-center items-center rounded-xl px-3 py-2 bg-black text-white disabled:bg-gray-300 disabled:text-gray-600"
>
{out ? 'Unavailable' : 'Add to Cart'}
</button>
</div>
);
}