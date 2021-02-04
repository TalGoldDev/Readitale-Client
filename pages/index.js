import Head from "next/head";
import { BooksList } from "../components/BooksList";
import axios from "axios";

export default function Home(props) {
  return (
    <div className="pl-8 pr-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BooksList bookList={props.data}>List</BooksList>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const response = await axios.get(
    `https://readitale-api.herokuapp.com/api/get/stories`
  );

  const data = await response.data;
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { data },
  };
}
