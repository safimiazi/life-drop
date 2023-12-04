import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav/Nav";

const MainLayout = () => {
  return (
    <div className="">
      <Nav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
