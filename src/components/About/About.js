import React ,{useEffect}from 'react'

import homeBgImage from "../../static/images/homeBgImage.jpg"
import hiking from "../../static/images/hiking.jpg"
import customerSupport from "../../static/images/customerSupport.jpg"
import suitcase from "../../static/images/suitcase.jpg"
import aboutVideo from '../../static/video/video.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

const About = () =>{



    return(
       <>
       <section className="about section" id='about'>
        <div className="secContainer">
            <h2 className="title">
                Why Safar ?
            </h2>
            <div className="mainContent container grid">
                <div   className="singleItem">
                    <Image src={suitcase} alt="Image Name" className="" />
                <h3>33+ Trips</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illo eveniet explicabo tenetur amet fugit labore officia, omnis sequi nam, </p>
                </div>
                <div   className="singleItem">
                    <Image src={hiking} alt="Image Name" className="" />
                <h3>100+ Destinations</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illo eveniet explicabo tenetur amet fugit labore officia, omnis sequi nam, </p>
                </div>

                <div   className="singleItem">
                    <Image src={customerSupport} alt="Image Name" className="" />
                <h3>Customer Support</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illo eveniet explicabo tenetur amet fugit labore officia, omnis sequi nam, </p>
                </div>
            </div>


            <div className=' videoCard container' 
            
            
            >
            <div className='cardContent grid'>
            <div className='cardText'>
                <h2>Wonderful Experience in there !</h2>
                <p>

            The Adventure subranking is based on an equally weighted
            average of scores from five country.

                </p>
            </div>

            <div className='cardVideo'>
            <video src={aboutVideo} autoPlay loop muted 
            ></video>
            {/* <ReactPlayer url={video} /> */}

            </div>

                </div>
            </div>
          
        </div>
       </section>
       
       
       
       </>
    )
}
export default About;