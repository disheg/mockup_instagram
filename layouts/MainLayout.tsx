import React from "react";
import Navigation from "../components/User/Navigation";
const MainLayout = ({ children }) => {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
};

export default MainLayout;
