import { bookTrip, fetchSingleTrip, fetchUser } from "@/actions/req";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../_app";
import { Checkbox, Progress, Select, Steps, Table } from "antd";
import Date from "@/components/PurchaseComponents/Date";
import Passengers from "@/components/PurchaseComponents/Passengers";
import Checkout from "@/components/PurchaseComponents/Checkout";
import { alerts } from "@/utils/alert";
import Preview from "@/components/PurchaseComponents/Preview";

export default function index({data}) {
  const context = useContext(MyContext);
  const router = useRouter();

  const [tabs, setTabs] = useState(0);

  const [acceptTerms , setAcceptTerms] = useState(false)

  const [selectedRowKeys, setSelectedRowKeys] = useState();


  const [passengerState, setPassengerState] = useState({
    key:"",
    name: "",
    age: "",
    email: "",
    phone: "",
    gender:"",
    adhr:""
  });

  const [ticketData, setTicketData] = useState({
    passengers:[]
  });

  const [currentStep, setCurrentStep] = useState(tabs);

  const checkAuthenticate = () => {

    // if (context?.isAuthenticated) {
    // } else {
    //   return router.push("/login");
    // }
  };

  const handlePrev = () => {
    if (tabs > 0) {
      setTabs(tabs - 1);
    }
  };

 
 
  const handleNext = () => {


    if(tabs==0)
    {
        if(!ticketData?.trip?.date || !ticketData?.trip?.priceSlot )
        {
          alerts.warning("Please fill all the details")
          return
        }

        setTicketData({
          ...ticketData,
          trip: { ...ticketData.trip, name: data.name , slug:data.slug , id : data._id },
        });

        setTabs(1)
        return
    }

    if(tabs==1)
    {

      if(!ticketData.passengers.length>0)
      {
        alerts.warning("Add atleast one Person")
        return
      }

    
    

      setTabs(2)
      return

    }
    
    
    if(tabs==2)
    {
      
        if(!acceptTerms)
        {
          alerts.info("Please Accept Terms and Conditions")
          return
        }

    }

    if(tabs==3)
    {
      handleBookTicket()        
    }
    

    if (tabs < 4) {
      setTabs(tabs + 1);
    }

  };


  const handleBookTicket = async()=>{

    try {
      

      delete ticketData.trip.priceSlot._id;
      delete ticketData.trip.date._id;

      ticketData.passengers.forEach(pass=>{
        delete pass.key
      })

      const res = await bookTrip(ticketData);

      if(res.statusCode=="10000")
      {
        alerts.success("Booking Confirmed");
        router.replace("/")
      }
   else{
    alerts.error(res.message);

   }

    } catch (error) {
      console.log(error)
    }

}
  useEffect(() => {
    setCurrentStep(tabs);
  }, [tabs]);

  useEffect(() => {
    checkAuthenticate();
  }, []);

  return (
    <>
      <section className="purchase section">
        <div className="purchase-container">
          <div className="purchase-container-top">
            <Steps
              current={currentStep}
              items={[
                {
                  title: "Trip Details",

                  style: { cursor: "alias" },
                },
                {
                  title: "Passengers Details",

                  style: { cursor: "alias" },
                },
                {
                  title: "Preview",

                  style: { cursor: "alias" },
                },

                {
                  title: "Payment",

                  style: { cursor: "alias" },
                },
              ]}
            />

            <p>
              {tabs == 0 && "Trip Details"}
              {tabs == 1 && "Passengers Details"}
              {tabs == 2 && "Preview"}
              {tabs == 3 && "Checkout"}
            </p>
          </div>
          <div className="purchase-container-middle">
            {tabs == 0 && <Date
               ticketData = {ticketData}
               tripData = {data}
               setTicketData = {setTicketData}
               selectedRowKeys = {selectedRowKeys}
               setSelectedRowKeys ={setSelectedRowKeys}
            />}
            {tabs == 1 && (
              <Passengers
                passengerState={passengerState}
                setPassengerState={setPassengerState}
    
                ticketData = {ticketData}
                setTicketData = {setTicketData}
              />
            )}
             {tabs == 2 && <Preview  
              tripData = {data}
               ticketData = {ticketData}
                setTicketData = {setTicketData}
                setAcceptTerms = {setAcceptTerms}
                acceptTerms = {acceptTerms}
                />}

            {tabs == 3 && <Checkout   ticketData = {ticketData}
                setTicketData = {setTicketData}/>}
          </div>

          <div className="purchase-container-bottom">
            <button className="btn prev" onClick={handlePrev}>
              Prev
            </button>
            <button className="btn next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async (context) => {


  const id = context.query.id

  const res = await fetchSingleTrip(id);

  if (res.statusCode == "10000") {
    return {
      props: {
        data: res.data.trip,
      },
    };
  } else {
    return {
      props: {
        data: [],
      },
    };
  }
};
