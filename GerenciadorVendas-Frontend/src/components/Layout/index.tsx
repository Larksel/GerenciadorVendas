import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className='flex flex-col text-text bg-neutral-100 h-screen w-screen overflow-y-auto overflow-x-clip'>
      <Header />

      <main className="flex-1 h-full w-full *:w-full *:h-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}