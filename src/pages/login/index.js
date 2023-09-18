import React, { useContext, useEffect, useState } from "react";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { MyContext } from "../_app";
import Image from "next/image";
import { getOtp, verifyOtp } from "@/actions/req";
import { alerts } from "@/utils/alert";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

export default function Login() {

  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [otpPage, setOtpPage] = useState(false);

    const data = useContext(MyContext)

  // console.log(data)
  // useEffect(() => {
  
  //   if(data?.isAuthenticated)
  //   {
  //     return window.location.replace("/")
  //   }
  
  // }, []);
  
useEffect(() => {

 
  if(data?.isAuthenticated)
  {
    return window.location.replace("/")
  }

}, [data?.isAuthenticated]);

  
const sendOtp = async () => {
    setButtonLoading(true);
      
    try {
      const res = await getOtp({ phone: phoneNumber });
      
      if (res.statusCode == "10000") {
       
       
        alerts.success("Notification has been sent")
       
        setOtpPage(true);
      } else if (res.statusCode == "10001") {
        alerts.error(res.message)
      } else {
        alerts.error("Error in sending OTP");
      }
    } catch (error) {
      console.log(error)
      alerts.error( "Error in sending OTP");
      // alerts.error( error);
    }

    setButtonLoading(false);
  };




  

  const handleVerifyOtp = async () => {
    setButtonLoading(true);

    try {
     

      const res = await verifyOtp({ phone: phoneNumber , otp:otp });


      if (res.statusCode == "10000") {
        // console.log(res)
        alerts.success("Login Successful !")

          setOtpPage(false)
          setOtp("")
          setPhoneNumber("")
          

          // data.setAccessToken({type:"SET_ACCESS_TOKEN",payload:res.data.tokens.accessToken})
          
    
            // Perform localStorage action
            // localStorage.setItem('a_token' , res.data.tokens.accessToken)
            // localStorage.setItem('r_token' , res.data.tokens.refreshToken)
  
            Cookies.set('a_token', res.data.tokens.accessToken)

         
        
          data.setUser({type:"SET_USER",payload:res.data.user})
          data.setIsAuthenticated({type:"SET_AUTHENTICATE",payload:true})

            // console.log(data)

          return router.back()
        
       


      } else if (res.statusCode == "10001") {

        alerts.error(res.message)
      } else {
        alerts.error("Error in sending OTP");
      }
      console.log(res)

    } catch (error) {
      alerts.error( "Error in sending OTP");
    }
  
    setButtonLoading(false);
  };



  return (
    <>
      <section className=" login section">


        <div className="loginContainer">
          <div className="content-contenaire">
            <div className="top-container">
              <h2> Login </h2>
            </div>

            {otpPage == true ? (
              <>
                <div className="input">
                  <input
                    type="number"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                  />
                </div>

                <Button
                  loading={buttonLoading}
                  icon={buttonLoading == true ? <PoweroffOutlined /> : ""}
                  className="btn otpBtn"
                  disabled={buttonLoading}
                  onClick={handleVerifyOtp}
                >
                  Verify Otp
                </Button>
              </>
            ) : (
              <>
                <div className="input">
                  <input
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    maxLength={10}
                    minLength={10}
                    placeholder="Mobile Number"
                  />
                </div>

                <Button
                  loading={buttonLoading}
                  icon={buttonLoading == true ? <PoweroffOutlined /> : ""}
                  className="btn otpBtn"
                  disabled={buttonLoading}
                  onClick={sendOtp}
                >
                  Send Otp
                </Button>
              </>
            )}
          
          </div>
          <div className="img-container">
            {/* <img src={loginImage}></img> */}
            <img
              src={
                "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
