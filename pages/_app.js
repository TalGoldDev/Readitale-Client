import "tailwindcss/tailwind.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-purple-300 min-h-screen h-auto items-center relative">
      <div className="flex flex-col max-w-screen-xl m-auto">
        <Header></Header>
        <Component {...pageProps} className="flex-grow" />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MyApp;
