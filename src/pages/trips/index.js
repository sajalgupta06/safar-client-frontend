import { fetchCollectionNames, fetchSeachTrips } from "@/actions/req";
import { Dropdown, Form, Input, InputNumber } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillFilter, AiOutlineClose } from "react-icons/ai";
import {  BsSortDown, BsSortDownAlt } from "react-icons/bs";
import Image from "next/image";
import { BiRupee } from "react-icons/bi";
import { CompLoader } from "@/components/Loader/CompLoader";
import { alerts } from "@/utils/alert";
import { useRouter } from "next/router";
import placeHolderImage from '../../static/images/placeholder-image.png'
import homeBgImage from "../../static/images/homeBgImage.jpg";

import dynamic from "next/dynamic";
import TripCard from "@/components/Card/TripCard";

const DataNotFound = dynamic(() => import('../../components/DataNotFound'))

export default function index({
  tripData,
  search,
  filterValues,
}) {
  const router = useRouter();

    const initialSort = {sort:filterValues?.sort !=undefined? filterValues?.sort:"popular",sortDirection:filterValues?.sortDirection !=undefined? filterValues?.sortDirection:-1}

  const [filterTags,setFiltersTags] = useState(filterValues);
  
  const [sort, setSort] = useState(initialSort );
  const [dayState, setDayState] = useState([
    filterValues?.minDays,
    filterValues?.maxDays,
  ]); //For  Day Filter
  const [priceState, setPriceState] = useState([
    filterValues?.minPrice,
    filterValues?.maxPrice,
  ]); //For  Price Filter
  const [data, setData] = useState(tripData); //For  Collection  Filter
  const [loading, setLoading] = useState(false);
  const [sortData, setSortData] = useState();
  const [searchData, setSearchData] = useState(filterValues?.search);

  const { Search } = Input;




  const handleFilterDataqueries = ()=>{
    let filterData = { };

    if(searchData){
      filterData = {...filterData,search:searchData}
    }

    if(dayState[0]!=null){
      filterData = {...filterData,minDays:dayState[0]}
    }

    if(dayState[1]!=null){
      filterData = {...filterData,maxDays:dayState[1]}
    }


    if(priceState[0]!=null){
      filterData = {...filterData,minPrice:priceState[0]}
    }

    if(priceState[1]!=null){
      filterData = {...filterData,maxPrice:priceState[1]}
    }
return filterData;
  }

  const handleApplyFilter = async () => {

    // if (dayState[0] > dayState[1] || priceState[0] > priceState[1]) {
    //   alerts.error("Invalid Filters");
    //   return;
    // }


  
    setFiltersTags({
      minDays: dayState[0],
      maxDays: dayState[1],
      minPrice: priceState[0],
      maxPrice: priceState[1],
    });
  
    const filterData =  handleFilterDataqueries()


    console.log(filterData)

    const query = "?"+new URLSearchParams(filterData).toString()

    router.push(query, undefined,{ shallow: true })

  };

  const closeTags = async () => {

  
    const filterData =  handleFilterDataqueries()

      const query = "?"+ new URLSearchParams(filterData).toString()

      router.push(query,undefined, { shallow: true })

    
  };

  const handleCloseDaysTag = async () => {

    setDayState([])

    setFiltersTags({
      minPrice: priceState[0],
      maxPrice: priceState[1],
    })


    closeTags();
  };

  const handleClosePriceTag = () => {
    setPriceState([])

    setFiltersTags({
      minDays: dayState[0],
      maxDays: dayState[1],
    })
    closeTags();
  };


 

  const onRouteChange = async()=>{
    setLoading(true);


    try {
      const res = await fetchSeachTrips(window.location.search);

      if (res.statusCode == "10000") {

        setData(res.data.trips);

       
      } else {
        alerts.error("error in setting filters");
      }
    } catch (error) {
      console.log(error);
      alerts.error("error in setting filters");
    }
    setLoading(false);
  }



useEffect(() => {
  onRouteChange()
}, [router.query]);

useEffect(() => {
console.log(sort)},
 [sort]);

  const onSearch = ()=>{



    router.push({
      pathname: "/trips",
      query: { ...router.query,   search:searchData},
    });

    

  }


  const handleClickSort = (name,direction)=>{


    setSort({sort:name,sortDirection:direction})

    router.push({
      pathname:"/trips",
      query:{...router.query,sort:name,sortDirection:direction}
    })


  }

  // const items = [
  //   ...collectionNames?.map((ele, i) => {
  //     return {
  //       key: i,
  //       label: ele.name,
  //       onClick: () => {
  //         setCollectionState(ele);
  //       },
  //     };
  //   }),
  // ];

  const filterContent = (
    <div className="iconfiltersDiv">
      <div className="filters">
        <div className="filterBox">
          <p className="boxHeading">Days</p>

          <Form.Item label="Min Days">
            <Input
              placeholder="Min Days"
              name="minDays"
              id="minDays"
              value={dayState[0]}
              onChange={(e) =>
                setDayState((state) => [e.target.value, state[1]])
              }
            ></Input>
          </Form.Item>

          <Form.Item label="Max Days">
            <Input
              placeholder="Max Days"
              name="maxDays"
              id="maxDays"
              value={dayState[1]}
              onChange={(e) =>
                setDayState((state) => [state[0], e.target.value])
              }
            ></Input>
          </Form.Item>
        </div>

        <div className="filterBox">
          <p className="boxHeading">Price</p>
          <Form.Item label="Min Price">
            <Input
              placeholder="Min Price"
              name="minPrice"
              id="minPrice"
              value={priceState[0]}
              onChange={(e) =>
                setPriceState((state) => [e.target.value, state[1]])
              }
            ></Input>
          </Form.Item>
          <Form.Item label="Max Price">
            <Input
              placeholder="Max Price"
              name="maxPrice"
              id="maxPrice"
              value={priceState[1]}
              onChange={(e) =>
                setPriceState((state) => [state[0], e.target.value])
              }
            ></Input>
          </Form.Item>
        </div>
      </div>

      <div className="bottom">
        <button className="btn" onClick={handleApplyFilter}>
          Apply
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="results section">
        <>
          {data && data.length>0 &&    (
            <div className="secContainer container">
              <div className="filtersDiv">
                <p className="heading">Filters</p>

                <div className="filters">
                  <div className="filterBox">
                    <p className="boxHeading">Days</p>

                    {/* <Slider
                          min={0}
                          step={1}
                          max={20}
                          defaultValue={[0, 10]}
                          range
                          marks={daysMarks}
                          onChange = {(val)=>setDayState(val)}
                        /> */}

                    <Form.Item label="Min Days">
                      <InputNumber
                        placeholder="Min Days"
                        name="minDays"
                        id="minDays"
                        value={dayState[0]}
                        onChange={(e) => {console.log(e);setDayState((state) => [e, state[1]])}}
                      ></InputNumber> 
                    </Form.Item>

                    <Form.Item label="Max Days">
                      <InputNumber
                        placeholder="Max Days"
                        name="maxDays"
                        id="maxDays"
                        value={dayState[1]}
                        onChange={(e) => setDayState((state) => [state[0], e])}
                      ></InputNumber>
                    </Form.Item>
                  </div>

                  <div className="filterBox">
                    <p className="boxHeading">Price</p>
                    <Form.Item label="Min Price">
                      <InputNumber
                        placeholder="Min Price"
                        name="minPrice"
                        id="minPrice"
                        style={{width:"100%"}}
                        value={priceState[0]}
                        addonBefore={<BiRupee />}
                        width={5}
                        onChange={(e) =>
                          setPriceState((state) => [e, state[1]])
                        }
                      ></InputNumber>
                    </Form.Item>
                    <Form.Item label="Max Price">
                      <InputNumber
                        placeholder="Max Price"
                        name="maxPrice"
                        id="maxPrice"
                        addonBefore={<BiRupee />}
                        value={priceState[1]}
                        onChange={(e) =>
                          setPriceState((state) => [state[0], e])
                        }
                      ></InputNumber>
                    </Form.Item>
                  </div>
                </div>

                <div className="bottom">
                  <button className="btn" onClick={handleApplyFilter}>
                    Apply
                  </button>
                </div>
              </div>

              {loading == true ? (
                <CompLoader></CompLoader>
              ) : data?.length > 0 ? (
                <div className="mainDiv">
                  <div className="headDiv">
                    <div className="content">
                      <h4>Searched for ' {search} ' </h4>

                      <div className="iconsDiv">
                        <Dropdown
                          dropdownRender={(menu) => filterContent}
                          placement="bottom"
                          trigger={"click"}
                          autoAdjustOverflow
                          arrow={{
                            pointAtCenter: true,
                          }}
                          overlayClassName="filterDropdown"
                        >
                          <AiFillFilter
                            className="icon filter"
                            size={"1.5rem"}
                          />
                        </Dropdown>
                      </div>
                    </div>

                    <div className="options">
                      <div className="sorter">
                        <div
                          className={`sort ${
                            sort?.sort == "popular" ? "selected" : ""
                          }`}
                          onClick={() => handleClickSort("popular",-1)}
                        >
                          <p>Popularity </p> <BsSortDown />
                        </div>

                        <div
                          className={`sort ${
                            sort?.sort == "price" && sort?.sortDirection==-1  ? "selected" : ""
                          }`}
                          onClick={() => handleClickSort("price",-1)}
                        >
                          <p>High to Low </p> <BsSortDown />
                        </div>

                        <div
                          className={`sort ${
                            sort?.sort == "price" && sort?.sortDirection==1  ? "selected" : ""
                          }`}
                          onClick={() => handleClickSort("price",1)}
                        >
                          <p>Low to High </p> <BsSortDownAlt />
                        </div>

                        <div
                          className={`sort ${
                            sort?.sort == "newestFirst" ? "selected" : ""
                          }`}
                          onClick={() => handleClickSort("newestFirst",1)}
                        >
                          <p>Newest First </p> <BsSortDown />
                        </div>
                      </div>
                      <Search
                        placeholder="Search"
                        enterButton
                        
                        className="searchBar"
                        value={searchData}
                        onChange={(e)=>setSearchData(e.target.value)}
                        onSearch={onSearch}

                      />
                    </div>
                    <div className="filterTags">
                      {filterTags && (filterTags?.minDays || filterTags?.maxDays  )&& (
                        <div className="filterTag">
                          <p>
                            Days {filterTags?.minDays || "any"} - {filterTags?.maxDays ||"any"}
                          </p>
                          <AiOutlineClose
                            className="icon"
                            onClick={handleCloseDaysTag}
                          />
                        </div>
                      )}

                      {filterTags && (filterTags?.minPrice || filterTags?.maxPrice  ) && (
                        <div className="filterTag">
                          <p>
                            Price Rs.{filterTags?.minPrice || "any"} - Rs.{filterTags?.maxPrice || "any" }{" "}
                          </p>
                          <AiOutlineClose
                            className="icon"
                            onClick={handleClosePriceTag}
                          />
                        </div>
                      )}

                 
                    </div>
                  </div>
                  <div className="contentDiv">
                    <div className="mainContent grid">
                      {data?.map((trip, key) => {
                        return (
                          <TripCard key= {key} trip = {trip}/>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <DataNotFound></DataNotFound>
              )}
            </div>
          )}
          {(!data || data?.length==0 ) && <DataNotFound />}
        </>
      </section>
    </>
  );
}

export const getServerSideProps = async (context) => {
  let obj = context.query;

const queryString =  "?"+new URLSearchParams(obj).toString()


  try {
    const res = await fetchSeachTrips(queryString);
    if (res.statusCode == "10000" && res.data.trips.length > 0) {
      // const coll = await fetchCollectionNames();

      return {
        props: {
          tripData: res.data.trips,
          search: context.query.search,
          filterValues: context.query,
        },
      };
    } else {
      return {
        props: {
          collectionNames: [],
        },
      };
    }
  } catch (error) {
    return {
      props: {
        collectionNames: [],
      },
    };
  }
};



