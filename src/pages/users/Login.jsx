import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    try{
      console.log(username,password);
      let item = {
        username: username,
        password: password
      };
      let response = await fetch("https://dummyjson.com/user/login",{
        method: "POST",
        headers: {
          "Content-type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify(item)
      });
      let result = await response.json();
      if(response.ok){
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/home")
      }
      else{
        alert(result.message || "Login failed");
      }
    }
    catch(error){
      console.error("Network error:", error);
    }
  }

  return (
    <div className="bg-stone-50 font-sans antialiased text-stone-900">
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="flex flex-col justify-between w-full md:w-1/2 p-6 md:p-12 bg-white lg:px-16 xl:px-24">
          <div className="flex items-center justify-between w-full mb-8 md:mb-0">
            <a
              href="#"
              className="text-xl font-black tracking-tight uppercase flex items-center gap-2"
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
            </a>
          </div>

          <div className="w-full max-w-md mx-auto my-auto space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-stone-500">
                New customer?
                <Link
                  to="/register"
                  className="font-semibold text-amber-600 hover:text-amber-500 underline underline-offset-4"
                >
                  Create an account
                </Link>
              </p>
            </div>
            <form onSubmit={login} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                >
                  Username
                </label>
                <div className="mt-1.5">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-stone-200 bg-stone-50/50 py-2.5 px-3.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm transition-all outline-none"
                    placeholder="Enter your username"
                    onChange={(e)=>setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-1.5">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-stone-200 bg-stone-50/50 py-2.5 px-3.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm transition-all outline-none"
                    placeholder="••••••••"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-stone-900 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow hover:bg-stone-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-stone-900 active:scale-[0.99] transition-all mt-10"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="hidden md:block text-xs text-stone-400 text-center mt-8">
            &copy; 2026 VeloStore. All rights reserved.{" "}
            <a href="#" className="hover:underline">
              Privacy
            </a>{" "}
            &middot;{" "}
            <a href="#" className="hover:underline">
              Terms
            </a>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 relative bg-stone-900">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
            alt="New Arrivals"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-900/40 to-transparent"></div>

          <div className="relative z-10 m-auto max-w-md text-center p-8 text-white">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
              Member Exclusive
            </span>
            <h3 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Free shipping is waiting for you.
            </h3>
            <p className="mt-3 text-stone-200 text-sm lg:text-base leading-relaxed">
              Log into your profile to unlock free standard shipping, custom
              reward points, and early access to our seasonal line drop.
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-around text-xs text-stone-300 uppercase tracking-widest font-medium">
              <div>⚡ Easy Returns</div>
              <div>🔒 Secure Checkout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
