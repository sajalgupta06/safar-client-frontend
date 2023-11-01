import { fetchTickets } from "@/actions/req";
import { alerts } from "@/utils/alert";
import { Button, Checkbox, Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {BiRupee} from 'react-icons/bi'
import DataNotFound from '../DataNotFound/index'

export default function Bookings() {
  const [ticketData, setTicketData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleFetchTickets();
  }, []);

  const columns = [
    {
      title: "Trip Name",
      dataIndex: "tripDetails",
      key: "tripDetails",
      render:(ele)=>ele?.name
    },

    {
      title: "Trip Date",
      dataIndex: "tripDetails",
      key: "tripDetails",
      // render:(ele)=>moment(ele?.priceSlot?.date?.starDate).format("DD-MMM-YYYY"), 
      render:(ele)=>ele.priceSlot.date.startDate, 
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
        {ticketData?.length==0?
        <DataNotFound/>
        : 
           <Table 
        columns={columns} 
        dataSource={ticketData}
         pagination={false} 
         bordered
         scroll={{ x: 'max-content' }}

         responsive={{ 
          xs: {
            // set the table's scroll behavior on extra small screens
            scroll: 'scroll',
            // set the column width for extra small screens
            columnWidth: 120,
          },
          sm: {
            // set the column width for small screens
            columnWidth: 150,
          },
          md: {
            // set the column width for medium screens
            columnWidth: 200,
          },
        }}
         
         />}
    
      </section>
    </>
  );
}
