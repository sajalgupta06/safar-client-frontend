import React, {useEffect, useState} from "react";
import homeBgImage from "../../static/images/homeBgImage.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRouter } from "next/router";
import bn6 from '../../static/images/bn6.jpg'

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


  return (
    <>
      <section className="search"
   style = {{
    // backgroundImage: `url(https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
    backgroundImage: `url(${bn6.src})`
   
}}
      >
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
