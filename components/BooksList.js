import React from "react";
import { BookCard } from "./BookCard";

export const BooksList = (props) => {
  const bookCards = [];
  props.bookList.map((item, index) => {
    bookCards.push(
      <BookCard
        key={index}
        author={item.author}
        summary={item.summary}
        score={item.score}
        story={item.story}
        index={index}
        storyId={item._id}
      ></BookCard>
    );
  });

  return (
    <div className="border-2 border-gray-500 border-opacity-50 rounded-2xl">
      <div className="bg-white w-auto rounded-2xl shadow-2xl p-4 h-auto space-y-4">
        <h1 className="mb-4 text-4xl">Just released</h1>
        {bookCards.reverse()}
      </div>
    </div>
  );
};
