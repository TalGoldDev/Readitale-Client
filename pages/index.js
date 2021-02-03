import Head from "next/head";
import { BooksList } from "../components/BooksList";

export default function Home() {
  return (
    <div className="pl-8 pr-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BooksList>List</BooksList>
      </main>
    </div>
  );
}
