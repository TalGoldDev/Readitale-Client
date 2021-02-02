import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/Searchbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SearchBar></SearchBar>
      <Component {...pageProps} />
      <NavBar></NavBar>
    </>
  );
}

export default MyApp;
