import React, { useEffect } from "react";
import homeBgImage from "../../static/images/homeBgImage.jpg";
import {
  MdAirportShuttle,
  MdBathtub,
  MdKingBed,
  MdLocationOn,
} from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { Button, Rate } from "antd";
import { BiRupee } from "react-icons/bi";

const Offer = (props) => {


  const { data } = props;

  return (
    <>
      <section className="offer container section" id="offers">
        <div className="secContainer">
          <div  className="secIntro">
            <h2 className="secTitle">Special Offer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum repudiandae voluptatem itaque
            </p>
          </div>
          <div className="mainContent grid">
            {data?.map((trip, key) => {
              return (
            
                <div className="card" key={key}>
                <div className="card-image">
                  <img src="https://images.pexels.com/photos/13356439/pexels-photo-13356439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Holiday Package"/>
                  
                  <div className="card-offer-label">
                    <span>{`${trip?.discount}%`}</span>
                  </div>
                </div>
                <div className="card-heading">

                <h2>{trip.name}</h2>
                </div>
                <div className="card-content">
              
                  {/* <p className="card-subtitle">Destination Name</p> */}
                  <div className="card-pricing">
                    <span className="card-price-strike"><BiRupee/>20,000</span>
                    <span className="card-price"><BiRupee/>10,000</span>
                  </div>
              
                  <div className="card-buttons">
                  <Link href={`/trip/${trip._id}`}>

                    <Button type="primary" shape="circle" >{">"}</Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Offer;
