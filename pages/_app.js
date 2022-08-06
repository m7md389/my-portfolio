import { appWithTranslation } from "next-i18next";
import "normalize.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
