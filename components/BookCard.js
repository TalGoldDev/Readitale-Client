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

  const getImage = () => {
    //return "https://source.unsplash.com/random/560x890";
    //let num = Math.floor(Math.random() * 10);

    return `https://picsum.photos/id/${11 * props.index}/560/890`;
  };

  let starScore = calculateStarScore(props.score);

  return (
    <div className="flex w-fill space-x-4 border-b-2 pb-4">
      <div className="h-auto w-10/12 md:w-3/12">
        <img
          src={getImage()}
          className="rounded-lg object-contain h-auto w-auto sm:h-96"
        ></img>
      </div>
      <div className=" flex flex-col justify-between md:w-9/12 md:relative">
        <div>
          <p className="text-2xl font-semibold	">
            <span className="hidden md:inline-block">Writing</span> Prompt #
            {props.index}
          </p>
          {width < 640 ? (
            <div>
              <h2 className="relative text-2xl truncate w-32">
                By: {props.author}
              </h2>
              <Popup trigger={popUpSummary}>
                <div className="object-contain bg-white m-4 p-4 rounded w-fill h-1/2 shadow border-2 fixed top-0.5 bottom-0 left-0.5 md:relative">
                  <h1 className="overflow-hidden">{props.summary}</h1>
                </div>
              </Popup>
            </div>
          ) : (
            <div>
              <h2 className="relative text-2xl w-auto">By: {props.author}</h2>
              <h1 className="w-96 md:w-auto text-xl">{props.summary}</h1>
            </div>
          )}

          <Link href="/stories/[id]" as={`/stories/${props.storyId}`}>
            <button className="bg-indigo-400 rounded p-2 w-full text-white text-lg font-semibold shadow-md mt-8 md:absolute md:bottom-20 md:w-4/6">
              Read Now!
            </button>
          </Link>
        </div>
        <div>
          <p className="text-lg hidden md:flex">Likes: {props.score}</p>
          <p className="text-lg pb-2">Star Score: {starScore}</p>
        </div>
      </div>
    </div>
  );
};

const calculateStarScore = function (score) {
  let starScore = "";
  let currScore = score;
  let counter = 5;
  while (currScore > 0) {
    currScore -= 250;
    starScore += "⭐";
    counter--;
    if (counter == 0) break;
  }
  return starScore;
};
