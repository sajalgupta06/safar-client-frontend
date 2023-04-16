import React, { useContext, useEffect, useState } from "react";

import { FloatButton } from "antd";
import Search from "@/components/Search/Search";
import Popular from "@/components/Popular/Popular";
import Offer from "@/components/Offer/Offer";
import About from "@/components/About/About";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery.js";
import { fetchPopularTrips, fetchUser } from "@/actions/req";
import { MyContext } from "./_app";
import Banner from "@/components/Banner/Banner";
import banner1 from '../static/images/banner1.jpg'
import banner2 from '../static/images/banner2.jpg'
import Locations from "@/components/Locations/Locations";
import Collections from "@/components/Collections/Collections";
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
