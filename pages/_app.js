import Script from 'next/script';
import { AuthContextProvider } from '../context/auth-context';
import Nav from '../components/Nav';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/js/uikit.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/js/uikit-icons.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></Script>
      <AuthContextProvider>
        <Nav />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}
