import React from "react";
import Link from "next/link";
import Popup from "reactjs-popup";
import useWindowDimensions from "../hooks/useWindowDimensions.js";
export const BookCard = (props) => {
  const { height, width } = useWindowDimensions();

  const popUpSummary = (
    <button className="bg-indigo-400 rounded p-2 w-full text-white text-lg font-semibold shadow-md mt-8">
      Summary
    </button>
  );

  return (
    <div className="flex w-fill space-x-4 border-b-2 pb-4">
      <div className="h-auto w-48 md:w-3/12">
        <img
          src="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
          className="rounded-lg object-contain h-auto w-auto sm:h-96"
        ></img>
      </div>
      <div className=" flex flex-col justify-between md:w-9/12 md:relative">
        <div>
          <h1 className="text-2xl font-semibold	">Book Title</h1>
          {width < 640 ? (
            <div>
              <h1 className="relative text-2xl truncate w-32">
                By: {props.author}
              </h1>
              <Popup trigger={popUpSummary}>
                <div className="object-contain bg-white m-4 p-4 rounded w-fill h-1/2 shadow border-2 fixed top-0.5 bottom-0 left-0.5 md:relative">
                  <p className="overflow-hidden">{props.summary}</p>
                </div>
              </Popup>
            </div>
          ) : (
            <div>
              <h1 className="relative text-2xl w-auto">By: {props.author}</h1>
              <p className="w-96 md:w-auto text-xl">{props.summary}</p>
            </div>
          )}

          <Link
            href="/stories/[id]"
            as={{
              pathname: `/stories/${props.index}`,
              query: { id: props.storyId },
            }}
          >
            <button className="bg-indigo-400 rounded p-2 w-full text-white text-lg font-semibold shadow-md mt-8 md:absolute md:bottom-20 md:w-4/6">
              Read Now!
            </button>
          </Link>
        </div>
        <div>
          <h1 className="text-lg pb-2">Likes: {props.score}</h1>
          <h1 className="text-lg pb-2">⭐⭐⭐⭐⭐</h1>
        </div>
      </div>
    </div>
  );
};
