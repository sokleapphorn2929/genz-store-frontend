export default function Cart() {
  return (
    <div class="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 md:px-12 lg:px-24 pt-24">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-2xl md:text-3xl font-black tracking-tight text-stone-900 mb-8">
          Your Shopping Cart{" "}
          <span class="text-amber-600 font-medium text-lg md:text-xl ml-2">
            (2 Items)
          </span>
        </h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div class="lg:col-span-2 space-y-4">
            {/* ordered item */}
            <div class="bg-white rounded-xl p-4 md:p-6 border border-stone-200/60 shadow-xs flex flex-col sm:flex-row items-center gap-4 md:gap-6 relative group">
              <div class="w-24 h-24 sm:w-32 sm:h-32 bg-stone-100 rounded-lg overflow-hidden shrink-0 border border-stone-100">
                <img
                  src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
                  alt="Velo Over-Ear Headphones"
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="flex flex-col flex-1 w-full justify-between h-full gap-2 text-center sm:text-left">
                <div>
                  <div class="flex items-center justify-center sm:justify-start gap-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    <span>Velo</span>
                    <span class="text-stone-300">&middot;</span>
                    <span>Electronics</span>
                  </div>
                  <h3 class="text-base md:text-lg font-bold text-stone-900 tracking-tight mt-0.5">
                    Velo Over-Ear Headphones
                  </h3>
                </div>

                <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                  <div class="flex items-center border border-stone-200 rounded-md bg-stone-50/50 shadow-xs overflow-hidden">
                    <button
                      type="button"
                      class="px-3 py-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-bold text-base transition-colors select-none cursor-pointer"
                    >
                      -
                    </button>
                    <span class="px-4 py-1.5 text-sm font-black text-stone-900 min-w-10 text-center select-none">
                      2
                    </span>
                    <button
                      type="button"
                      class="px-3 py-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-bold text-base transition-colors select-none cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <div class="text-stone-900 font-black text-base md:text-lg">
                    $59.98
                    <span class="block text-[11px] text-stone-400 font-medium sm:text-right">
                      $29.99 each
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="absolute top-4 right-4 sm:static sm:top-auto sm:right-auto text-stone-400 hover:text-red-600 p-1.5 rounded-md hover:bg-stone-50 transition-colors cursor-pointer self-start sm:self-center"
                title="Remove item"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>

            <a
              href="/home"
              class="inline-flex items-center text-sm font-semibold text-stone-600 hover:text-amber-600 transition-colors pt-2 gap-1 group"
            >
              <span class="transform group-hover:-translate-x-1 transition-transform">
                &larr;
              </span>{" "}
              Continue Shopping
            </a>
          </div>

          <div class="lg:sticky lg:top-24 bg-white rounded-xl border border-stone-200/60 p-6 shadow-xs flex flex-col gap-6">
            <h2 class="text-lg font-black text-stone-900 tracking-tight border-b border-stone-100 pb-3">
              Order Summary
            </h2>

            <div class="space-y-3.5 text-sm">
              <div class="flex justify-between items-center text-stone-500 font-medium">
                <span>Subtotal</span>
                <span class="text-stone-900 font-bold">$104.98</span>
              </div>
              <div class="flex justify-between items-center text-stone-500 font-medium">
                <span>Shipping Estimate</span>
                <span class="text-emerald-600 font-bold uppercase text-xs">
                  Free
                </span>
              </div>
              <div class="flex justify-between items-center text-stone-500 font-medium">
                <span>Estimated Tax</span>
                <span class="text-stone-900 font-bold">$8.40</span>
              </div>

              <hr class="border-stone-100 my-2" />

              <div class="flex justify-between items-end">
                <span class="text-base font-bold text-stone-900">
                  Order Total
                </span>
                <span class="text-xl font-black text-stone-900 tracking-tight">
                  $113.38
                </span>
              </div>
            </div>

            <div class="mt-2">
              <label
                for="promo"
                class="block text-xs font-bold uppercase text-stone-400 tracking-wider mb-2"
              >
                Promo Code
              </label>
              <div class="flex gap-2">
                <input
                  type="text"
                  id="promo"
                  placeholder="GZ2026"
                  class="w-full text-sm px-3 py-2 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:border-amber-600 placeholder:text-stone-300"
                />
                <button
                  type="button"
                  class="bg-stone-900 text-white hover:bg-stone-800 text-xs font-bold uppercase px-4 rounded transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </div>

            <button
              type="button"
              class="w-full bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-md shadow-md shadow-amber-600/10 transition-all active:scale-[0.99] cursor-pointer text-center mt-2"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
