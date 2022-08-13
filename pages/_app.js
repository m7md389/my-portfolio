import { useEffect } from "react";
import Aos from "aos";
import { appWithTranslation } from "next-i18next";
import "normalize.css";
import "aos/dist/aos.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease",
      duration: 1800,
      once: true
    });
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
