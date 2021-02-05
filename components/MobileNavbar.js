import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const MobileNavbar = () => {
  const { height, width } = useWindowDimensions();
  let num = Math.floor(Math.random() * 5);
  const arrayPopularPosts = [
    "601793f83abb0600159dae8e",
    "601793f73abb0600159dae88",
    "601793f73abb0600159dae87",
    "601793f73abb0600159dae7b",
    "601793f73abb0600159dae6d",
  ];

  let explorePage = "/stories/" + arrayPopularPosts[num];

  if (width < 640) {
    return (
      <div className="fixed bottom-7 w-8/12 self-center ">
        <div className="border-r-2 font-semibold text-md flex justify-evenly p-1 bg-white rounded-full shadow-2xl border-2 border-gray-200">
          <a href={explorePage}>
            <div className="flex flex-col items-center">
              <p>🧭</p>
              <a>Explore</a>
            </div>
          </a>

          <a href="/">
            <div className="flex flex-col items-center">
              <p>💻</p>
              <a>Home</a>
            </div>
          </a>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
