import type { AppProps } from "next/app";
import "../styles/global.scss";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}
