import React from "react";
import { Outlet } from "react-router";

const RootLayout: React.FC = () => {
  return (
    <>
      <div className="flex justify-center h-screen w-full p-12">
        <div className="max-w-7xl w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
