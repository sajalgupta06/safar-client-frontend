import {
  addToFavourite,
  fetchSingleTripBySlug,
  removeFromFavourite,
} from "@/actions/req";
import React, { useContext, useState } from "react";
import { IoIosArrowForward, IoIosShareAlt } from "react-icons/io";
import { StickyContainer, Sticky } from "react-sticky";
import { Tabs, Dropdown, Table, Rate } from "antd";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { GiElectric } from "react-icons/gi";
import {  Button } from "antd";
import { Carousel, Image, Modal } from "antd";
import moment from "moment";
import Link from "next/link";
import { BiRupee } from "react-icons/bi";
import { BsFillCalendarFill } from "react-icons/bs";
import { AiTwotoneHeart } from "react-icons/ai";
import { MyContext } from "../_app";
import { alerts } from "@/utils/alert";
import Tooltip from "@/components/Tooltip";
import Head from "next/head";
import dynamic from "next/dynamic";

const DataNotFound = dynamic(() => import('../../components/DataNotFound'))


export default function index({ data }) {
  const location = data.name || " ";

  const pageTitle = `${location} Holiday Packages`;
  const pageDescription = `Plan your dream holiday in ${location} with our custom holiday packages.`;
  const ogImage = `https://example.com/${location}-holiday.jpg`;
  const msApplicationTileImage = "/ms-tile-icon.png";
  const robots = "index, follow";
  const googleBot = "index, follow";
  const appleTouchIcon = "/apple-touch-icon.png";
  const themeColor = "#0070f3";

  const { TabPane } = Tabs;
  const [top, setTop] = useState(120);
  const [date, setDate] = useState(data?.dates[0]);

  const context = useContext(MyContext);

  const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
      {({ style }) => (
        <DefaultTabBar
          {...props}
          style={{ ...style, zIndex: 1, background: "#fff" }}
        />
      )}
    </Sticky>
  );

  function lowestPricefromarray(priceArr) {
    const arr = [...priceArr.map((ele) => ele.basePrice)];

    return Math.min(...arr);
  }

  const items = [
    ...data?.dates?.map((ele, i) => {
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
        },
      };
    }),
  ];

  const columns = [

    {
      title: "Price",
      dataIndex: "basePrice",
      key: "finalPbasePricerice",
      render: (ele) => (
        <>
          <BiRupee />
          {ele}
        </>
      ),
    },
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


  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const handleAddToFavourite = async (id) => {
    try {
      let res;
      if (context.user.favouriteTrips.includes(id)) {
        alerts.success("Removed from Favourites");
        res = await removeFromFavourite({ id: id });
      } else {
        alerts.success("Added to Favourites");
        res = await addToFavourite({ id: id });
      }

      if (res.statusCode == "10000") {
        context.setFavouriteTrip({
          type: "SET_USER_FAVOURITE_TRIPS",
          payload: res.data.trips,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Modal

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {data && (
        <>
          <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta
              name="keywords"
              content={`${location}, holiday, vacation, packages`}
            />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Safar Travel" />
            <meta name="googlebot" content={googleBot} />
            <meta name="robots" content={robots} />

            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href={appleTouchIcon} />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color={themeColor}
            />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="msapplication-TileColor" content={themeColor} />
            <meta name="msapplication-config" content="/browserconfig.xml" />
            <meta name="theme-color" content={themeColor} />

            <meta property="og:title" content={pageTitle} />

            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://example.com/${location}-holiday`}
            />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="628" />
            <meta property="og:site_name" content="Safar Travel" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:see_also" content="https://example.com/blog" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={ogImage} />
            <meta
              name="twitter:image:alt"
              content={`${location} holiday packages`}
            />

            <meta
              name="google-site-verification"
              content="INSERT_VERIFICATION_CODE_HERE"
            />
            <meta name="geo.placename" content="Indore" />
            <meta name="geo.position" content="15.2993, 74.1240" />
            <meta name="geo.region" content="IN-GA" />
            <meta name="ICBM" content="15.2993, 74.1240" />
            <meta name="og:latitude" content="15.2993" />
            <meta name="og:longitude" content="74.1240" />
            <meta
              name="og:street-address"
              content="Address of your hotel in Indore"
            />
            <meta name="og:locality" content={"Indore"} />
            <meta name="og:country-name" content="India" />
            <meta name="og:region" content="Asia" />

            <meta name="application-name" content="Safar Travel" />
            <meta name="apple-mobile-web-app-title" content="Safar Travel" />
            <meta
              name="msapplication-TileImage"
              content={msApplicationTileImage}
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-config" content="/browserconfig.xml" />
          </Head>
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="cancel" onClick={handleCancel}>
                Cancel
              </Button>,
              <Link href="/login" state={"/"} className="btn ">
                {/* <button key="login" className='btn'>
        Login
      </button> */}
                Login
              </Link>,
            ]}
          >
            <p>Login to add to Favourites</p>
          </Modal>
          <section className="trip section">
            <div className="secContainer">
              <div className="secContainer-top">
                <div className="secContainer-top-gallery">
                  <Carousel >
                    <div>
                      <Image
                        className="sliderStyle"
                        src="https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                      />
                    </div>

                    <div>
                      <Image
                        className="sliderStyle"
                        src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      />
                    </div>

                    <div>
                      <Image
                        className="sliderStyle"
                        src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      />
                    </div>

                    <div>
                      <Image
                        className="sliderStyle"
                        src="https://images.unsplash.com/photo-1431631927486-6603c868ce5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      />
                    </div>
                  </Carousel>
                </div>

                <div className="secContainer-top-heading">
                  <div className="secContainer-top-heading-left">
                    <h2 className="tripName">{data.name} <p className="days">({data.days}D)</p> </h2>
                    <br></br>
                    <Link href={"/company"}  className="companyName">
                    

                      <p>A&T Adventures </p>
                   
                     
                   
                    </Link>
                      <Rate className="rating" disabled defaultValue={3.5} /> 
                  </div>
                  <div className="secContainer-top-heading-right">
                    <div className="actionBox">
                      <Tooltip content="share">
                        <IoIosShareAlt className="icon share" />
                      </Tooltip>

                      {!context.isAuthenticated && (
                        <Tooltip content="Login to add item to favourites">
                          <AiTwotoneHeart className={"icon favourite "} />
                        </Tooltip>
                      )}

                      {context.isAuthenticated && (
                        <>
                          <a
                            className={
                              context?.user?.favouriteTrips.includes(
                                data._id
                              ) == true
                                ? "like-button liked"
                                : "like-button"
                            }
                            onClick={() => handleAddToFavourite(data._id)}
                          >
                            <span className="like-icon">
                              <div className="heart-animation-1"></div>
                              <div className="heart-animation-2"></div>
                            </span>
                            Add To Favourite
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="secContainer-middle">
                {/* <div className='secContainer-middle-tagBox'>
        {Array.from({length:6}).map(ele=>{
          return(
            <div className='secContainer-middle-tagBox-box'>
            <p>No. Of Places</p>
            <p>5</p>
          </div>
          )
        })}
    
  </div> */}
                <div className="secContainer-middle-right">
             
                    <div className="secContainer-middle-right-heading">
                      <div className="secContainer-middle-right-heading-left">
                        <h2 className="availableDates">
                          Available Dates {" "}
                          <BsFillCalendarFill className="icon" />{" "}
                        </h2>
                        {/* <p>Company Name</p> */}
                      </div>
                      <div className="secContainer-middle-right-heading-middle">
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
          ${moment(date.startDate).format("DD-MMM-YYYY")} to 
            ${moment(date.endDate).format("DD-MMM-YYYY")}`) ||
                              "Choose Dates"}
                          </Button>
                        </Dropdown>
                      </div>

                      <div className="secContainer-middle-right-heading-right">
                        <Link
                          href={{
                            pathname: "/purchase",
                            query: { id: data._id, name: data.name }, // thedata data
                          }}
                        >
                          <Button type="primary" className="buyButton">
                            Book Now
                          </Button>{" "}
                        </Link>
                      </div>
                    </div>
                 
                </div>

                <div className="secContainer-middle-left">
                  <div className="secContainer-middle-left-about">
                    <h2>About</h2>
                    <p>{data?.about}</p>
                  </div>

                  <div className="secContainer-middle-left-highlights">
                    <p>
                      {" "}
                      <GiElectric className="icon" /> Highlights
                    </p>
                    <ul>
                      {data?.highlights?.map((ele, i) => {
                        return (
                          <li key={i}>
                            <IoIosArrowForward className="icon" /> {ele}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="secContainer-middle-left-highlights">
                    <p>
                      {" "}
                      <BiRupee className="icon" /> Prices
                    </p>
                    <Table
                      columns={columns}
                      dataSource={data?.priceSlots}
                      rowKey={(record) => record._id}
                      pagination={false}
                      className="modestable"
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

                  <div className="secContainer-middle-left-highlights">
                    <p>
                      <TiTick className="icon tick" /> Inclusions
                    </p>
                    <ul>
                      {data?.inclusions?.map((ele, i) => {
                        return (
                          <li key={i}>
                            <IoIosArrowForward className="icon" /> {ele}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="secContainer-middle-left-highlights">
                    <p>
                      {" "}
                      <ImCross className="icon cross" fill="red" />
                      Exclusion
                    </p>
                    <ul>
                      {data?.exclusions?.map((ele, i) => {
                        return (
                          <li key={i}>
                            <IoIosArrowForward className="icon" /> {ele}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="secContainer-middle-left-details">
                    <StickyContainer>
                      <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                        <TabPane tab="Itinerary" key="1">
                          {!data?.itinerary && <p>No Itinerary Available</p>}
                          <Tabs defaultActiveKey="1" tabPosition="left">
                            {data.itinerary &&
                              Object.keys(data.itinerary).map((ele, i) => (
                                <TabPane tab={`Day-${i + 1}`} key={i + 1}>
                                  <div className="cardsContainer">
                                    {data.itinerary[ele].data.map((card, i) => {
                                      return (
                                        <div className="card" key={i}>
                                          <p className="card-heading">
                                            {card.heading}{" "}
                                          </p>{" "}
                                          <p className="card-time">
                                            {moment(card.time, [
                                              "HH:mm",
                                            ]).format("hh:mm A")}
                                          </p>
                                          <p className="card-about">
                                            {card.about}
                                          </p>
                                          {/* <div className="card-photos">
                                            <Image.PreviewGroup>
                                              <Image
                                                src={homeBgImage.src}
                                                className="card-photos-photo"
                                              ></Image>
                                              <Image
                                                src={homeBgImage.src}
                                                className="card-photos-photo"
                                              ></Image>
                                              <Image
                                                src={homeBgImage.src}
                                                className="card-photos-photo"
                                              ></Image>
                                              <Image
                                                src={homeBgImage.src}
                                                className="card-photos-photo"
                                              ></Image>
                                            </Image.PreviewGroup>
                                          </div> */}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </TabPane>
                              ))}
                          </Tabs>
                        </TabPane>
                        <TabPane tab="Policies" key="2">
                          we are currently working on it
                        </TabPane>
                        {/* <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane> */}
                      </Tabs>
                    </StickyContainer>
                  </div>
                </div>

               
              </div>
            </div>
          </section>
        </>
      )}

      {!data && <DataNotFound />}
    </>
  );
}

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetchSingleTripBySlug(slug);
  if (res.statusCode == "10000") {
    return {
      props: {
        data: res.data.trip,
      },
    };
  } else {
    return {
      props: {
        data:[]
      },
    };
  }
};
