import Aos from "aos";
import { appWithTranslation } from "next-i18next";
import "normalize.css";
import { useEffect } from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
