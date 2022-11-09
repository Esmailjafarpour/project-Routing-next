import Layout from '../components/layout.js/layout';
import '../styles/globals.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Company of programmers | All Events</title>
        <meta
          name='viewport'
          content="initial-scale=1.0,width=device-width" 
        />
        <meta name="description" content="Company of programmers | All Events"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
