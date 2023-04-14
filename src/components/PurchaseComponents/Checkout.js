import { alerts } from '@/utils/alert'
import { Button, Input } from 'antd'
import React, { useState } from 'react'

export default function Checkout(props) {

  const { ticketData ,setTicketData } = props

  


const handlePayment = ()=>{
  setTicketData({
    ...ticketData,
    payment:{
      amount:ticketData.trip.priceSlot.basePrice * ticketData.passengers.length,
      mode:"online",
      status:true

    }
  })

  console.log(ticketData)

  alerts.success("Payment Confirmed")
}

  return (
   <>
   <label htmlFor='amount'>Enter Amount</label>
    <Button type='primary' onClick={handlePayment}>Pay {ticketData.trip.priceSlot.basePrice * ticketData.passengers.length} </Button> 
  
   </>
  )
}
