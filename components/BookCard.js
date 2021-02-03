import React from "react";

export const BookCard = () => {
  return (
    <div className="flex space-x-4 border-b-2 pb-4 pt-4">
      <div className="h-auto w-auto">
        <img
          src="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
          className="rounded-lg object-contain h-auto w-auto sm:h-96"
        ></img>
      </div>
      <div className=" flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold	">Book Title</h1>
          <h1 className="text-2xl">Author</h1>
          <button className="bg-pink-300 rounded p-2 w-full text-white text-lg font-semibold shadow-md mt-8">
            Read Now!
          </button>
        </div>
        <div>
          <h1 className="text-lg pb-2">Likes: ⭐⭐⭐⭐⭐</h1>
        </div>
      </div>
    </div>
  );
};
