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

