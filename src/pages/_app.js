import '@/styles/globals.css';
import Head from 'next/head'
import NavBar from '@/components/NavBar';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/react-card-slider.css';


export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/yb-icon.png" />
    </Head>
    <main className="font-primary w-full min-h-screen">
        <NavBar />
        <AnimatePresence mode='wait'>
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>    
        <Footer />  
         </main>
    </>
     );
}
