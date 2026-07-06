import { Link } from "react-router-dom";

export default function Cart({ cartItems, setCartItems }) {
  const totalCartItem = cartItems.reduce(
    (firstItem, item) => firstItem + item.qty,
    0,
  );

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 md:px-12 lg:px-24 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-stone-900 mb-8">
          Your Shopping Cart{" "}
          <span className="text-amber-600 font-medium text-lg md:text-xl ml-2">
            ({totalCartItem} {totalCartItem > 1 ? "items" : "item"})
          </span>
        </h1>
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-stone-200/60 p-8 shadow-xs flex flex-col items-center">
            <p className="text-stone-500 mb-4 font-medium">
              Your shopping cart is currently empty.
            </p>
            <Link
              to="/home"
              className="bg-stone-900 text-white hover:bg-stone-800 text-xs font-bold uppercase tracking-wider py-3 px-6 rounded transition-all"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          // ordered cart item
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4">
              {/* array of order item */}
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-4 md:p-6 border border-stone-200/60 shadow-xs flex flex-col sm:flex-row items-center gap-4 md:gap-6 relative group">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-stone-100 rounded-lg overflow-hidden shrink-0 border border-stone-100">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col flex-1 w-full justify-between h-full gap-2 text-center sm:text-left">
                    <div>
                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        {/* product brand */}
                        <span>{item.brand}</span>
                        <span className="text-stone-300">&middot;</span>
                        {/* product category */}
                        <span>{item.category}</span>
                      </div>
                      {/* product title */}
                      <h3 className="text-base md:text-lg font-bold text-stone-900 tracking-tight mt-0.5">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                      <div className="flex items-center border border-stone-200 rounded-md bg-stone-50/50 shadow-xs overflow-hidden">
                        <button
                          type="button"
                          className="px-3 py-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-bold text-base transition-colors select-none cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-4 py-1.5 text-sm font-black text-stone-900 min-w-10 text-center select-none">
                          2
                        </span>
                        <button
                          type="button"
                          className="px-3 py-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-bold text-base transition-colors select-none cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-stone-900 font-black text-base md:text-lg">
                        $59.98
                        <span className="block text-[11px] text-stone-400 font-medium sm:text-right">
                          $29.99 each
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="absolute top-4 right-4 sm:static sm:top-auto sm:right-auto text-stone-400 hover:text-red-600 p-1.5 rounded-md hover:bg-stone-50 transition-colors cursor-pointer self-start sm:self-center"
                    title="Remove item"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}

              <a
                href="/home"
                className="inline-flex items-center text-sm font-semibold text-stone-600 hover:text-amber-600 transition-colors pt-2 gap-1 group"
              >
                <span className="transform group-hover:-translate-x-1 transition-transform">
                  &larr;
                </span>{" "}
                Continue Shopping
              </a>
            </div>

            <div className="lg:sticky lg:top-24 bg-white rounded-xl border border-stone-200/60 p-6 shadow-xs flex flex-col gap-6">
              <h2 className="text-lg font-black text-stone-900 tracking-tight border-b border-stone-100 pb-3">
                Order Summary
              </h2>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between items-center text-stone-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-stone-900 font-bold">$104.98</span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-medium">
                  <span>Shipping Estimate</span>
                  <span className="text-emerald-600 font-bold uppercase text-xs">
                    Free
                  </span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-medium">
                  <span>Estimated Tax</span>
                  <span className="text-stone-900 font-bold">$8.40</span>
                </div>

                <hr className="border-stone-100 my-2" />

                <div className="flex justify-between items-end">
                  <span className="text-base font-bold text-stone-900">
                    Order Total
                  </span>
                  <span className="text-xl font-black text-stone-900 tracking-tight">
                    $113.38
                  </span>
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="promo"
                  className="block text-xs font-bold uppercase text-stone-400 tracking-wider mb-2"
                >
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="promo"
                    placeholder="GZ2026"
                    className="w-full text-sm px-3 py-2 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:border-amber-600 placeholder:text-stone-300"
                  />
                  <button
                    type="button"
                    className="bg-stone-900 text-white hover:bg-stone-800 text-xs font-bold uppercase px-4 rounded transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-md shadow-md shadow-amber-600/10 transition-all active:scale-[0.99] cursor-pointer text-center mt-2"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
        ;
      </div>
    </div>
  );
}
