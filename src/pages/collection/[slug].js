import Image from "next/image";
import React from "react";
import img from "../../static/images/bike-collection.avif";
import Link from "next/link";
import { fetchSingleCollection, fetchTripsByCollection } from "@/actions/req";
import { APP_NAME } from "../../../config";
import placeHolderImage from '../../static/images/placeholder-image.png'
import homeBgImage from "../../static/images/homeBgImage.jpg";
import { BiRupee } from "react-icons/bi";

export default function index({ data ,collection}) {

  console.log("trips",data)
  console.log("Collection",collection)

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
                <Link href={`/trip/${trip.slug}`} key={key}>
                  <div className="cards">
                    <div className="card-item">
                      <div className="card-image">
                        <Image
                          // src={trip?.photos.length>0 && trip.photos[0].src}
                          src={homeBgImage}
                          alt={placeHolderImage}
                          blurDataURL={placeHolderImage.src}
                        ></Image>
                      </div>
                      <div className="card-info">
                        <h2 className="card-title">{trip.name}</h2>
                        <p className="card-intro">
                          starting at{" "}
                          <span>
                            <BiRupee className="icon" /> {trip.finalPrice}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
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
