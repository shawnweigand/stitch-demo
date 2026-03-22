import Link from "next/link";

const allProducts = [
  // Alpine
  { name: "Army Leather Heli Ski", price: "$165", category: "Alpine", material: "Army Leather", href: "/products/army-leather-heli-ski" },
  { name: "Fall Line", price: "$150", category: "Alpine", material: "Hairsheep Leather", href: "/shop" },
  { name: "Vertical Cut C-Zone", price: "$180", category: "Alpine", material: "Hairsheep Leather", href: "/shop" },
  { name: "Sarek Ecocuir", price: "$145", category: "Alpine", material: "Ecocuir Leather", href: "/shop" },
  { name: "Wakayama", price: "$135", category: "Alpine", material: "Goat Leather", href: "/shop" },
  { name: "Fall Line 3-Finger", price: "$155", category: "Alpine", material: "Hairsheep Leather", href: "/shop" },
  // Outdoor
  { name: "Ergo Grip Active", price: "$75", category: "Outdoor", material: "Nylon", href: "/shop" },
  { name: "CZone Windstopper", price: "$120", category: "Outdoor", material: "Goat Leather", href: "/shop" },
  { name: "Falk", price: "$95", category: "Outdoor", material: "Army Leather", href: "/shop" },
  // Dress
  { name: "Peccary Handsewn", price: "$385", category: "Dress", material: "Peccary Leather", href: "/shop" },
  { name: "Eline", price: "$185", category: "Dress", material: "Hairsheep Leather", href: "/shop" },
  { name: "Veronica", price: "$155", category: "Dress", material: "Nappa Leather", href: "/shop" },
];

const categories = ["All", "Alpine", "Outdoor", "Dress"];
const materials = ["All Materials", "Army Leather", "Hairsheep Leather", "Goat Leather", "Peccary Leather", "Nappa Leather"];

export default function ShopPage() {
  return (
    <div
      className="min-h-screen pt-24 pb-24"
      style={{ background: "var(--surface)" }}
    >
      {/* Page header */}
      <div
        className="pb-12 pt-8"
        style={{ background: "var(--surface-container-low)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p
            className="text-xs uppercase font-medium mb-3"
            style={{
              color: "var(--on-surface-variant)",
              fontFamily: "var(--font-body-var)",
              letterSpacing: "0.1rem",
            }}
          >
            HESTRA GLOVES
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display-var)", color: "var(--on-surface)" }}
          >
            All Products
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filter sidebar */}
          <aside className="lg:w-56 xl:w-64 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <p
                className="text-xs uppercase font-medium mb-4"
                style={{
                  color: "var(--on-surface-variant)",
                  fontFamily: "var(--font-body-var)",
                  letterSpacing: "0.1rem",
                }}
              >
                CATEGORIES
              </p>
              <ul className="space-y-2">
                {categories.map((cat, i) => (
                  <li key={cat}>
                    <button
                      className="text-sm font-medium w-full text-left py-1.5 transition-opacity hover:opacity-70"
                      style={{
                        color: i === 0 ? "var(--primary)" : "var(--on-surface-variant)",
                        fontFamily: "var(--font-body-var)",
                        fontWeight: i === 0 ? 600 : 400,
                      }}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price range */}
            <div className="mb-8">
              <p
                className="text-xs uppercase font-medium mb-4"
                style={{
                  color: "var(--on-surface-variant)",
                  fontFamily: "var(--font-body-var)",
                  letterSpacing: "0.1rem",
                }}
              >
                PRICE RANGE
              </p>
              <div
                className="p-4 space-y-3"
                style={{ background: "var(--surface-container-low)", borderRadius: "0.5rem" }}
              >
                {["Under $100", "$100 – $200", "$200 – $300", "Over $300"].map((range) => (
                  <label
                    key={range}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <span
                      className="w-4 h-4 rounded-sm flex-shrink-0"
                      style={{
                        border: "1.5px solid var(--outline-variant)",
                        background: "var(--surface-container-lowest)",
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm"
                      style={{ color: "var(--on-surface-variant)", fontFamily: "var(--font-body-var)" }}
                    >
                      {range}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div className="mb-8">
              <p
                className="text-xs uppercase font-medium mb-4"
                style={{
                  color: "var(--on-surface-variant)",
                  fontFamily: "var(--font-body-var)",
                  letterSpacing: "0.1rem",
                }}
              >
                MATERIALS
              </p>
              <div
                className="p-4 space-y-3"
                style={{ background: "var(--surface-container-low)", borderRadius: "0.5rem" }}
              >
                {materials.slice(1).map((mat) => (
                  <label
                    key={mat}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <span
                      className="w-4 h-4 rounded-sm flex-shrink-0"
                      style={{
                        border: "1.5px solid var(--outline-variant)",
                        background: "var(--surface-container-lowest)",
                      }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm"
                      style={{ color: "var(--on-surface-variant)", fontFamily: "var(--font-body-var)" }}
                    >
                      {mat}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-8">
              <p
                className="text-xs uppercase font-medium"
                style={{
                  color: "var(--on-surface-variant)",
                  fontFamily: "var(--font-body-var)",
                  letterSpacing: "0.1rem",
                }}
              >
                SHOWING {allProducts.length} PRODUCTS
              </p>
              <div className="flex items-center gap-3">
                <label
                  className="text-xs uppercase font-medium"
                  style={{
                    color: "var(--on-surface-variant)",
                    fontFamily: "var(--font-body-var)",
                    letterSpacing: "0.08rem",
                  }}
                  htmlFor="sort"
                >
                  SORT:
                </label>
                <select
                  id="sort"
                  className="text-sm py-1.5 px-3 appearance-none cursor-pointer"
                  style={{
                    background: "var(--surface-container-low)",
                    color: "var(--on-surface)",
                    fontFamily: "var(--font-body-var)",
                    borderRadius: "0.25rem",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {allProducts.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="group block transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(26,28,28,0.08)]"
                  style={{
                    boxShadow: "0 0 24px rgba(26,28,28,0.04)",
                    borderRadius: "0.75rem",
                    outline: `1px solid rgba(211,196,183,0.15)`,
                    background: "var(--surface-container-lowest)",
                  }}
                >
                  {/* Image */}
                  <div
                    className="aspect-square overflow-hidden"
                    style={{
                      background: "var(--surface-container-low)",
                      borderRadius: "0.75rem 0.75rem 0 0",
                    }}
                  >
                    <div
                      className="w-full h-full transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                      style={{
                        background: "linear-gradient(45deg, rgba(120,88,52,0.08), rgba(176,138,98,0.04))",
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <p
                      className="text-xs uppercase font-medium mb-2"
                      style={{
                        color: "var(--on-surface-variant)",
                        fontFamily: "var(--font-body-var)",
                        letterSpacing: "0.06rem",
                      }}
                    >
                      {product.category} · {product.material}
                    </p>
                    <p
                      className="text-base font-semibold mb-1"
                      style={{ fontFamily: "var(--font-display-var)", color: "var(--on-surface)" }}
                    >
                      {product.name}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--primary)", fontFamily: "var(--font-body-var)" }}
                    >
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
