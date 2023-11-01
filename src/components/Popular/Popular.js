import React, { useContext, useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MyContext } from "@/pages/_app"; 
import TripCard from "../Card/TripCard";

const Popular = (props) => {
  const { data } = props;

  const context = useContext(MyContext);

  console.log(data)

  const sliderRef = useRef();

  var settings = {

    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2.5,
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
        breakpoint: 545,
        settings: {
          slidesToShow: 2 ,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
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
              { data && data?.map((trip, key) => {
                return (
                    <TripCard key= {key} trip = {trip}/>

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
