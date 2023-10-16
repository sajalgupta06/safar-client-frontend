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

const Collections = (props) => {
  const { data } = props;

  const sliderRef = useRef();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 3,
         
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 3,
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint:390,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint:350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  //   useEffect(() => {
  //  console.log(sliderRef)
  //   }, [sliderRef]);

  return (
    <>
      <section className="collections section container">
        <div className="secContainer   ">
          <div className="secHeader flex">
            <div className="textDiv">
              <h2 className="secTitle">Choose What You Love !</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                animi consequuntur cum aperiam autem. At beatae quas deserunt
                perferendis id vitae, cum et vero aperiam, iusto, dolorum sed
                omnis repellendus?
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

          <div className="mainContent  ">
            <Slider {...settings} ref={sliderRef}>
            {data && data?.map((coll,i)=>{
              return (
                <Link key={i} href={`/collection/${coll.slug}`} className="tile">
                <img src={coll.photo}></img>
                <p>{coll.name}</p>
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
export default Collections;
