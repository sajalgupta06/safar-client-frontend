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
         
            <div className="tile">
              <img src="https://images.pexels.com/photos/4109248/pexels-photo-4109248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
              <p>Bike Trip</p>
            </div>

            <div className="tile">
              <img src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1600"></img>
              <p>Trekking</p>
            </div>

            <div className="tile">
              <img src="https://images.pexels.com/photos/5326943/pexels-photo-5326943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
              <p>Beach Trip</p>
            </div>

            <div className="tile">
              <img src="https://images.pexels.com/photos/8969049/pexels-photo-8969049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
              <p>Mountains Trip</p>
            </div>

            <div className="tile">
              <img src="https://images.pexels.com/photos/12955925/pexels-photo-12955925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
              <p>Family Trip</p>
            </div>

            <div className="tile">
              <img src="https://images.pexels.com/photos/2870167/pexels-photo-2870167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
              <p>Weekend Trip</p>
            </div>

            <div className="tile">
              <img src="https://images.pexels.com/photos/1583244/pexels-photo-1583244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
              <p>Religious Trip</p>
            </div>
         
            </Slider>
          </div>
        </div>

       
      </section>
    </>
  );
};
export default Collections;
