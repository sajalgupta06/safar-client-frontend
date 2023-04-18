import React, { Suspense, useEffect } from 'react'
import {useState} from "react";
import  { useRouter } from "next/router";
import { Loader } from './Loader/Loader';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {

    const [loading ,setLoading] = useState(false)
    const router = useRouter()

   

 

// useEffect(() => {
//     const handleStart = (url) => (url !== router.asPath) && setLoading(true);
//     const handleComplete = (url) => (url === router.asPath) && setLoading(false);

//     router.events.on('routeChangeStart', handleStart)
//     router.events.on('routeChangeComplete', handleComplete)
//     router.events.on('routeChangeError', handleComplete)

//     router.events.on('routeChangeStart',   NProgress.start())
//     router.events.on('routeChangeComplete', NProgress.done())
//     router.events.on('routeChangeError',  NProgress.done())

//     return () => {
//         router.events.off('routeChangeStart', handleStart)
//         router.events.off('routeChangeComplete', handleComplete)
//         router.events.off('routeChangeError', handleComplete)

 
//     }
// })

    // <Header />
    return (
        <React.Fragment>

       <Navbar></Navbar>

        {/* {loading && <Loader></Loader>} */}
        
            <Suspense > 

            {children}
            </Suspense>
           <Footer></Footer>
        </React.Fragment>
    );
};

export default Layout;















