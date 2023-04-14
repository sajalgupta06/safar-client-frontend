import { Checkbox, Table } from 'antd';
import moment from 'moment'
import React, { useState } from 'react'

export default function Preview({ticketData , tripData ,acceptTerms,setAcceptTerms}) {

  console.log(tripData,ticketData)

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      default: "-",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      default: "-",
    },

    {
      title: "Mobile Number",
      dataIndex: "phone",
      key: "phone",
      default: "-",
    },

    {
      title: "Aadhar Card  Number",
      dataIndex: "adhr",
      key: "adhr",
      default: "-",
    },

  ];


  return (
   <>
   <div className='preview'>
    <div className='form'>

  
  <div className='item' key= "1">
    <p className='label'>Trip Name</p>
    <p className='value'>{tripData.name}</p>
   </div>

   <div className='item' key= "2">
    <p className='label'>Start Date </p>
    <p className='value'>{moment(ticketData?.trip?.date?.startDate).format("DD-MMM-YYYY")} </p>
   </div>

   <div className='item' key= "3">
    <p className='label'>End Date </p>
    <p className='value'>{moment(ticketData?.trip?.date?.endDate).format("DD-MMM-YYYY")} </p>
   </div>




   <div className='item' key= "4">
    <p className='label'>Trip Duration</p>
    <p className='value'> {tripData.days} Days </p>
   </div>


   <div className='item' key= "5">
    <p className='label'>Amount in (Rs.)</p>
    <p className='value'>{new Intl.NumberFormat('en-IN').format(ticketData.trip.priceSlot.basePrice * ticketData.passengers.length)}</p>
   </div>


   <div className='item' key= "6">
    <p className='label'>Pickup Location</p>
    <p className='value'>{ticketData.trip?.priceSlot.pickupPoint} ({ticketData.trip?.priceSlot.pickupTransMode})</p>
   </div>

   <div className='item' key= "6">
    <p className='label'>Drop Location</p>
    <p className='value'>{ticketData.trip?.priceSlot.dropPoint} ({ticketData.trip?.priceSlot.dropTransMode})</p>
   </div>


   <div className='item' key= "6">
    <p className='label'>No. Of Passengers</p>
    <p className='value'>{ticketData.passengers.length}</p>
   </div>

   
   <div className='item' key= "6">
    <p className='label'>Passengers</p>
    <p className='value'><ul>
      {ticketData.passengers.map((ele,i)=>{
        return <li key={i+100}> {`${i+1}. ${ele.name}`}</li>
      })}
      </ul>
      </p>
   </div>

   </div>

    </div>
    <div className='terms'>

<Checkbox checked={acceptTerms} onClick={()=>setAcceptTerms(!acceptTerms)}>I Accept Terms and Condition*</Checkbox>

    </div>
   </>
  )
}
