import React, { useContext, useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import { FloatButton } from "antd";
import { fetchAllCollections, fetchPopularTrips, fetchTrendingLocations } from "@/actions/req";
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



export default function Index({ popularData,collections,locations }) {
  const context = useContext(MyContext);


  return (
    <>
      <Search />
      <Popular data={popularData} />
      <Collections data = {collections}/>
      {/* <Banner image = {banner1}/> */}
      {/* <Offer data={popularData} /> */}
      <Locations data= {locations}/>
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
  const popularDataRes = await fetchPopularTrips();
  const collectionsRes = await fetchAllCollections();
  const locationsRes = await fetchTrendingLocations();

  let popularData = []
  let collections = []
  let locations = []

  if(popularDataRes.statusCode == "10000")
  {
    popularData= popularDataRes.data.trips

  }

  if(collectionsRes.statusCode == "10000")
  {
    collections= collectionsRes.data
  }

  if(locationsRes.statusCode == "10000")
  {
    locations= locationsRes.data

  }

  return {
    props: {
      popularData,
      collections,
      locations
    },
  };
  

};
