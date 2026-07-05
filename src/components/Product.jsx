import { useEffect, useState } from "react";
import ProductPopup from "./ProductPopup";

export default function Product({onAddToCart}) {
  const [products, setProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null);

  async function getProduct() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
      return data.products;
    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    console.log(getProduct());
  }, []);

  return (
    <section className="bg-stone-50 py-12 px-6 md:py-16 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Trending Items
          </span>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-stone-900 mt-1">
            New Arrivals
          </h2>
        </div>
        <a
          href="#"
          className="text-sm font-semibold text-stone-900 hover:text-amber-600 underline underline-offset-4 transition-colors"
        >
          View all products &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((prod) => (
          <div
            className="group relative flex flex-col justify-between"
            key={prod.id}
          >
            <div className="relative w-full aspect-square bg-stone-100 rounded-lg overflow-hidden shadow-xs border border-stone-100">
              <img
                src={prod.thumbnail}
                alt={prod.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {prod.discountPercentage > 0 && (
                <span className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded shadow-xs">
                  -{Math.round(prod.discountPercentage)}% OFF
                </span>
              )}
            </div>

            <div className="mt-4 flex flex-col gap-1 grow justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  <span className="truncate max-w-25">
                    {prod.brand || "Velo"}
                  </span>
                  <span className="text-stone-300">&middot;</span>
                  <span className="text-stone-500 truncate">
                    {prod.category}
                  </span>
                </div>

                <div className="flex justify-between items-start gap-2 mt-1">
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight line-clamp-2">
                    {prod.title}
                  </h3>

                  <div className="text-right shrink-0">
                    <p className="text-sm font-black text-stone-900">
                      ${prod.price}
                    </p>
                    {prod.discountPercentage > 0 && (
                      <p className="text-[11px] text-stone-400 line-through">
                        $
                        {(
                          prod.price /
                          (1 - prod.discountPercentage / 100)
                        ).toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={()=>setSelectProduct(prod)}
                className="mt-4 w-full bg-stone-900 text-white hover:bg-stone-800 text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded transition-all active:scale-[0.98] cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectProduct && (
        <ProductPopup
          products={selectProduct}
          onClose={()=>setSelectProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </section>
  );
}
