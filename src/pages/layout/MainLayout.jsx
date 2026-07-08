import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MainLayout({ qty }) {
  return (
    <>
      <Navbar qty={qty} />
      {/* Optional wrapper to prevent content from hiding behind your fixed navbar */}
      <main className="pt-16"> 
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}