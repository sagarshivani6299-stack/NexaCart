import { Outlet } from "react-router-dom";

import Sidebar from "../Components/Content/Sidebar";
import ContentNavbar from "../Components/Content/ContentNavbar";
import ContentFooter from "../Components/Content/Contentfooter";

const ContentLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">

      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <ContentNavbar />

        <main className="flex-1 p-5 md:p-8">
          <Outlet />
        </main>

        <ContentFooter />

      </div>

    </div>
  );
};

export default ContentLayout;