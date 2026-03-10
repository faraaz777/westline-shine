import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomBar from "./MobileBottomBar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20 pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Layout;
