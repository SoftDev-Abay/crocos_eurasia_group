import type { AppProps } from "next/app";
import "../styles/global.scss";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AppCacheProvider {...pageProps}>
      <NextIntlClientProvider
        locale={router.locale}
        // timeZone="Europe/Vienna"
        messages={pageProps.messages}
      >
        <Component {...pageProps} />
      </NextIntlClientProvider>
    </AppCacheProvider>
  );
}
