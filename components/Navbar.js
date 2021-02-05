import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div className="border-2 border-gray-500 border-opacity-30 rounded-2xl">
        <div className="relative flex items-center shadow-2xl">
          <input
            className="h-12 w-full rounded-xl border border-transparent focus:outline-none focus:ring focus:border-blue-300 p-3"
            placeholder="🔍 Search for a story! "
            type="search"
            name="serch"
          ></input>
        </div>
      </div>
    </div>
  );
};
