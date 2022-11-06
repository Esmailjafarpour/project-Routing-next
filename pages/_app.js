import '../styles/globals.css';
import Layout from '../components/layout/layout.jsx';

function MyApp({ Component, pageProps }) {

  const proxy = require("node-global-proxy").default;

  proxy.setConfig({
    http: "http://localhost:9090",
    https: "https://localhost:9091",
  });
  proxy.start();

  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
 
}

export default MyApp
