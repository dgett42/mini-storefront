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

}