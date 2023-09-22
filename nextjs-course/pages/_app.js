import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { SessionProvider, session } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={session}>
       <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  );
}

export default MyApp;
