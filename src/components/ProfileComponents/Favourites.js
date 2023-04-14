import React, { useEffect, useState } from 'react'
import {
  MdAirportShuttle,
  MdBathtub,
  MdKingBed,
  MdLocationOn,
} from "react-icons/md";
import homeBgImage from '../../static/images/homeBgImage.jpg'
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { fetchMultipleTrips } from '@/actions/req';
import Link from 'next/link';
import { CompLoader } from '../Loader/CompLoader';
import DataNotFound from '../DataNotFound'
export default function Favourites(props) {

  const {tripsId} = props

  const [favouriteTrips,setFavouriteTrips] = useState([])
  const [loading,setLoading] = useState(false)



useEffect(() => {
  handleFavouriteTrips()
}, []);


const handleFavouriteTrips = async () => {
  setLoading(true)
  try {
    const res = await fetchMultipleTrips(tripsId);  
    console.log(res);
    if (res.statusCode == "10000") {
      setFavouriteTrips(res.data.trips);
      
    }
  } catch (error) {
    console.log(error);
  }
  setLoading(false)
};




  return (
    <>
    {loading==true?
    <CompLoader/>:
    <>
       {favouriteTrips.length==0 && <DataNotFound/>}
    <div className='favourites grid'>

   
   
    {favouriteTrips?.map((trip,key)=>{
                   return(
                 <div   className="singleDestination" key={key}>
                     <div className="destImage">
                    
                         <img src={homeBgImage.src} alt="Image Title" className="" />

                 {/* <div className="overlayInfo">
                     <h3>Some Text </h3>
                     <p>Lorem, ipsum dolor sit amet consectetur </p>
                     <BsArrowRightShort className='icon'/>

                 </div> */}

                     </div>

             <div className="destFooter">
                 <div className="name">{trip.name}</div>
                 <div className="destText flex">

                 <h6>{`Rs. ${trip?.priceSlots[0].basePrice}`}</h6>
                 
                 <Link href={`/trip/${trip._id}`}>
                 <BsArrowRightShort className='icon'/>
                 </Link>
                 {/* <span className="flex">
                     <span className="dot">
                         <BsDot className = "icon"></BsDot>
                     </span>
                     Dot
                 </span> */}

                 </div>
             </div>

                 </div>
                 )
             })}
              </div>
              </>
    }
 
</>
  )
}
