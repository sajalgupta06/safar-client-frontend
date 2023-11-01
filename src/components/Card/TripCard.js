import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import homeBgImage from "../../static/images/homeBgImage.jpg";
import placeHolderImage from '../../static/images/placeholder_small.jpg'
import { BiRupee } from "react-icons/bi";

export default function TripCard({trip,key}) {
  return (
    <Link href={`/trip/${trip.slug}`} key={key}>
    <div className="card">
      <div className="card-item">
        <div className="card-image">
          <img src={trip.photos[0]} 
                alt={trip.name}
                onBlur={placeHolderImage}

          ></img>
        </div>
        <div className="card-info">
          <div className="card-info-collections">
            {trip?.collections?.map((coll,i)=>{
              return (
                <p  key={i}>{coll._id.name}</p>
              )
            })}
          </div>
          <h2 className="card-title">{trip.name}</h2>
          <p className="card-intro"><p>Starting at</p> <span>
          <BiRupee className="icon"/> {trip.finalPrice}
            </span> </p>
        </div>
      </div>
    </div>
    </Link>
  )
}
