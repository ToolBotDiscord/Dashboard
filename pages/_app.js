import Head from 'next/head';

const App = ({ Component, pageProps }) => {
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

export default App;