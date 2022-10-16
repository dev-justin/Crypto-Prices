import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#8bd3dd" height={8} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
