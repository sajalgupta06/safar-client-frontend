  import React, { useEffect, useState } from "react";

import { Button, Checkbox, Dropdown, Progress, Select, Table } from "antd";
import moment from "moment";

export default function Date({ ticketData, tripData, setTicketData,selectedRowKeys,setSelectedRowKeys }) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };



  const [date, setDate] = useState();



  function object_equals( x, y ) {
    if ( x === y ) return true;
      // if both x and y are null or undefined and exactly the same
  
    if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) return false;
      // if they are not strictly equal, they both need to be Objects
  
    if ( x.constructor !== y.constructor ) return false;
      // they must have the exact same prototype chain, the closest we can do is
      // test there constructor.
  
    for ( var p in x ) {
      if ( ! x.hasOwnProperty( p ) ) continue;
        // other properties were tested using x.constructor === y.constructor
  
      if ( ! y.hasOwnProperty( p ) ) return false;
        // allows to compare x[ p ] and y[ p ] when set to undefined
  
      if ( x[ p ] === y[ p ] ) continue;
        // if they have the same strict value or identity then they are equal
  
      if ( typeof( x[ p ] ) !== "object" ) return false;
        // Numbers, Strings, Functions, Booleans must be strictly equal
  
      if ( ! object_equals( x[ p ],  y[ p ] ) ) return false;
        // Objects and Arrays must be tested recursively
    }
  
    for ( p in y )
      if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) )
        return false;
          // allows x[ p ] to be set to undefined
  
    return true;
  }

  const columns = [

    {
      title: "Price",
      dataIndex: "amount",
      key: "amount",
    },
    
    {
      title: "Pickup Point",
      dataIndex: "pickupPoint",
      key: "pickupPoint",
    },
    {
      title: "Pickup Mode",
      dataIndex: "pickupMode",
      key: "pickupMode",
    },
    {
      title: "Drop Point",
      dataIndex: "dropPoint",
      key: "dropPoint",
    },
    {
      title: "Drop Mode",
      dataIndex: "dropMode",
      key: "dropMode",
  
    },

    
  ];

  

  const items = [
    ...tripData?.dates.map((ele, i) => {
      delete ele._id
      return {
        key: i,
        label: (
          <p>
            {moment(ele.startDate,"DD-MM-YYYY").format("DD-MMM-YYYY")} to{" "}
            {moment(ele.endDate,"DD-MM-YYYY").format("DD-MMM-YYYY")}
          </p>
        ),
        onClick: () => {
          setDate(ele);
        },
      };
    }),
  ];

const getPriceSlotFromDate = ()=>{
let arr = []

tripData?.priceSlots?.forEach((ele)=>{

    if(object_equals(ele.date,date))
    {
      arr.push(ele)
    }
  })

return arr
}

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
    <div className="datePage">
      <div className="date">
        <p> Choose Date of Journey</p>
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
            {(date &&
              `
          ${moment(date?.startDate,"DD-MM-YYYY").format("DD-MMM-YYYY")} to 
            ${moment(date?.endDate,"DD-MM-YYYY").format("DD-MMM-YYYY")}`) ||
              "Choose Dates"}
          </Button>
        </Dropdown>
      </div>

      <div className="traveloptions">
      <p className="subHeading"> Choose Travel Plan</p>

        <Table
          columns={columns}
          dataSource={getPriceSlotFromDate()}
          rowKey={(record) => record._id}
          rowSelection={{
            type: 'radio',
            selectedRowKeys:selectedRowKeys,
            ...rowSelection,
          }}  
           pagination={false}
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
          
        />
        
      </div>
      </div>
    </>
  );
}
