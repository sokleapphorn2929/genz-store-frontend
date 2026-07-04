import { Link } from "react-router-dom";

export default function Navbar({ cartQty = 1 }) {
  return (
    <nav className="fixed z-50 w-full h-16 bg-white border-b border-stone-200 flex justify-between px-6 md:px-12 items-center shadow-xs">
      
      {/* Brand Logo */}
      <div>
        <Link
          to="/home"
          className="text-xl font-black tracking-tight uppercase flex items-center gap-2 text-stone-900"
        >
          <svg
            className="w-6 h-6 text-amber-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
          GenZ<span className="text-amber-600">Store</span>
        </Link>
      </div>

      {/* Navigation Items */}
      <div>
        <ul className="flex items-center gap-6 text-stone-600 font-medium text-sm">
          
          {/* Cart Qty */}
          <li>
            <Link 
              to="/cart" 
              className="flex items-center gap-2 hover:text-amber-600 transition-colors py-2 relative"
            >
              <div className="relative">
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>

                {cartQty > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center animate-in zoom-in-50 duration-200">
                    {cartQty}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </li>

          {/* Account Item */}
          <li>
            <Link 
              to="/account" 
              className="flex items-center gap-2 hover:text-amber-600 transition-colors py-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Account</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}