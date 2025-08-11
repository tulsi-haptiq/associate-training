import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="bg-black">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
