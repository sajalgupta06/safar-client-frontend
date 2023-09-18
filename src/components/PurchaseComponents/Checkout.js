import { bookTrip, getPaymentOrderId, verifyPayment } from '@/actions/req'
import { MyContext } from '@/pages/_app'
import { alerts } from '@/utils/alert'
import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useContext } from 'react'
import useRazorpay from 'react-razorpay'
import { useNavigate } from 'react-router-dom'

export default function Checkout(props) {

  const { ticketData ,setTicketData } = props
  const [Razorpay] = useRazorpay();

  const context = useContext(MyContext)

  console.log(context)

const handlePayment = async()=>{


  // setTicketData({
  //   ...ticketData,
  //   payment:{
  //     amount:ticketData.trip.priceSlot.basePrice * ticketData.passengers.length,
  //     mode:"online",
  //     status:true

  //   }

  // })

  try {

    let amount  = ticketData.trip.priceSlot.amount * ticketData.passengers.length
    const  res = await getPaymentOrderId(amount)
    if (res.statusCode == "10000") 
    {
        initPayment(res.data)
    }
    else{
      alerts.error(res.message)
    }

  } catch (error) {
    
  }

  console.log(ticketData)

  // alerts.success("Payment Confirmed")
}

const initPayment=(data) => {


   const options = {
  key:"rzp_test_iGaddDkf94ghFE",
  amount: data.amount,
  currency:data.currency,
  order_id : data.id,
  name: "Safar",
  description: "Test Transaction",
  handler:async(res)=>{
    try {

      console.log(res,"response")
      const verifyRes = await verifyPayment(res)
      if(verifyRes.statusCode=="10000")
      {
        let payment={
          amount:options.amount/100,
          mode:verifyRes.data.method,
          paymentId:verifyRes.data.id
        }
        let userDetails = {
          id:context.user._id,
          name:context.user.firstName + " " + context.user.lastName
        }
        let finalData = {
          passengers:ticketData.passengers,
          tripDetails:ticketData.trip,
          userDetails,
          payment
        }

        console.log(finalData)
        const bookticketres = await bookTrip(finalData)
        if(bookticketres.statusCode=="10000")
        {
          alerts.success("Trip Booked Successfully")
          window.location.replace('/');

          return
        } 
      }

    } catch (error) {
      console.log(error)
    }
  },
  theme: {
    color: "#3399cc",
  },

}

const rzp1 = new window.Razorpay(options)
rzp1.open();

}


  return (
   <>
   <label htmlFor='amount'>Enter Amount</label>
    <Button type='primary' onClick={handlePayment}>Pay {ticketData?.trip?.priceSlot?.amount * ticketData?.passengers?.length} </Button> 
  
   </>
  )
}
