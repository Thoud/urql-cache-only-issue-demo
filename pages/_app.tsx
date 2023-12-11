import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
    url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    exchanges: [cacheExchange, fetchExchange],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider value={client}>
            <Component {...pageProps} />;
        </Provider>
    );
}
