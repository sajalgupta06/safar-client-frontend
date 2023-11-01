import React, { useContext, useEffect, useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import { AiTwotoneHeart } from "react-icons/ai";
import homeBgImage from "../../static/images/homeBgImage.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  addToFavourite,
  fetchPopularTrips,
  removeFromFavourite,
} from "../../actions/req";

import { Loader } from "../Loader/Loader.js";
import { Button, Modal } from "antd";
import Link from "next/link";
import Image from "next/image";
import { BiRupee } from "react-icons/bi";
import { S3URL } from "../../../config";

const Locations = (props) => {
  const { data } = props;

  const sliderRef = useRef();


  var settings = {

    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2 ,
     
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2.5,
       
        },
      },
    ],
  };

  //   useEffect(() => {
  //  console.log(sliderRef)
  //   }, [sliderRef]);

  return (
    <>
      <section className="locations section container">
        <div className="secContainer ">
          <div className="secHeader flex">
            <div className="textDiv">
              <h2 className="secTitle">Top Locations</h2>
              <p>
              A Curated List of the Indai's Most Captivating Destinations
              </p>
            </div>
            <div className="iconDiv flex">
              <BsArrowLeftShort
                onClick={() => sliderRef.current.slickPrev()}
                className="icon leftIcon"
              />
              <BsArrowRightShort
                onClick={() => sliderRef.current.slickNext()}
                className="icon rightIcon"
              />
            </div>
          </div>

          <div className="mainContent ">
            {/* <div className=""> */}
            <Slider {...settings} ref={sliderRef}>

          {data?.map((location,i)=>{
            return (
             

              <Link href={`/trips?search=${location.slug}`} className="cards" key={i}>
              <div className="card-item">
                <div className="card-image">
                  <img src={`${S3URL}/${location.photo}`}></img>
                </div>
                <div className="card-info">
                  <h2 className="card-title">{location.name}</h2>
                  <p className="card-intro"></p>
                </div>
              </div>
            </Link>


            )
          })}

             
           
           
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default Locations;
