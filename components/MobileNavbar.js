import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const MobileNavbar = () => {
  const { height, width } = useWindowDimensions();

  if (width < 640) {
    return (
      <div className="fixed bottom-7 w-11/12 self-center ">
        <div className="font-semibold text-md flex justify-evenly p-1 bg-white rounded-full shadow-2xl border-2 border-gray-200">
          <div className="flex flex-col items-center">
            <p>🧭</p>
            <a>Explore</a>
          </div>
          <div className="flex flex-col items-center">
            <p>📖</p>
            <a>Read</a>
          </div>
          <div className="flex flex-col items-center">
            <p>💻</p>
            <a>Profile</a>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
