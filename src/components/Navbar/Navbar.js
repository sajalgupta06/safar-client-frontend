import React, { useContext, useState, useEffect } from "react";
import { AiFillCloseCircle, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useRouter } from "next/router";
import { Avatar, Button, Dropdown, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { MyContext } from "@/pages/_app";
import Link from "next/link";
import Cookies from "js-cookie";
import { BiMenuAltRight } from "react-icons/bi";
import { MdCardTravel } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const router = useRouter();
  const data = useContext(MyContext);

  // toggle/show navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  //remove Navbar
  const removeNav = () => {
    setActive("navBar");
  };

  //add background  color to header

  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 15) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", addBg);
  }, []);

  const handleLogout = () => {
    Cookies.remove("a_token");
    data.setIsAuthenticated({ type: "SET_AUTHENTICATE", payload: false });
    data.setUser({ type: "SET_USER", payload: null });
    router.push("/");
  };

  const items = [
    {
      key: "name",
      label: <p>Hey {data?.user?.firstName} !</p>,
    },
    {
      key: "profile",
      label: (
        <Link href="/profile" className="navLink">
          Profile
        </Link>
      ),
    },

    {
      key: "logout",
      label: <p onClick={handleLogout}>Logout</p>,
    },
  ];

  return (
    <section className="navBarSection">
      {/* <div className={transparent}> */}
      <div className="header">
        <h2 className="head">Safar</h2>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItems" onClick={removeNav}>
              <Link href="/" className="navLink">
                <AiOutlineHome/> Home
              </Link>
            </li>

            {/* <li className="navItems" >
              <Link href="/#offers" scroll={true} className="navLink">
                Offers
              </Link>
            </li> */}

      <li className="navItems" onClick={removeNav}>
              <Link href="#" className="navLink">
                <MdCardTravel/> Become a Tour Operator
              </Link>
            </li>
            {data?.isAuthenticated == false && (
              <li className="navItems loginItem" onClick={removeNav}>
                <Link href="/login" className="navLink">
                 <AiOutlineUser/> Login
                </Link>
              </li>
            )}

            {data?.isAuthenticated==true && (
              <li className="navItems">
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
                  <Avatar className="avatar" icon={<UserOutlined />} />
                </Dropdown>
              </li>
            )}
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <BiMenuAltRight className="icon" />
        </div>
      </div>
    </section>
  );
};
export default Navbar;

export const getServerSideProps = async (context) => {
  // const res = await fetchUser(context.req.headers);

  console.log("asd");
  return;
  // if (res.statusCode == "10000") {
  //   return {
  //     props: {
  //       popularData: res.data.trips,
  //     },
  //   };
  // } else {
  //   return {
  //     props: {
  //       popularData: [],
  //     },
  //   };
  // }
};
