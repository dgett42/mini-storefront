'use client';
export default function StatusMessage({ type, message }) {
const map = {
loading: { title: 'Loading products…', note: 'Fetching the latest inventory.' },
error: { title: 'Something went wrong', note: message || 'Please try again.' },
empty: { title: 'No products match', note: 'Adjust filters to see more items.' },
};
const { title, note } = map[type] || map.error;
return (
<div className="p-6 bg-white rounded-2xl shadow text-center">
<p className="font-semibold">{title}</p>
<p className="text-sm text-gray-600">{note}</p>
</div>
);
}