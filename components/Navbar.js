import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div className="relative flex items-center">
        <input
          className="h-12 w-full rounded-xl border border-transparent focus:outline-none focus:ring focus:border-blue-300 p-3"
          placeholder="🔍 Search for a story! "
          type="search"
          name="serch"
        ></input>
      </div>
    </div>
  );
};

//class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
