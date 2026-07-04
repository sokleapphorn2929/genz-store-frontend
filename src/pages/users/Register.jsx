import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function handleInput() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    birthDate: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // use for catch data from form as object
  function handleInput(e){
    const {name,value} = e.target;

    setFormData((prevData)=>({
      ...prevData,
      [name]: value
    }));
  };

  async function register(e) {
    e.preventDefault();

    try{
      let item = {...formData};
      let response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-type" : "application/json",
          "Accept" : "application/json"
        },
        body: JSON.stringify(item)
      });
      let result = await response.json();
      if(response.ok){
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate("/home");
        console.log(formData);
      }
      else{
        alert(result.message);
      }
    }
    catch(error){
      console.error("Error", error);
    }
  }

  return (
    <div className="bg-stone-50 font-sans antialiased text-stone-900">
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="flex flex-col justify-between w-full md:w-7/12 p-6 md:p-12 bg-white lg:px-16 xl:px-24">
          <div className="flex items-center justify-between w-full mb-8 md:mb-4">
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

          <div className="w-full max-w-2xl mx-auto my-auto space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Create Account
              </h2>
              <p className="mt-2 text-sm text-stone-500">
                Already have an account?
                <Link
                  to="/"
                  className="font-semibold text-amber-600 hover:text-amber-500 underline underline-offset-4"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            <form onSubmit={register} method="POST" className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* firstname */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    First Name
                  </label>
                  <div className="mt-1.5">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={handleInput}
                      required
                      className="block w-full rounded-md border-stone-200 bg-stone-50/50 py-2.5 px-3.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm transition-all outline-none"
                      placeholder="Enter your firstname"
                    />
                  </div>
                </div>

                {/* lastname */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Last Name
                  </label>
                  <div className="mt-1.5">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={handleInput}
                      required
                      className="block w-full rounded-md border-stone-200 bg-stone-50/50 py-2.5 px-3.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm transition-all outline-none"
                      placeholder="Enter your lastname"
                    />
                  </div>
                </div>

                {/* age */}
                <div>
                  <label
                    htmlFor="age"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Age
                  </label>
                  <div className="mt-1.5">
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="1"
                      max="120"
                      onChange={handleInput}
                      required
                      className="block w-full rounded-md border-stone-200 bg-stone-50/50 py-2.5 px-3.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm transition-all outline-none"
                      placeholder="Enter your age"
                    />
                  </div>
                </div>

                {/* gender */}
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Gender
                  </label>
                  <div className="mt-1.5">
                    <select
                      id="gender"
                      name="gender"
                      onChange={handleInput}
                      required
                      defaultValue={""}
                      className="block w-full rounded-md border-stone-200 bg-stone-50/50 py-2.5 px-3.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm transition-all outline-none appearance-none"
                    >
                      <option value="" disabled className="text-stone-400">
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* email address */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleInput}
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-stone-200 bg-stone-50/50 py-2.5 px-3.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm transition-all outline-none"
                      placeholder="youremail@example.com"
                    />
                  </div>
                </div>

                {/* phone number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      onChange={handleInput}
                      required
                      className="block w-full rounded-md border-stone-200 bg-stone-50/50 py-2.5 px-3.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm transition-all outline-none"
                      placeholder="+81 000-000-0000"
                    />
                  </div>
                </div>

                {/* birthdate */}
                <div>
                  <label
                    htmlFor="birthDate"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Birth Date
                  </label>
                  <div className="mt-1.5">
                    <input
                      id="birthDate"
                      name="birthDate"
                      type="date"
                      onChange={handleInput}
                      required
                      className="block w-full rounded-md border-stone-200 bg-stone-50/50 py-2.5 px-3.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm transition-all outline-none"
                    />
                  </div>
                </div>

                {/* username */}
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
                      onChange={handleInput}
                      required
                      className="block w-full rounded-md border-stone-200 bg-stone-50/50 py-2.5 px-3.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm transition-all outline-none"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>

                {/* password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700"
                  >
                    Password
                  </label>
                  <div className="mt-1.5">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleInput}
                      required
                      className="block w-full rounded-md border-stone-200 bg-stone-50/50 py-2.5 px-3.5 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm transition-all outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-stone-900 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow hover:bg-stone-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-stone-900 active:scale-[0.99] transition-all mt-10 mb-10"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="hidden md:block text-xs text-stone-400 text-center mt-8">
            &copy; 2026 VeloStore. All rights reserved.
          </div>
        </div>

        <div className="hidden md:flex md:w-5/12 relative bg-stone-900">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
            alt="New Collection"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-900/30 to-transparent"></div>

          <div className="relative z-10 m-auto max-w-sm text-center p-6 text-white">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-4">
              Join The Club
            </span>
            <h3 className="text-2xl font-bold tracking-tight lg:text-3xl">
              Unlock Premium Shopping Perks
            </h3>
            <p className="mt-3 text-stone-300 text-sm leading-relaxed">
              By making an account today, you gain immediate tracking
              visibility, a localized 30-day return portal, and member points
              toward your next cart order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
