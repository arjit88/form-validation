import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* Ensure full height of screen */}
      <Header />
      <main className="flex-grow">
        {" "}
        {/* This will grow to fill the remaining space */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
