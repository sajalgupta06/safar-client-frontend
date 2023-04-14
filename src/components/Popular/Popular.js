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

import { MyContext } from "@/pages/_app";
import { alerts } from "@/utils/alert";
import Link from "next/link";
import Image from "next/image";
import { BiRupee } from "react-icons/bi";

const Popular = (props) => {
  const { data } = props;

  const context = useContext(MyContext);

 


  const sliderRef = useRef();

  var settings = {
    dots: true,
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
          infinite: true,
          dots: true,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1 ,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   useEffect(() => {
  //  console.log(sliderRef)
  //   }, [sliderRef]);

  return (
    <>
    

      <section className="popular section container">
        <div className="secContainer ">
          <div className="secHeader flex">
            <div  className="textDiv">
              <h2 className="secTitle">Popular Destination</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                animi consequuntur cum aperiam autem. At beatae quas deserunt
                perferendis id vitae, cum et vero aperiam, iusto, dolorum sed
                omnis repellendus?
              </p>
            </div>
            <div  className="iconDiv flex">
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
              {data?.map((trip, key) => {
                return (
                  // <div className="singleDestination" key={key}>
                  //   <div className="destImage">
                  

                  //     <Image src={homeBgImage} alt="Image Title" className="" />

                  //     {/* <div className="overlayInfo">
                  //       <h3>Some Text </h3>
                  //       <p>Lorem, ipsum dolor sit amet consectetur </p>
                  //       <BsArrowRightShort className='icon'/>

                  //   </div> */}
                  //   </div>

                  //   <div className="destFooter">
                  //     <div className="name">{trip.name}</div>
                  //     <div className="destText flex">
                  //       <h6><BiRupee/> {`${trip.priceSlots[0].basePrice}`}</h6>

                  //       <Link href={`/trip/${trip._id}`}>
                  //         <BsArrowRightShort className="icon" />
                  //       </Link>
                  //       {/* <span className="flex">
                  //       <span className="dot">
                  //           <BsDot className = "icon"></BsDot>
                  //       </span>
                  //       Dot
                  //   </span> */}
                  //     </div>
                  //   </div>
                  // </div>


              <Link href={`/trip/${trip._id}`} key={key}>
              <div className="cards">
                <div className="card-item">
                  <div className="card-image">
                    <img src={homeBgImage.src}></img>
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">{trip.name}</h2>
                    <p className="card-intro">starting at <span>
                    <BiRupee className="icon"/> {trip.finalPrice}
                      </span> per person </p>
                  </div>
                </div>
              </div>
              </Link>

                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default Popular;
