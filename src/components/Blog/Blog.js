import React, {useEffect} from 'react'
import homeBgImage from "../../static/images/homeBgImage.jpg"
import {BsArrowRightShort} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

export default function Blog() {


    useEffect(() => {
        AOS.init({duration:1000})
      }, [])
    


  return (
   <>
   <section className='blog container section'>
    <div className="secContainer">
        <div className="secIntro">
            <h2 data-aos = 'fade-up' className="secTitle">Our Best Blog</h2>
            <p data-aos = 'fade-up' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit exercitationem nemo aperiam, quam m</p>
        </div>

<div className="mainContainer flex">

    <div data-aos = 'fade-up' className="singlePost grid">
        <div className="imgDiv">
            <Image src={homeBgImage} alt = "Image Name"></Image>
        </div>
        <div className="postDetails">
            <h3 data-aos = 'fade-up' >Title</h3>
            <p data-aos = 'fade-up' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique autem asperiores molestias ipsa nihil</p>
        </div>

    <a data-aos = 'fade-up' href= "#" className='flex'>
        Read More
        <BsArrowRightShort className='icon'/>
        </a>

    </div>
</div>



    </div>
   </section>
   
   
   </>
  )
}
