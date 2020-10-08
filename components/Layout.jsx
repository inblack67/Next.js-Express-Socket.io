import Head from 'next/head';
import { Fragment } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Next.js | Socket.io</title>

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
        />

        <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
      </Head>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default Layout;
