import Head from 'next/head';
import { Fragment } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Realtime Chat In Next.js Via Socket.io'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='keywords'
          content='Next.js, Realtime, Socket.io, Chat, SSR, React.JS, JavaScript, Node.JS, Express, SEO, PWA, Backend, Frontent, Full-Stack, Website, inblack67, Aman Bhardwaj'
        />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='author' content='Aman Bhardwaj' />

        <link rel='manifest' href='./manifest.json' />

        <link rel='icon' href='./icons/slack.svg' />

        <link
          rel='apple-touch-icon-precomposed'
          sizes='57x57'
          href='./icons/favicomatic/apple-touch-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='114x114'
          href='./icons/favicomatic/apple-touch-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='72x72'
          href='./icons/favicomatic/apple-touch-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='144x144'
          href='./icons/favicomatic/apple-touch-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='60x60'
          href='./icons/favicomatic/apple-touch-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='120x120'
          href='./icons/favicomatic/apple-touch-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='76x76'
          href='./icons/favicomatic/apple-touch-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='152x152'
          href='./icons/favicomatic/apple-touch-icon-152x152.png'
        />
        <link
          rel='icon'
          type='image/png'
          href='./icons/favicomatic/favicon-196x196.png'
          sizes='196x196'
        />
        <link
          rel='icon'
          type='image/png'
          href='./icons/favicomatic/favicon-96x96.png'
          sizes='96x96'
        />
        <link
          rel='icon'
          type='image/png'
          href='./icons/favicomatic/favicon-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='./icons/favicomatic/favicon-16x16.png'
          sizes='16x16'
        />
        <link
          rel='icon'
          type='image/png'
          href='./icons/favicomatic/favicon-128.png'
          sizes='128x128'
        />

        <title>Next.js | Socket.io</title>

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
        />

        <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>

        <link
          href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          rel='stylesheet'
          integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css'
        />
      </Head>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default Layout;
