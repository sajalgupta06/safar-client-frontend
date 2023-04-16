import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Dropdown, message } from "antd";

import { Button, Form, Input, Select, Table } from "antd";
import { alerts } from "@/utils/alert";
export default function Passengers(props) {
  const { passengerState, setPassengerState, ticketData, setTicketData } =
    props;
  const [gender, setGender] = useState();

  const items = [
    {
      key: "male",
      label: "Male",
      onClick: () => handleSetGender("Male"),
    },
    {
      key: "female",
      label: "Female",
      onClick: () => handleSetGender("Female"),
    },
    {
      key: "other",
      label: "Other",
      onClick: () => handleSetGender("Other"),
    },
  ];

  const handleSetGender = (value) => {
    setGender(value);
    setPassengerState({
      ...passengerState,
      ["gender"]: value,
    });
  };

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
      render: (ele)=> ele==""?"-":ele,
    },

    {
      title: "Mobile Number",
      dataIndex: "phone",
      key: "phone",
      render: (ele)=> ele==""?"-":ele,
    },

    {
      title: "Aadhar Card  Number",
      dataIndex: "adhr",
      key: "adhr",
     
    },

    {
      title: "Action",
      dataIndex: "key",
      
      width: "20%",
      key: "action",
      render: (key) => {
       
        return (
          <>
            <Button className="edit"  onClick={()=>EditPassengers(key)}>Edit</Button>
            <Button className="delete"  onClick={()=>removePassengers(key)}>Delete</Button>
          </>
        );
      },
    },
  ];

  useEffect(() => {
   console.log(ticketData)
  }, [ticketData]);

  const addPassengers = () => {

    if(
      !passengerState?.name||
      !passengerState?.age||
        !gender||
      !passengerState?.adhr 
      )
      {
        alerts.info("Please fill the details")
        return
      }
 

    setTicketData(()=>{

      let obj = {...ticketData,
        passengers: [...ticketData.passengers, {...passengerState,key:ticketData.passengers?.length + 1}]}
      

      return  obj
    });

    setPassengerState({})
    setGender()


  };


const removePassengers = (key)=>{
  setTicketData({
    ...ticketData,
    passengers: [...ticketData.passengers.filter(pass=>pass.key!=key)]
  });
}

const EditPassengers = (key)=>{

  const passenger = ticketData.passengers.filter(pass=>pass.key==key)

  setPassengerState(...passenger)
  setGender(passenger.gender)

  setTicketData({
    ...ticketData,
    passengers: [...ticketData.passengers.filter(pass=>pass.key!=key)]
  });
}

  const handleAdharCardChange = (e)=>{

    // const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters


    // let formattedValue = "";
    // for (let i = 0; i < inputValue.length; i++) {
    //   if (i % 4 === 0 && i > 0) {
    //     formattedValue += "-";
    //   }
    //   formattedValue += inputValue[i];
    // }
    // console.log(formattedValue)

      setPassengerState({
                  ...passengerState,
                  ["adhr"]: e.target.value
                })
  }





  return (
    <>
    <div className="passengers_form">
      <Form name="horizontal_login" className="horizontal_login"
        requiredMark={false}
        colon={false}
      
      >
        <Form.Item
       
          label="Name"
          labelCol={{ span: 5 }}
          labelAlign="left"
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
          ]}
        >
          <Input
            placeholder="Name"
            value={passengerState?.name}
            onChange={(e) =>
              setPassengerState({
                ...passengerState,
                ["name"]: e.target.value,
              })
            }
          />
        </Form.Item>

        <Form.Item
          
          label="Age"
          labelCol={{ span: 5 }}
          labelAlign="left"
          rules={[
            {
              required: true,
              message: "Please enter your Age!",
              min: 0,
              max: 90,
            },
          ]}
        >
          <Input
            placeholder="Age"
            type={"number"}
            value={passengerState?.age}
            onChange={(e) =>
              setPassengerState({
                ...passengerState,
                ["age"]: e.target.value,
              })
            }
          />
        </Form.Item>

        <Form.Item
      
          label="Email"
          labelCol={{ span: 5 }}
          labelAlign="left"
          rules={[
            {
              type: "email",
              //   message: 'Please enter valid Email ID!',
            },
          ]}
        >
          <Input
            placeholder="Email"
            autoComplete={false}
            value={passengerState?.email}
            onChange={(e) =>
              setPassengerState({
                ...passengerState,
                ["email"]: e.target.value,
              })
            }
          />
          
        </Form.Item>

        <Form.Item
     
          label="Mobile Number"
          labelCol={{ span: 5 }}
          labelAlign="left"
          rules={[
            {
              min: 0,
              max: 10,
            },
          ]}
        >
          <Input
            placeholder="Mobile Number"
            type={"number"}
            autoComplete={false}
            value={passengerState?.phone}
            onChange={(e) =>
              setPassengerState({
                ...passengerState,
                ["phone"]: e.target.value,
              })
            }
          />
        </Form.Item>

        <Form.Item>
        
   

          <Form.Item 
   
          label="Gender"
          labelCol={{ span: 5 }}
          labelAlign="left"
          >

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
              <Button style={{ width: "100%", textAlign: "start" }}>
                {gender || "Choose Gender"}
              </Button>
            </Dropdown>

          </Form.Item>

          <Form.Item
       
            label="Aadhar Number"
            labelCol={{ span: 5 }}
          labelAlign="left"
            rules={[
              {
                len: 12,
                message: "Not a valid aadhar number",
              },
            ]}
          >
            <Input
              placeholder="Enter aadhar Card Number"
              type={"number"}
              value={passengerState.adhr}
              onChange={(e) => handleAdharCardChange(e)}
            />
          </Form.Item>
        </Form.Item>
      </Form>
      <div className="buttonDiv">
        <Button   onClick={addPassengers}>
          {" "}
          Add Passenger
        </Button>
      </div>
      </div>

      {ticketData?.passengers?.length > 0 && (
        <Table
          rowKey={(record) => record?.name}
          className="tableDiv"
          columns={columns}
          dataSource={ticketData?.passengers}
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
      )}
    </>
  );
}
