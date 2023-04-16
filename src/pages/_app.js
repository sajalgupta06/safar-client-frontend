import "@/styles/globals.scss";

import '@/styles/Footer.scss'
import '@/styles/Navbar.scss'
import '@/styles/Loader.scss'
import '@/styles/About.scss'
import '@/styles/Search.scss'
import '@/styles/Popular.scss'
import '@/styles/Offer.scss'
import '@/styles/Blog.scss'
import '@/styles/Login.scss'
import '@/styles/Results.scss'
import '@/styles/Trip.scss'
import '@/styles/Purchase.scss'
import '@/styles/Profile.scss'
import '@/styles/PhotoGallery.scss'
import '@/styles/Banner.scss'
import '@/styles/Tooltip.scss'
import '@/styles/Company.scss'
import '@/styles/Locations.scss'
import '@/styles/Collections.scss'
import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "@/components/reducer";
import { fetchUser } from "@/actions/req";
import { Loader } from "@/components/Loader/Loader";
import { ConfigProvider } from 'antd';

import Layout from "@/components/Layout";

export const MyContext = createContext();


export default function App({ Component, pageProps }) {

  let iState = {
    isAuthenticated:false,
    user:{}
  };

  const [data, dispatch] = useReducer(reducer,iState);
  const [loading ,setLoading] = useState(false)
const handleAuthentication = async() =>{

 
  try {
    setLoading(true)
    const res = await fetchUser()


    if(res.statusCode=="10000")
    {
      dispatch({
      type: "SET_AUTHENTICATE",
      payload: true,
    });
  
    dispatch({ type: "SET_USER", payload:  res.data.user });
  
    }
    else{
      dispatch({
        type: "SET_AUTHENTICATE",
        payload: false,
      });
    }

  } catch (error) {
      console.log(error)
  }
  
  setLoading(false)


}


useEffect(() => {

handleAuthentication()

}, []);

  return (
    <>
    
      <MyContext.Provider
      value={{
        isAuthenticated: data.isAuthenticated,
        user: data.user,
        setIsAuthenticated: dispatch,
        setFavouriteTrip: dispatch,
        setUser: dispatch,
      }}
    >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "hsl(26,93%,50%)",
            },
          }}
        >
     
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ConfigProvider>
      </MyContext.Provider>
    
   </>
  );
}

