import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { type AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { api } from "~/utils/api";

import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Emojer</title>
        <meta name="description" content="☁" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
      <Analytics />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
