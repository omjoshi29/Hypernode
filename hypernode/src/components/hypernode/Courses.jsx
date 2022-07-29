import React from "react";
import { useState, useEffect } from "react";
import prodstyles from "./Courses.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./loader.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchcourses,
  filtercourses,
  sortcourses,
  comparecourses,
} from "../products/redux/action";

const Products = () => {
  const navigate = useNavigate();
  const { course } = useParams();
  console.log(course);

  //get all products
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcourses(course));
  }, [course, dispatch]);

  let products = useSelector((state) => state.productsData);
  let allproducts = useSelector((state) => state.allproducts);
  let copmcourse = useSelector((state) => state.compareobj);
  console.log("obj:", copmcourse);

  const comparepage = (el) => {
    dispatch(comparecourses(el));
    navigate(`/compare`);
  };

  //filter by platform
  let obj1 = {};
  allproducts.map((el) => {
    if (obj1[el.platform] === undefined) {
      obj1[el.platform] = 1;
    } else {
      obj1[el.platform] += 1;
    }
  });
  let platforms = Object.keys(obj1);
  let numplatforms = Object.values(obj1);

  const filterbyplatform = (e) => {
    // console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      let filter = course + "/filter?platform=" + e.target.value;
      console.log(filter);
      dispatch(filtercourses(filter));
    } else {
      dispatch(fetchcourses(course));
    }
  };

  // sorting products
  const handleSort = (e) => {
    if (e.target.value == "rel") {
      dispatch(fetchcourses(course));
    } else {
      let sorter = course + "/sort?rating=" + e.target.value;
      console.log("sort", sorter);
      dispatch(sortcourses(sorter));
    }
  };

  //pagination
  const [page, setpage] = React.useState(1);
  let prodarr = products;
  // const paginate = () => {
  prodarr = products.slice((page - 1) * 8, 8 * (page - 1) + 8);
  // };

  let last = Math.ceil(products.length / 8);
  let pageno = [];
  for (let i = 1; i <= last; i++) {
    pageno.push(i);
  }

  const decrpage = () => {
    if (page > 1) {
      setpage(page - 1);
    }
  };

  const incrpage = () => {
    if (page < last) {
      setpage(page + 1);
    }
  };

  return (
    <>
      {/* LOADER */}
      {products.length === 0 ? (
        <div id="loaderdiv">
          <div className="loadingio-spinner-spinner-hwqa8bbtkw9">
            <div className="ldio-2ho1tpded2u">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* PRODUCT PAGE */}
          <div className={prodstyles.prodpagediv}>
            {/* FILTERS */}
            <div className={prodstyles.filterdiv}>
              <div
                style={{
                  padding: "15px",
                  borderBottom: "1px solid silver",
                  fontWeight: "bold",
                  fontSize: "23px",
                }}
              >
                FILTER
              </div>

              {/* FILTER BY BRANDS */}
              <div
                style={{ padding: "15px", borderBottom: "1px solid silver" }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  PLATFORMS
                </div>
                {platforms.map((el, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "15px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          value={el}
                          onChange={filterbyplatform}
                          style={{ width: "15px", height: "15px" }}
                        />
                        <p style={{ paddingLeft: "10px" }}>{el}</p>
                      </div>
                      <p>{numplatforms[i]}</p>
                    </div>
                  );
                })}
              </div>

              {/* FILTER BY DISCOUNTS */}
              <div style={{ padding: "15px" }}></div>
            </div>

            {/* PRODUCTS */}
            <div className={prodstyles.mainprodcontainer}>
              <div className={prodstyles.prodtopdiv}>
                <div style={{ fontSize: "24px", lineHeight: "34px" }}>
                  All Courses
                </div>

                {/* SORTING PRODUCTS */}
                <div className={prodstyles.prodsortdiv}>
                  <p>Sort By &nbsp;</p>
                  <div>
                    <select
                      onChange={handleSort}
                      className={prodstyles.sortselect}
                    >
                      <option value="rel">Relevance</option>
                      <option value="rlth">Rating: Low to High</option>
                      <option value="rhtl">Rating: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* MAPPING PRODUCTS */}
              <div className={prodstyles.prodContainer}>
                {prodarr.map((el, i) => {
                  return (
                    <div key={i} className={prodstyles.prodBox}>
                      <h3
                        className={prodstyles.prodName}
                        onClick={() => {
                          navigate(`/products/${el._id}`);
                        }}
                      >
                        {el.name}
                      </h3>
                      <p className={prodstyles.prodDesc}>
                        Certificate:&nbsp;{el.certificate}
                      </p>

                      <div className={prodstyles.ratingDiv}>
                        <div>{el.rating}&nbsp;★</div>
                      </div>

                      <div className={prodstyles.ratingDiv}>
                        <p>By&nbsp;{el.teacher}&nbsp;|</p>
                        <p id={prodstyles.discount}>
                          Platform:&nbsp;{el.platform}
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p
                          style={
                            el.price == "Free"
                              ? { backgroundColor: "lightgreen" }
                              : { backgroundColor: "lightcoral" }
                          }
                          className={prodstyles.priceDiv}
                        >
                          {el.price}
                        </p>
                        <button
                          style={{
                            backgroundColor: "linen",
                            padding: "10px",
                            border: "none",
                            fontWeight: "bold",
                            borderRadius: "10px",
                            cursor: "pointer",
                          }}
                          onClick={() => comparepage(el)}
                        >
                          COMPARE
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* PAGINATION */}
              <div
                style={{
                  backgroundColor: "white",
                  boxShadow: "rgba(0, 0, 0, 0.07) 0px 0px 7px 0px",
                }}
              >
                <div className={prodstyles.pagination}>
                  <div onClick={decrpage} className={prodstyles.othernum}>
                    Previous
                  </div>
                  {pageno.map((el) => {
                    return (
                      <div>
                        {el == page ? (
                          <div className={prodstyles.numcolor}>{el}</div>
                        ) : (
                          <div
                            onClick={() => setpage(el)}
                            className={prodstyles.othernum}
                          >
                            {el}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div onClick={incrpage} className={prodstyles.othernum}>
                    Next
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
