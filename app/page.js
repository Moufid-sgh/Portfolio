import Image from 'next/image';
import Head from 'next/head';
import Navbar from './component/Navbar';
import Contact from './component/Contact';

export default function Home() {


  return (
    <div className="bg-texture min-h-screen ">
      <Head>
      <meta charset="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sghiri Moufid" />
        <meta property="og:description" content="Portfolio_web developer" />
        {/* <meta property="og:image" content="./images/amico.png"  /> */}
        {/* <meta property="og:url" content="referme-client.herokuapp.com" /> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
        <meta name="application-name" content="referme-client.herokuapp.com"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* for twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Portfolio" />
        <meta name="twitter:title" content="Sghiri Moufid" />
        <meta name="twitter:description" content="Portfolio_web developer" />
        {/* <meta name="twitter:image:src" content="./images/amico.png"  />  */}
      </Head>

      <Navbar />
      <Contact />
      
      
    </div>
  )
}
