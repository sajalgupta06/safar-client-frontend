import { fetchTickets } from "@/actions/req";
import { alerts } from "@/utils/alert";
import { Button, Checkbox, Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {BiRupee} from 'react-icons/bi'
export default function Bookings() {
  const [ticketData, setTicketData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleFetchTickets();
  }, []);

  const columns = [
    {
      title: "Trip Name",
      dataIndex: "trip",
      key: "tripName",
      render:(ele)=>ele?.name
    },

    {
      title: "Trip Date",
      dataIndex: "trip",
      key: "tripDate",
      render:(ele)=>moment(ele.date.starDate).format("DD-MMM-YYYY"), 
    },

 
    {
      title: "No. Of Passengers",
      dataIndex: "passengers",
      render:(ele,data)=>data?.passengers?.length||"-",
    },

    {
      title: "Amount",
      dataIndex: "payment",
      key: "payment",
      render:(ele)=><p style={{display:"flex",alignItems:"center"}}><BiRupee fill="green"/> {ele?.amount}</p>

    },
    {
      title: "Booked On",
      dataIndex: "createdAt",
      key: "createdAt",
      render:(ele)=>moment(ele).format("DD-MMM-YYYY , hh:mm A"), 
    },

    {
      title: "",
      key: "view",
      render:()=><Button>View Receipt</Button>
    },
  ];



  const handleFetchTickets = async () => {
    setLoading(true);

    try {
      const res = await fetchTickets();

      if (res.statusCode == "10000") {
        setTicketData(res.data.ticket);
      } else {
        alerts.error("error in fetching bookings");
      }
    } catch (error) {
      console.log(error);
      alerts.error("error in fetching bookings");
    }
    setLoading(false);
  };

  return (
    <>
      <section className="bookings ">
        <Table 
        columns={columns} 
        dataSource={ticketData}
         pagination={false} 
         bordered
         
         />
      </section>
    </>
  );
}
