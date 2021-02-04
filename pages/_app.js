import "tailwindcss/tailwind.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MobileNavbar } from "../components/MobileNavbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-indigo-100 min-h-screen h-auto items-center relative">
      <div className="flex flex-col max-w-screen-xl m-auto">
        <Header></Header>
        <Component {...pageProps} className="flex-grow" />
        <MobileNavbar></MobileNavbar>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MyApp;
