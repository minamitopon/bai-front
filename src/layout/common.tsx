import { Outlet } from "react-router";

const CommonLayout = () => {
  return (
    <div>
      <div className="header">Header</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default CommonLayout;