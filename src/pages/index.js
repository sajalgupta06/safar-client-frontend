import React, { useContext, useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import { FloatButton } from "antd";
import { fetchPopularTrips } from "@/actions/req";
import { MyContext } from "./_app";
import Banner from "@/components/Banner/Banner";
import banner1 from '../static/images/banner1.jpg'
import banner2 from '../static/images/banner2.jpg'
import Locations from "@/components/Locations/Locations";
import Collections from "@/components/Collections/Collections";



const Search = dynamic(() => import('@/components/Search/Search'))
const Popular = dynamic(() => import('@/components/Popular/Popular'))
const Offer = dynamic(() => import('@/components/Offer/Offer'))
const About = dynamic(() => import('@/components/About/About'))
const PhotoGallery = dynamic(() => import('@/components/PhotoGallery/PhotoGallery.js'))



export default function Index({ popularData }) {
  const context = useContext(MyContext);



  return (
    <>
      <Search />
      <Popular data={popularData} />
      <Collections/>
      <Banner image = {banner1}/>
      {/* <Offer data={popularData} /> */}
      <Locations/>
      <Banner image = {banner2}/>
      <About />
      {/* <PhotoGallery/> */}
      <>
      
      
      </>
      <FloatButton.BackTop />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetchPopularTrips();

  if (res.statusCode == "10000") {
    return {
      props: {
        popularData: res.data.trips,
      },
    };
  } else {
    return {
      props: {
        popularData: [],
      },
    };
  }
};
