import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}
