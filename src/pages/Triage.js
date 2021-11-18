import React, { useState } from "react";
import { PatinatsModule } from "../components/Modules";
import { useParams } from "react-router-dom";
import { NavLink, useSearchParams } from "react-router-dom";

  let fillData = JSON.parse(localStorage.getItem("patinats"));

 const Triage = () => {
const pa=useParams();
console.log({pa})
  return (
    <>
      {/* <div className="container"> */}
        {fillData.map((element, idx) => {
          return (
            <NavLink to={`/Triage/${element.idN}`} key={idx}>
              {element.idN}
            </NavLink>
          );
        })}
      {/* </div> */}
      {/* <Outlet/> */}
    </>
  );
};

export default Triage;
