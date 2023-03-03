import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";

function MyApp({ Component, pageProps }) {
  return (
   // <ThemeProvider attribute="class">
      <div>
      <Navbar />
      <PopupWidget />
      <Component {...pageProps} />
   </div>
  );
}

export default MyApp;
