import "tailwindcss/tailwind.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-purple-300 min-h-screen items-center">
      <div className="max-w-screen-xl m-auto">
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default MyApp;
