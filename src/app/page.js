export default function Page() {

return (
<main className="min-h-screen bg-gray-50">
<section className="max-w-6xl mx-auto p-6">
<h1 className="text-3xl font-bold mb-4">Mini‑Storefront</h1>

<CatalogWrapper />
</section>
</main>
);
}



function CatalogWrapper() {

const Catalog = require("./components/Catalog").default;
return <Catalog />;
}