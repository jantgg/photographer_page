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
    <div className="d-flex flex-column img-fondo  ">
      <div className="col-10 py-2 mx-auto margen-sup photos-h bg-black d-flex ">

        <div className="col-3 d-flex flex-column h100">
          <div className="col-12 d-flex h30 ">
            <div className="col-11 mx-auto d-flex justify-content-between">
              <div className="w47 h95 my-auto containerphoto"><div className=" land-1"></div></div>
              <div className="w47 h95 my-auto containerphoto"><div className=" land-1"></div></div>
            </div>

          </div>
          <div className=" col-12 d-flex flex-column h35">
            <div className="col-11 h95 my-auto mx-auto containerphoto"><div className=" land-1"></div></div></div>
          <div className=" col-12 d-flex flex-column h35">
            <div className="col-11 h95 my-auto mx-auto containerphoto"><div className=" land-1"></div></div>
          </div>
        </div>

        <div className="col-6 d-flex flex-column h100">

          <div className=" col-12 d-flex flex-column h50">
            <div className="col-12 h95 my-auto mx-auto containerphoto">
              <div className=" land-1"></div>
            </div>
          </div>
          <div className="col-12 d-flex h50 ">
            <div className="col-12 mx-auto d-flex justify-content-between">
              <div className="w48 h95 my-auto containerphoto"><div className=" land-1"></div></div>
              <div className="w48 h95 my-auto containerphoto"><div className=" land-1"></div></div>
            </div>

          </div>


        </div>

        <div className="col-3 d-flex flex-column h100">
          <div className="col-12 d-flex h60 justify-content-between">
            <div className="w47 mx-auto d-flex justify-content-between">
              <div className="col-11 h95 mx-auto my-auto containerphoto"><div className=" land-1"></div></div>
            </div>
            <div className="w47 mx-auto d-flex justify-content-between">
              <div className="col-11 h95 mx-auto my-auto containerphoto"><div className=" land-1"></div></div>
            </div>
          </div>
          <div className="col-12 d-flex h20 "><div className="w94 h95 mb-auto mx-auto containerphoto">
              <div className=" land-1"></div>
            </div></div>
          <div className="col-12 d-flex h20 "><div className="w94 h95 mb-auto mx-auto containerphoto">
              <div className=" land-1"></div>
            </div></div>

        </div>

      </div>
    </div>
  );
};

export default Services;
