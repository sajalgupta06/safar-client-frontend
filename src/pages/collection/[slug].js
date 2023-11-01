import Image from "next/image";
import React from "react";
import img from "../../static/images/bike-collection.avif";
import Link from "next/link";
import { fetchSingleCollection, fetchTripsByCollection } from "@/actions/req";
import { APP_NAME } from "../../../config";
import placeHolderImage from '../../static/images/placeholder-image.png'
import homeBgImage from "../../static/images/homeBgImage.jpg";
import { BiRupee } from "react-icons/bi";
import TripCard from "@/components/Card/TripCard";

export default function index({ data ,collection}) {


  return (
    <section className=" collection section">
      <img
        className="banner"
        src={collection?.photo}
        alt={`${collection.name} Collections | ${APP_NAME} `}
        // placeholder="blur"
      loading="lazy"
  
      ></img>
      <div className="textBox">
        <p>{collection.name}</p>
      </div>

      <div className="tripsContainer">
        <div className="trips">
          <div className="mainContent grid">
            {data?.map((trip, key) => {
              return (
                <TripCard key= {key} trip = {trip}/>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const collection = await fetchSingleCollection(slug);
  const res = await fetchTripsByCollection(slug);
  if (res.statusCode == "10000" &&  collection.statusCode == "10000" ) {
    return {
      props: {
        data: res.data.trips,
        collection:collection.data
      },
    };
  } else {
    return {
      props: {
        data: [],
        collection:{}
      },
    };
  }
};
