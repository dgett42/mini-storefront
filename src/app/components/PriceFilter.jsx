'use client';
import { useId } from 'react';


export default function PriceFilter({ max, value, onChange }) {
const id = useId();
const cap = Number(value) || max || 0;
return (
<div>
<label htmlFor={id} className="block text-sm font-medium mb-1">Max Price</label>
<input
id={id}
type="range"
min={0}
max={max || 0}
step={1}
value={value === '' ? (max || 0) : value}
onChange={(e) => {
const v = Number(e.target.value);
if (v >= (max || 0)) onChange(''); else onChange(String(v));
}}
className="w-full"
/>
<div className="text-sm text-gray-600 mt-1">
{value === '' ? 'No price limit' : `Up to $${cap}`}
</div>
</div>
);
}