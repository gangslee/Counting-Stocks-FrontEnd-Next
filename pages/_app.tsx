import type { AppProps } from "next/app";
import Header from "../components/containers/Header";
import GlobalStyle from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
