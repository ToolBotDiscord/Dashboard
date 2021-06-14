import '../styles/globals.css'
import Head from 'next/head';

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>ToolBot</title>
        <meta name="title" content="ToolBot" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
