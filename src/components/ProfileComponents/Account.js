import React, { useRef } from 'react'
import {
  Avatar,
  Button,
  Dropdown,
  Form,
  Input,
  Select,
  // message
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {  useState } from 'react';
import { CompLoader } from '../Loader/CompLoader';
import { updateUser } from '@/actions/req';
import { alerts } from '@/utils/alert';
import { useEffect } from 'react';




export default function Account(props) {

  const { Option } = Select;
  const userData =  props.user

  const inputRef = useRef()
  const [gender,setGender] = useState()
  const [errors,setErrors] = useState({})
  const [formData,setFormData] = useState()
  const [photo,setPhoto] = useState()

  
useEffect(() => {
  setGender(props?.user?.gender)

}, [props])


  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };



  const [form] = Form.useForm();

  const onFinish = async(values) => {

    let obj = {}

    if(!gender)
    {
      obj.gender = "Please Select Gender"
      
    }
    else{
      values.gender = gender
    }

    if(!values.age)
    {
      obj.age = "Please Enter Age"
      
    }
 
    if(values?.phone && (values.phone.length>10 || values.phone.length<10 ) )
    {
      obj.phone = "Please Enter Valid Phone Number"
    }
   
      
    setErrors(obj)
  
    if(Object.keys(obj).length)
    {
        return
    }
  else{

    let data = values;


    if(photo)
    {
      data.photo = photo
    }
   
    try {

      const res = await updateUser(data)
      if(res.statusCode=="10000")
      {
        alerts.success("Details Saved Successfully")
      }

      if(res.statusCode=="10001")
      {
        alerts.error(res.message)
      }

    } catch (error) {
        console.log(error)
        alerts.error("error occured")
    }
    

  }



  };

 



  const items = [
    {
      key: 'male',
      label: "Male",
      onClick:()=>setGender("Male")
    
      
    },
    {
      key: 'female',
      label: "Female",
      onClick:()=>setGender("Female")
    
      
    },
    {
      key: 'other',
      label: "Other",
      onClick:()=>setGender("Other")
    
      
    },
   
   

  ];


  const handleUploadPhoto = (e)=>{

    setPhoto(e.target.files[0])

  }

useEffect(() => {
 console.log(photo)
}, [photo]);
  return (
    <>
    {!userData && <CompLoader/>}
    {userData && (
     
      <div className='Account'>
    <Form
   {...formItemLayout}
   form={form}
   name="register"
   onFinish={onFinish}
   initialValues={{
     residence: ['zhejiang', 'hangzhou', 'xihu'],
     prefix: '86',
   }}
   // style={{
   //   maxWidth: 800,
   // }}
   scrollToFirstError
 >
   <Form.Item
     name="firstName"
     label="First Name"
    requiredMark={false}

    initialValue={userData?.firstName}
     
     rules={[
       {
         type: 'text',
       
       },
       {
         required: true,
         message: 'Please input your First Name!',
       },
     ]}
   >
     <Input  type='text'  />
   </Form.Item>


   <Form.Item
     name="lastName"
     label="Last Name"
    requiredMark={false}

    initialValue={userData?.lastName}
     
     rules={[
       {
         type: 'text',
       
       },
       {
         required: true,
         message: 'Please input your Last Name!',
       },
     ]}
   >
     <Input  type='text'  />
   </Form.Item>


   <Form.Item
     name="age"
     label="Age"
     initialValue={userData?.age}
     validateStatus={errors?.age && ("error")}
     help={errors?.age}
     
>
     <Input  type='number' />
   </Form.Item>



   <Form.Item
     name="phone"
     label="Phone Number"
     requiredMark={false}
     initialValue={userData?.phone}
     
   
   >
     <Input
     type='number'
       addonBefore={"+91"}
       style={{
         width: '100%',
       }}
       
       disabled
     />

   </Form.Item>

   <Form.Item
     name="email"
     label="E-mail"
     requiredMark={false}
     initialValue={userData?.email}

     rules={[
       {
         type: 'email',
         message: 'The input is not valid E-mail!',
       },
       
     ]}
   >
     <Input />
   </Form.Item>

   <Form.Item
     name="gender"
     label="Gender" 
    validateStatus={errors?.gender && ("error")}
     help={errors?.gender}
     initialValue={gender}
     
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
     <Button style={{width:"100%",textAlign:"start"}}>{ gender !=undefined   ? gender :"Select Gender" }</Button>

      
    </Dropdown>
   </Form.Item>

 



   <Form.Item  label="Aadhar Card" name="photo"  initialValue={userData?.adhr} >
    
  <input type = "file" id = "file"    accept="image/*" 
    onChange={(e)=>handleUploadPhoto(e)}
  // ref={inputRef} style={{display: 'none'}}
   ></input>
 {/* <Button type="file"    onClick={()=>inputRef.current.click()}   icon={<UploadOutlined />}>Click to Upload</Button> */}

 </Form.Item>


   <Form.Item {...tailFormItemLayout}>
     <Button  type="primary" htmlType="submit">
       Save Details
     </Button>
   </Form.Item>
 </Form>
     
      </div>
    )}

    </>
  );
}
