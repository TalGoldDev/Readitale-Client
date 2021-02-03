import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const MobileNavbar = () => {
  const { height, width } = useWindowDimensions();

  if (width < 640) {
    return (
      <div className="">
        <div className="fixed bottom-5 right-6 shadow-2xl flex w-11/12 justify-evenly p-3 bg-white rounded-full">
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
