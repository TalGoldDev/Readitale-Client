import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

const story = ({ data }) => {
  const router = useRouter();
  const { _id, author, score, summary, story } = data;

  return (
    <div className="m-8 h-auto max-w-screen-xl flex flex-col w-xl2 bg-white rounded">
      <div className="py-3 px-4">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <div>
            <h1 className="text-xl font-semibold">Written by {author}</h1>
          </div>
          <div className="text-blue-500 md:text-2xl p-1 border-2 border-blue-400">
            <a href="/"> 🔙 Return</a>
          </div>
        </div>
        <div className="border-b-2 pb-2">
          <p className="text-xl font-semibold mt-2">The Writing Prompt:</p>
          <p>{summary}</p>
        </div>
        <p className="text-base mt-3 text-left">{story}</p>
        <div className="flex justify-between items-center mt-3 pt-2 border-t-2">
          <div>
            <h1 className="text-xl font-semibold">Thanks for reading :) !</h1>
          </div>
          <div className="text-blue-500 md:text-2xl p-1 border-2 border-blue-400">
            <a href="/"> 🔙 Return</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  // Get external data from the file system, API, DB, etc.
  const response = await axios.get(
    `https://readitale-api.herokuapp.com/api/get/stories`
  );

  const data = await response.data;

  // Get the paths we want to pre-render based on posts
  const paths = data.map((story) => `/stories/${story._id}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Get external data from the file system, API, DB, etc.
  const response = await axios.post(
    `https://readitale-api.herokuapp.com/api/post/storybyid`,
    {
      params: { id: params.id },
    }
  );

  const data = await response.data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

export default story;
