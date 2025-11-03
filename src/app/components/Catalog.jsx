'use client';
import { useEffect, useMemo, useState } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const [category, setCategory] = useState('All');
const [maxPrice, setMaxPrice] = useState(''); 


const [cart, setCart] = useState({});

useEffect(() => {
let alive = true;
(async () => {
try {
setLoading(true);
const res = await fetch('/api/products', { cache: 'no-store' });
if (!res.ok) throw new Error('Failed to load products');
const data = await res.json();
if (alive) setProducts(data);
} catch (e) {
if (alive) setError(e.message || 'Unknown error');
} finally {
if (alive) setLoading(false);
}
})();
return () => {
alive = false;
};
}, []);

useEffect(() => {
if (!products.length) return;
const interval = setInterval(() => {
setProducts(prev => prev.map(p => {

const roll = Math.random();
let delta = 0;
if (roll < 0.35) delta = -1; else if (roll > 0.8) delta = +1; 
const nextStock = Math.max(0, Math.min(50, p.stock + delta));
return { ...p, stock: nextStock };
}));

}, 7000);
return () => clearInterval(interval);
}, [products.length]);


const categories = useMemo(() => {
const set = new Set(['All']);
products.forEach(p => set.add(p.category));
return Array.from(set);
}, [products]);

const priceCeiling = useMemo(() => (
products.length ? Math.max(...products.map(p => p.price)) : 0
), [products]);

const filtered = useMemo(() => {
return products.filter(p => {
const catOk = category === 'All' || p.category === category;
const priceOk = maxPrice === '' || p.price <= Number(maxPrice);
return catOk && priceOk;
});
}, [products, category, maxPrice]);

const addToCart = (id) => {
setCart(prev => {
const product = products.find(p => p.id === id);
if (!product || product.stock === 0) return prev; 
const qty = (prev[id] || 0) + 1;
return { ...prev, [id]: qty };
});

setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: Math.max(0, p.stock - 1) } : p));
};

const decrementFromCart = (id) => {
setCart(prev => {
const current = prev[id] || 0;
if (current <= 1) {
const { [id]: _, ...rest } = prev;
return rest;
}
return { ...prev, [id]: current - 1 };
});

setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: p.stock + 1 } : p));
};


const resetCart = () => {
setProducts(prev => prev.map(p => ({
...p,
stock: p.stock + (cart[p.id] || 0)
})));
setCart({});
};

if (loading) return <StatusMessage type="loading" />;
if (error) return <StatusMessage type="error" message={error} />;


return (
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
{/* Filters */}
<aside className="lg:col-span-1 space-y-4">
<div className="p-4 bg-white rounded-2xl shadow">
<h2 className="font-semibold mb-3">Filters</h2>
<CategoryFilter
categories={categories}
value={category}
onChange={setCategory}
/>
<div className="mt-4" />
<PriceFilter
max={priceCeiling}
value={maxPrice}
onChange={setMaxPrice}
/>