import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
};
export default MyApp;
