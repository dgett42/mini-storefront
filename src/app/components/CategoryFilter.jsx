'use client';
export default function CategoryFilter({ categories, value, onChange }) {
return (
<div>
<label className="block text-sm font-medium mb-1">Category</label>
<select
className="w-full border rounded-xl px-3 py-2 bg-white"
value={value}
onChange={(e) => onChange(e.target.value)}
>
{categories.map(c => (
<option key={c} value={c}>{c}</option>
))}
</select>
</div>
);
}