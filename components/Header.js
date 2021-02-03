import React from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="p-8 md:flex justify-between items-center">
      <div className="hidden md:flex">
        <h1 className="text-6xl">Readitale</h1>
      </div>
      <Navbar></Navbar>
    </div>
  );
};
