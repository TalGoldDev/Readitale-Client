import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div className="absolute flex items-center">
        <label className="relative left-10">Search for a story!</label>
        <input className="h-8 w-full rounded-xl border border-transparent focus:outline-none focus:ring focus:border-blue-300 p-3"></input>
      </div>
    </div>
  );
};
