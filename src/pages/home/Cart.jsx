import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart({ cartItems, setCartItems, setQty }) {
  const [comparePromote, setComparePromote] = useState("");
  const [isPromoValid, setIsPromoValid] = useState(false);

  const [showReceipt, setShowReceipt] = useState(false);
  const [orderId, setOrderId] = useState("");

  const totalCartItem = cartItems.reduce(
    (firstItem, item) => firstItem + item.qty,
    0,
  );

  function handleIncr(id, lastCart) {
    setCartItems((prevCartItem) =>
      prevCartItem.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  }

  function handleDecr(id, lastCart) {
    setCartItems((prevCartItem) =>
      prevCartItem.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  }

  function removeItemCart(id) {
    setCartItems((prevCartItem) =>
      prevCartItem.filter((item) => item.id !== id),
    );
  }

  const subTotal = cartItems.reduce(
    (firstItem, item) => firstItem + item.price * item.qty,
    0,
  );

  const totalTax = subTotal * 0.08;
  const totalPrice = isPromoValid
    ? subTotal + totalTax - (subTotal + totalTax) * 0.25
    : subTotal + totalTax;

  const promoteCode = ["Khmer-168", "GenZ-404"];
  const promoteElement = useRef();
  function promoteProceed() {
    if (promoteCode.includes(promoteElement.current.value.trim())) {
      setComparePromote("Correct Promote Code");
      setIsPromoValid(true);
    } else {
      setComparePromote("Incorrect Promote Code");
      setIsPromoValid(false);
    }

    // setTimeout(() => {
    //   setComparePromote("");
    // }, 3000);
  }

  function handleCheckout() {
    const randomId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setShowReceipt(true);
  }

  function handleCloseReceipt() {
    setShowReceipt(false);
    setCartItems([]);
    if (setQty) setQty(0);
    setComparePromote("");
    setIsPromoValid(false);
  }

  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

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
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-4 md:p-6 border border-stone-200/60 shadow-xs flex flex-col sm:flex-row items-center gap-4 md:gap-6 relative group"
                >
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
                          onClick={() => handleDecr(item.id, 1)}
                          className="px-3 py-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-bold text-base transition-colors select-none cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-4 py-1.5 text-sm font-black text-stone-900 min-w-10 text-center select-none">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleIncr(item.id, 1)}
                          className="px-3 py-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-bold text-base transition-colors select-none cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-stone-900 font-black text-base md:text-lg">
                        ${(item.qty * item.price).toFixed(2)}
                        <span className="block text-[11px] text-stone-400 font-medium sm:text-right">
                          ${item.price} each
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItemCart(item.id)}
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

              <Link
                to="/home"
                className="inline-flex items-center text-sm font-semibold text-stone-600 hover:text-amber-600 transition-colors pt-2 gap-1 group"
              >
                <span className="transform group-hover:-translate-x-1 transition-transform">
                  &larr;
                </span>{" "}
                Continue Shopping
              </Link>
            </div>

            {/* sumary receipt */}
            <div className="lg:sticky lg:top-24 bg-white rounded-xl border border-stone-200/60 p-6 shadow-xs flex flex-col gap-6">
              <h2 className="text-lg font-black text-stone-900 tracking-tight border-b border-stone-100 pb-3">
                Order Summary
              </h2>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between items-center text-stone-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-stone-900 font-bold">
                    ${subTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-medium">
                  <span>Shipping Estimate</span>
                  <span className="text-emerald-600 font-bold uppercase text-xs">
                    Free
                  </span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-medium">
                  <span>Estimated Tax</span>
                  <span className="text-stone-900 font-bold">
                    ${totalTax.toFixed(2)}
                  </span>
                </div>
                {comparePromote && (
                  <div className="flex justify-between items-center text-stone-500 font-medium">
                    <span>Promote Code Discount</span>
                    <span className="text-stone-900 font-bold">25%</span>
                  </div>
                )}

                <hr className="border-stone-100 my-2" />

                <div className="flex justify-between items-end">
                  <span className="text-base font-bold text-stone-900">
                    Order Total
                  </span>
                  <span className="text-xl font-black text-stone-900 tracking-tight">
                    ${totalPrice.toFixed(2)}
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
                    ref={promoteElement}
                    className="w-full text-sm px-3 py-2 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:border-amber-600 placeholder:text-stone-300"
                  />
                  <button
                    type="button"
                    onClick={promoteProceed}
                    className="bg-stone-900 text-white hover:bg-stone-800 text-xs font-bold uppercase px-4 rounded transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>

                {comparePromote && (
                  <p
                    className={`font-bold text-sm mt-2 ${isPromoValid ? "text-emerald-600" : "text-red-500"}`}
                  >
                    {comparePromote}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="w-full bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-md shadow-md shadow-amber-600/10 transition-all active:scale-[0.99] cursor-pointer text-center mt-2"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      {/* ==================== RECEIPT MODAL OVERLAY ==================== */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-100 p-6 md:p-8 flex flex-col my-8 max-h-[90vh]">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mx-auto mb-4 shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-xl font-black text-stone-900 tracking-tight text-center">
              Payment Successful!
            </h3>
            <p className="text-xs text-stone-500 text-center mt-1">
              Thank you for your purchase.
            </p>

            <div className="bg-stone-50 border border-stone-200/60 rounded-xl p-4 md:p-5 my-6 flex-1 overflow-y-auto text-stone-800 text-sm font-medium space-y-4">
              <div className="flex justify-between items-center text-xs text-stone-400 pb-3 border-b border-dashed border-stone-200">
                <div className="flex flex-col gap-0.5">
                  <span>Order ID:</span>
                  <span className="font-bold text-stone-700">{orderId}</span>
                </div>
                <div className="flex flex-col gap-0.5 text-right">
                  <span>Date:</span>
                  <span className="font-bold text-stone-700">
                    {formattedDate}
                  </span>
                </div>
              </div>

              <div className="space-y-3 max-h-36 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start text-xs gap-4"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-stone-800 line-clamp-1">
                        {item.title}
                      </span>
                      <span className="text-stone-400 mt-0.5">
                        Qty: {item.qty} &times; ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <span className="font-black text-stone-900 shrink-0">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-dashed border-stone-200 space-y-2 text-xs text-stone-500">
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span className="text-stone-800 font-semibold">
                    ${subTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-bold uppercase text-[10px]">
                    Free
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Estimated Tax (8%)</span>
                  <span className="text-stone-800 font-semibold">
                    ${totalTax.toFixed(2)}
                  </span>
                </div>
                {isPromoValid && (
                  <div className="flex justify-between items-center">
                    <span>Discount Code Applied</span>
                    <span className="text-emerald-600 font-bold uppercase text-[10px]">
                      -25%
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-end pt-2 border-t border-stone-200 text-stone-900">
                  <span className="font-bold text-sm">Amount Paid</span>
                  <span className="font-black text-base tracking-tight text-amber-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCloseReceipt}
              className="w-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-md transition-all text-center cursor-pointer shrink-0"
            >
              Done & Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
