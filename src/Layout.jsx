import React from "react";
import { Navigation } from "./components/navigation/Navigation.jsx";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
