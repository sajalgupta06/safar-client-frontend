import React, { useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "next/link"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Image from "next/image";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { Rate } from "antd";

export default function Company() {

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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
  <>
  <div className="company section">
  <div className="com_section">
      <div className="com_frame">
        <div className="com_frame-side">
          <div className="com_frame-side-imgBox">
            <img src="https://images.unsplash.com/photo-1636374934784-e37ac0d98983?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </div>
          <div className="com_frame-side-name">
            <p>A&T Group</p>
          </div>

          <div className="com_frame-side-star">
            <Rate defaultValue={4}></Rate>
          </div>
          <div className="com_frame-side-about">
            <h3>Who we are ?</h3>
            <p>
              We are the best in className travel buddies. we have the exposure and
              all the toys that you need to play with. Come and join us in the
              immense world of travelling
            </p>
          </div>
          <div className="com_frame-side-contact">
            <h3>Get in touch</h3>
            <AiOutlineMobile></AiOutlineMobile> <h4>Mobile :</h4>{" "}
            <p>+919977859801</p>
            <br />
            <AiOutlineMail />
            <h4> Email : </h4> <p>guptasajal6@gmail.com</p>
          </div>
          <div className="com_frame-side-social">
            <AiOutlineInstagram
              className="s_icons instagram"
              size="25px"
              fill="#cc2366"
            >
              {" "}
            </AiOutlineInstagram>
            <AiOutlineFacebook
              className="s_icons facebook"
              size="25px"
              fill="#3B5998"
            ></AiOutlineFacebook>
            <AiOutlineTwitter
              className="s_icons twitter"
              size="25px"
              fill="#1da1f2"
            ></AiOutlineTwitter>
          </div>
        </div>
        <div className="com_frame-center">
          <div className="com_frame-center-top">
          <div className="com_frame-center-top-heading">
            <h2>Previous Trips</h2>
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
            <div className="sec_content" style={{margin:"0"}}>
          

              <Slider {...settings} ref={sliderRef} className="slider"> 
          
               
                  <div className="singleDestination" >
                    <div className="destImage">
                  

                      <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image Title" className="" />

                    </div>

                    <div className="destFooter">
                      <div className="name">{"Indroe Trip"}</div>
                      <div className="destText flex">
                        <h6><BiRupee/> {`12000`}</h6>

                       
                          <BsArrowRightShort className="icon" />
                      
                     
                      </div>
                    </div>
                  </div>


                  <div className="singleDestination" >
                    <div className="destImage">
                  

                      <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image Title" className="" />

                    </div>

                    <div className="destFooter">
                      <div className="name">{"Indroe Trip"}</div>
                      <div className="destText flex">
                        <h6><BiRupee/> {`12000`}</h6>

                       
                          <BsArrowRightShort className="icon" />
                      
                     
                      </div>
                    </div>
                  </div>

                  <div className="singleDestination" >
                    <div className="destImage">
                  

                      <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image Title" className="" />

                    </div>

                    <div className="destFooter">
                      <div className="name">{"Indroe Trip"}</div>
                      <div className="destText flex">
                        <h6><BiRupee/> {`12000`}</h6>

                       
                          <BsArrowRightShort className="icon" />
                      
                     
                      </div>
                    </div>
                  </div>



                  <div className="singleDestination" >
                    <div className="destImage">
                  

                      <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image Title" className="" />

                    </div>

                    <div className="destFooter">
                      <div className="name">{"Indroe Trip"}</div>
                      <div className="destText flex">
                        <h6><BiRupee/> {`12000`}</h6>

                       
                          <BsArrowRightShort className="icon" />
                      
                     
                      </div>
                    </div>
                  </div>



                  <div className="singleDestination" >
                    <div className="destImage">
                  

                      <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Image Title" className="" />

                    </div>

                    <div className="destFooter">
                      <div className="name">{"Indroe Trip"}</div>
                      <div className="destText flex">
                        <h6><BiRupee/> {`12000`}</h6>

                       
                          <BsArrowRightShort className="icon" />
                      
                     
                      </div>
                    </div>
                  </div>
                
            
            </Slider>

              <div className="cards">
              
                  <div className="card-item">
                    <div className="card-image">
                      <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                    </div>
                    <div className="card-info">
                      <h2 className="card-title">Hip-Hop Himachal</h2>
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
                      <h2 className="card-title">Go Goa Gone !</h2>
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
                      <h2 className="card-title">Relax ! it's Sikkim</h2>
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
                      <h2 className="card-title">Rajasthani Safari</h2>
                      <p className="card-intro"></p>
                    </div>
                  </div>
             
              </div>



            </div>
          </div>
          <div className="com_frame-center-bottom">
            <h2>Photo Gallery</h2>

            <div id="gallery">
              <div>
                <img src="https://picsum.photos/600/600/?image=512" />
                <a href="#lightbox-1">512</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=513" />
                <a href="#lightbox-2">513</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=514" />
                <a href="#lightbox-3">514</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=515" />
                <a href="#lightbox-4">515</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=516" />
                <a href="#lightbox-5">516</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=517" />
                <a href="#lightbox-6">517</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=518" />
                <a href="#lightbox-7">518</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=519" />
                <a href="#lightbox-8">519</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=520" />
                <a href="#lightbox-9">520</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=521" />
                <a href="#lightbox-10">521</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=522" />
                <a href="#lightbox-11">522</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=523" />
                <a href="#lightbox-12">523</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=524" />
                <a href="#lightbox-13">524</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=525" />
                <a href="#lightbox-14">525</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=526" />
                <a href="#lightbox-15">526</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=527" />
                <a href="#lightbox-16">527</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=528" />
                <a href="#lightbox-17">528</a>
              </div>
              <div>
                <img src="https://picsum.photos/600/600/?image=529" />
                <a href="#lightbox-18">529</a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-1">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=512" />
                <div className="title">
                  No. <b>512</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-2">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=513" />
                <div className="title">
                  No. <b>513</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-3">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=514" />
                <div className="title">
                  No. <b>514</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-4">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=515" />
                <div className="title">
                  No. <b>515</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-5">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=516" />
                <div className="title">
                  No. <b>516</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-6">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=517" />
                <div className="title">
                  No. <b>517</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-7">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=518" />
                <div className="title">
                  No. <b>518</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-8">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=519" />
                <div className="title">
                  No. <b>519</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-9">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=520" />
                <div className="title">
                  No. <b>520</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-10">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=521" />
                <div className="title">
                  No. <b>521</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-11">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=522" />
                <div className="title">
                  No. <b>522</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-12">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=523" />
                <div className="title">
                  No. <b>523</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-13">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=524" />
                <div className="title">
                  No. <b>524</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-14">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=525" />
                <div className="title">
                  No. <b>525</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-15">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=526" />
                <div className="title">
                  No. <b>526</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-16">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=527" />
                <div className="title">
                  No. <b>527</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-17">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=528" />
                <div className="title">
                  No. <b>528</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
            <div className="lightbox" id="lightbox-18">
              <div className="content">
                <img src="https://picsum.photos/1920/1080/?image=529" />
                <div className="title">
                  No. <b>529</b> from Picsum
                </div>
                <a className="close" href="#gallery"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
    
  </>
  );
}