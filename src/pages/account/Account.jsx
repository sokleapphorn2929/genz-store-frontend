import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user-info");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!user) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center font-sans antialiased">
        <div className="flex items-center gap-3 text-stone-500 font-medium">
          <svg className="animate-spin h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Loading account configuration...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 font-sans antialiased text-stone-900 min-h-screen flex flex-col">

      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 lg:p-8 my-4 ">
        <div className="bg-white rounded-xl border border-stone-200/80 shadow-xs overflow-hidden md:grid md:grid-cols-3">
          
          <div className="p-6 bg-stone-900 text-white flex flex-col justify-between items-center text-center md:border-r md:border-stone-800">
            <div className="space-y-4 my-auto py-6">
              <div className="relative inline-block">
                <img
                  src={user.image || `https://api.dicebear.com/7.x/initials/svg?seed=${user.firstName || user.username}`}
                  alt="User Profile avatar"
                  className="w-24 h-24 rounded-full object-cover bg-stone-800 border-2 border-amber-500/40 p-1 mx-auto"
                />
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-stone-900 rounded-full"></span>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  {user.firstName ? `${user.firstName} ${user.lastName || ""}` : "Verified Member"}
                </h2>
                <p className="text-xs text-stone-400 font-mono mt-1">@{user.username}</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Premium Account
              </span>
            </div>

            <div className="w-full pt-4 border-t border-white/10 text-[11px] text-stone-400 uppercase tracking-widest font-medium hidden md:block">
              Client ID: #{user.id || "000"}
            </div>
          </div>

          <div className="p-6 md:p-8 md:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-bold tracking-tight">Personal Credentials</h3>
              <p className="text-xs text-stone-500 mt-0.5">Your profile parameters synchronization records securely linked to GenZStore ecosystem.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="sm:col-span-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-400">Email Address</span>
                <div className="mt-1.5 px-3.5 py-2.5 rounded-md border border-stone-200 bg-stone-50/50 text-sm font-medium text-stone-800">
                  {user.email || "N/A"}
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-400">Phone Contact</span>
                <div className="mt-1.5 px-3.5 py-2.5 rounded-md border border-stone-200 bg-stone-50/50 text-sm font-medium text-stone-800">
                  {user.phone || "No Record"}
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-400">Birth Date</span>
                <div className="mt-1.5 px-3.5 py-2.5 rounded-md border border-stone-200 bg-stone-50/50 text-sm font-medium text-stone-800">
                  {user.birthDate || "Not Configured"}
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-400">Age Bracket</span>
                <div className="mt-1.5 px-3.5 py-2.5 rounded-md border border-stone-200 bg-stone-50/50 text-sm font-medium text-stone-800 capitalize">
                  {user.age ? `${user.age} Years Old` : "N/A"}
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-400">Gender Identity</span>
                <div className="mt-1.5 px-3.5 py-2.5 rounded-md border border-stone-200 bg-stone-50/50 text-sm font-medium text-stone-800 capitalize">
                  {user.gender || "Unspecified"}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 bg-amber-50/60 border border-amber-200/60 rounded-lg p-3.5 text-xs text-amber-800">
              <svg className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <div>
                <span className="font-bold">Sandbox Environment:</span> You are logged in via standard <code className="bg-amber-100/80 px-1 rounded font-mono font-bold">dummyjson.com</code> mock interface tokens. Changes or modifications will not persist to live infrastructure servers.
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}