export default function ProductPopup({products, onClose}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl border border-stone-100 p-6 md:p-8 flex flex-col items-center text-center animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <button
          type="button"
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors cursor-pointer p-1 rounded-md hover:bg-stone-50"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>

        <h3 className="text-lg font-black text-stone-900 tracking-tight">
          Select Quantity
        </h3>
        <p className="text-xs text-stone-500 mt-1 max-w-60">
          How many items of{" "}
          <span className="font-semibold text-stone-800">
            Velo Over-Ear Headphones
          </span>{" "}
          would you like to add to your cart?
        </p>

        <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50/50 my-6 shadow-xs overflow-hidden">
          <button
            type="button"
            className="px-4 py-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-bold text-lg transition-colors select-none cursor-pointer"
          >
            -
          </button>
          <span className="px-6 py-2.5 text-base font-black text-stone-900 min-w-12.5 select-none">
            1
          </span>
          <button
            type="button"
            className="px-4 py-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-bold text-lg transition-colors select-none cursor-pointer"
          >
            +
          </button>
        </div>

        <div className="w-full flex justify-between items-center text-sm py-3 px-4 bg-stone-50 rounded-lg border border-stone-100 mb-6">
          <span className="text-stone-500 font-medium">Estimated Subtotal:</span>
          <span className="font-black text-stone-900 text-base">$299.00</span>
        </div>

        <div className="w-full grid grid-cols-2 gap-3">
          <button
            type="button"
            className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider py-3 rounded-md transition-all active:scale-[0.99] cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={()=>onClose}
            className="w-full bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-md shadow-md shadow-amber-600/10 transition-all active:scale-[0.99] cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
