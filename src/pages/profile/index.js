import {  fetchUser } from "@/actions/req";
import React, {  useEffect, useState } from 'react'
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from 'antd'
import dynamic from "next/dynamic";


const Account = dynamic(() => import('@/components/ProfileComponents/Account'))
const Bookings = dynamic(() => import('@/components/ProfileComponents/Bookings'))
const Favourites = dynamic(() => import('@/components/ProfileComponents/Favourites'))
const Notifications = dynamic(() => import('@/components/ProfileComponents/Notifications'))
const Policy = dynamic(() => import('@/components/ProfileComponents/Policy'))



export default function index() {

  useEffect(() => {
    getUser()
  }, []);

  const [tabs, setTabs] = useState("Account");
  const [tripsId, setTripsId] = useState([]);
  const [user, setUser] = useState();



  const handleTabChange = (name) => {
    setTabs(name);
  };


  const getUser = async()=>{
    
 
    try {
      const res = await fetchUser() 
      if (res.statusCode == "10000") {
        setUser(res.data.user);
        setTripsId(res.data.user.favouriteTrips)
      
      }
    } catch (error) {
      console.log(error);
    }

  }



  return (
    <>
     <section className='profile section'>
     

     
    <div className='profileContainer'>
        <div className='profileContainer-left'>
        <div className='profileContainer-left-top'>
        <Avatar className="avatar" size={100} icon={<UserOutlined />} />
        </div>

        <div className='profileContainer-left-middle'>
            <ul>
                <li className={tabs=="Account"?"active":""} onClick={()=>handleTabChange("Account")}>Account</li>
                <li className={tabs=="My Bookings"?"active":""} onClick={()=>handleTabChange("My Bookings")}>My Bookings</li>
                <li className={tabs=="Favourites"?"active":""} onClick={()=>handleTabChange("Favourites")}>Favourites</li>
                <li className={tabs=="Notifications"?"active":""} onClick={()=>handleTabChange("Notifications")}>Notifications</li>
                <li className={tabs=="Privacy Policy"?"active":""} onClick={()=>handleTabChange("Privacy Policy")}>Privacy Policy</li>
            </ul>
        </div>
        </div>
        <div className='profileContainer-right'>

        <div className='profileContainer-right-top'>{tabs}</div><hr></hr>
        <div className='profileContainer-right-middle'>
            {tabs=="Account" && <Account user={user}/>}
            {tabs=="My Bookings" && <Bookings />}
            {tabs=="Favourites" && <Favourites  
            tripsId = {tripsId} 
            />}
            {tabs=="Notifications" && <Notifications/>}
            {tabs=="Privacy Policy" && <Policy/>}
        </div>
        {/* <div className='profileContainer-right-bottom'></div> */}
        </div>
    </div>
    
   
    </section>
  
    </>
  )
}

