import React from "react";
import { BookCard } from "./BookCard";

export const BooksList = (props) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 h-auto border-2 border-gray-300 space-y-4">
      <h1 className="mb-4 text-4xl">Just released</h1>
      {props.bookList.map((item) => {
        return (
          <BookCard
            author={item.author}
            summary={item.summary}
            score={item.score}
            story={item.story}
          ></BookCard>
        );
      })}
      {/* <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard> */}
    </div>
  );
};
