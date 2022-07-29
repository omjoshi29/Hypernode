import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./compare.css";
import { useState } from "react";

const Compare = () => {
  let copmcourse = useSelector((state) => state.compareobj);
  let products = useSelector((state) => state.productsData);
  console.log("obj:", products);

  const [compobj, setcompobj] = useState(null);

  return (
    <>
      <h1
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
      >
        COMPARE COURSES
      </h1>
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <table
          style={{
            display: "flex",
            width: "fit-content",
            margin: "auto",
            gap: "25px",
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
            </tr>
            <tr>
              <th>Platform</th>
            </tr>
            <tr>
              <th>Price</th>
            </tr>
            <tr>
              <th>Certificate</th>
            </tr>
            <tr>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{copmcourse.name}</td>
            </tr>
            <tr>
              <td>{copmcourse.platform}</td>
            </tr>
            <tr>
              <td>{copmcourse.price}</td>
            </tr>
            <tr>
              <td>{copmcourse.certificate}</td>
            </tr>
            <tr>
              <td>{copmcourse.rating}</td>
            </tr>
          </tbody>
          {compobj === null ? (
            <></>
          ) : (
            <>
              <tbody>
                <tr>
                  <td>{compobj.name}</td>
                </tr>
                <tr>
                  <td>{compobj.platform}</td>
                </tr>
                <tr>
                  <td>{compobj.price}</td>
                </tr>
                <tr>
                  <td>{compobj.certificate}</td>
                </tr>
                <tr>
                  <td>{compobj.rating}</td>
                </tr>
              </tbody>
            </>
          )}
        </table>
      </div>

      <div className="compdiv">
        {products.map((el) => {
          return (
            <div key={el._id} className="compbox">
              <p>{el.name}</p>
              <button onClick={() => setcompobj(el)}>COMPARE</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Compare;
