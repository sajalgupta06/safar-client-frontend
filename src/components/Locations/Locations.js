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

          <div className="mainContent ">
            {/* <div className=""> */}
            <Slider {...settings} ref={sliderRef}>
              <div className="cards">
                <div className="card-item">
                  <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">Himachal</h2>
                    <p className="card-intro"></p>
                  </div>
                </div>
              </div>

              <div className="cards">
                <div className="card-item">
                  <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">Goa</h2>
                    <p className="card-intro"></p>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="card-item">
                  <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2lra2ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">Sikkim</h2>
                    <p className="card-intro"></p>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="card-item">
                  <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFqYXN0aGFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">Rajasthan</h2>
                    <p className="card-intro"></p>
                  </div>
                </div>
              </div>


              <div className="cards">
                <div className="card-item">
                  <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">Himachal</h2>
                    <p className="card-intro"></p>
                  </div>
                </div>
              </div>

              <div className="cards">
                <div className="card-item">
                  <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">Goa</h2>
                    <p className="card-intro"></p>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="card-item">
                  <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2lra2ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">Sikkim</h2>
                    <p className="card-intro"></p>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="card-item">
                  <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFqYXN0aGFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">Rajasthan</h2>
                    <p className="card-intro"></p>
                  </div>
                </div>
              </div>

           
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default Locations;
