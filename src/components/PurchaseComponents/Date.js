  import React, { useEffect, useState } from "react";

import { Button, Checkbox, Dropdown, Progress, Select, Table } from "antd";
import moment from "moment";

export default function Date({ ticketData, tripData, setTicketData,selectedRowKeys,setSelectedRowKeys }) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [date, setDate] = useState();
  const [price, setPrice] = useState();

  const columns = [
    {
      title: "Pickup Point",
      dataIndex: "pickupPoint",
      key: "pickupPoint",
    },
    {
      title: "Drop Point",
      dataIndex: "dropPoint",
      key: "dropPoint",
    },
    {
      title: "Mode",
      dataIndex: "dropTransMode",
      key: "dropTransMode",
      textWrap: "wrap",

      render: (element, record) => (
        <>
          {record.pickupTransMode} , {record.dropTransMode}
        </>
      ),
    },

    {
      title: "Price",
      dataIndex: "basePrice",
      key: "finalPbasePricerice",
    },
  ];

  const items = [
    ...tripData?.dates.map((ele, i) => {
      return {
        key: i,
        label: (
          <p>
            {moment(ele.startDate).format("DD-MMM-YYYY")} to{" "}
            {moment(ele.endDate).format("DD-MMM-YYYY")}
          </p>
        ),
        onClick: () => {
          setDate(ele);
          setTicketData({
            ...ticketData,
            trip: { ...ticketData.trip, date: ele },
          });
        },
      };
    }),
  ];



  const rowSelection = {
    
  
    onChange: (selectedRowKeys, selectedRows) => {
      setTicketData({
        ...ticketData,
        trip: { ...ticketData.trip, priceSlot: selectedRows[0] },
      });
      setSelectedRowKeys(selectedRowKeys)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <>
      <div className="date">
        <p>Date of Journey</p>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          trigger={"click"}
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Button className="dateBtn">
            {(ticketData?.trip?.date &&
              `
          ${moment(ticketData?.trip.date.startDate).format("DD-MMM-YYYY")} to 
            ${moment(ticketData?.trip.date.endDate).format("DD-MMM-YYYY")}`) ||
              "Choose Dates"}
          </Button>
        </Dropdown>
      </div>

      <div className="options">
        <Table
          
          columns={columns}
          dataSource={tripData?.priceSlots}
          rowKey={(record) => record._id}
          rowSelection={{
            type: 'radio',
            selectedRowKeys:selectedRowKeys,
            ...rowSelection,
          }}  
           pagination={false}
          
        />
        
      </div>
    </>
  );
}
