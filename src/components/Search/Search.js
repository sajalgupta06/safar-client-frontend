import React, {useEffect, useState} from "react";
import homeBgImage from "../../static/images/homeBgImage.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from "next/router";
import bn6 from '../../static/images/bn6.jpg'
import { Carousel } from "antd";
import Image from "next/image";


const Search = () => {

useEffect(() => {
  AOS.init({duration:1000})
}, [])


const [search, setSearch] = useState("")

const router = useRouter();

  const handleSearch = (e)=>{

      if(search)
      {

       
        router.push(`/trips?search=${search}`)
          return
        
      }
  }


  const handleKeyPress = (e)=>{

    if(search)
    {

      if(e.key === 'Enter'){
        router.push(`/trips?search=${search}`);
        return
      }
    }
}

const contentStyle = {
  margin: 0,
  height: '70vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
  return (
    <>
      <section className="search"
   style = {{
    // backgroundImage: `url(https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
    // backgroundImage: `url(${bn6.src})`
   
}}
      >
 <Carousel dots={false} autoplay={true} infinite={true} autoplaySpeed={5000}  >
      <div className="image-container">
        <Image src={bn6} width={1000} height={80}/>
      </div>
      <div className="image-container">
        <Image src={"https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={1000} height={80}/>
      </div>
      <div className="image-container">
        <Image src={"https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={1000} height={80}/>
      </div>
   
    </Carousel>

        <div className="secContainer container">
          <div className="searchText">
            <h1 data-aos = 'fade-up' className="title">
            <span className="safar">Safar</span> without <span>suffer</span></h1>
            <p data-aos = 'fade-up' data-aos-duration = '1500' className="subTitle">Travel to your friends search</p>

            {/* <button  data-aos = 'fade-up' data-aos-duration = '30 00' className="btn">
              <a href="#">Explore Now</a>
            </button> */}
          </div>

          <div className="searchCard ">
            <div className="locationDiv">
              {/* <label htmlFor="location">Location</label> */}
              <input value={search} onKeyPress ={handleKeyPress} onChange = {(e)=>setSearch(e.target.value)} type="text" placeholder="Dream Destination" />
            </div>

            {/* <div className="distanceDiv">
              <label htmlFor="distance">Distance</label>
              <input type="text" placeholder="Enter Distance" />
            </div>
            <div className="priceDiv">
              <label htmlFor="price">Price</label>
              <input type="text" placeholder="INR 3000" />
            </div> */}

            
         
            <button className="btn" onClick={handleSearch}>Search</button>
           
          </div>
        </div>
      </section>
    </>
  );
};
export default Search;
