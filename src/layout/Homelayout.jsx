import {
  Outlet,
} from "react-router-dom";

import HomeNavbar from "../Components/home/HomeNavbar";
import HomeFooter from "../Components/home/HomeFooter";

const HomeLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">

      <HomeNavbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <HomeFooter />

    </div>
  );
};

export default HomeLayout;