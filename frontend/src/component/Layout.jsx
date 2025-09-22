
import { Outlet } from "react-router-dom";
import Navbar from "./templateModule/Navbar";
import Footer from "./templateModule/Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar/>
      <main className="flex-grow mt-16"> 
        <Outlet /> 
      </main>
      <Footer/>
      
    </div>
  );
}
