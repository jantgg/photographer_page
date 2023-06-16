import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/services.css";
import "../../styles/photos1.css";

const Services = ({ data, groupSize }) => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex flex-column">
    <div className="col-xxl-8 col-xl-10 p-2 mx-auto margen-sup photos-h bg-black d-flex">
      <div className="col-xxl-3 col-xl-4 col-4 d-flex flex-column h100">
        <div className="col-12 d-flex h30 ">
          <div className="col-12 mx-auto d-flex justify-content-between">
            <div className="col-6 containerphoto"><div className=" land-1"></div></div>
            <div className="col-6 containerphoto"><div className=" land-1"></div></div>
          </div>

        </div>
        <div className=" col-12 d-flex flex-column h35">
          <div className="col-12 h100 my-auto mx-auto containerphoto"><div className=" land-1"></div></div></div>
        <div className=" col-12 d-flex flex-column h35">
          <div className="col-12 h100 my-auto mx-auto containerphoto"><div className=" land-1"></div></div>
        </div>
      </div>

      <div className="col-xxl-6 col-xl-4 col-4 d-flex flex-column h100">

        <div className=" col-12 d-flex flex-column h50">
          <div className="col-12 h100 my-auto mx-auto containerphoto">
            <div className=" land-1"></div>
          </div>
        </div>
        <div className="col-12 d-flex h50 ">
          <div className="col-12 mx-auto d-flex">
            <div className="col-6 h100 my-auto containerphoto"><div className=" land-1"></div></div>
            <div className="col-6 h100 my-auto containerphoto"><div className=" land-1"></div></div>
          </div>

        </div>


      </div>

      <div className="col-xxl-3 col-xl-4 col-4 d-flex flex-column h100">
      <div className="col-12 d-flex h30 ">
        <div className="col-12 h100 mb-auto mx-auto containerphoto">
            <div className=" land-1"></div>
          </div></div>
        <div className="col-12 d-flex h40 ">
          <div className="col-6 mx-auto d-flex ">
            <div className="col-12 h100 mx-auto my-auto containerphoto"><div className=" land-1"></div></div>
          </div>
          <div className="col-6 mx-auto d-flex ">
            <div className="col-12 h100 mx-auto my-auto containerphoto"><div className=" land-1"></div></div>
          </div>
        </div>
        <div className="col-12 d-flex h30 "><div className="col-12 h100 mb-auto mx-auto containerphoto">
            <div className=" land-1"></div>
          </div></div>


      </div>

    </div>
  </div>
  );
};

export default Services;
