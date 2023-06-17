import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/photos1.css";
import "../../styles/photos2.css";
import { FaTimes } from 'react-icons/fa';

const Photos1 = () => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const handleClick = () => {
    actions.setVisible1()
  }



  return (
    <div className={`d-flex flex-column col-12 absolute-center fondo-oscuro `}
    >
      <div className={`col-9 pad-1 mx-auto margen-sup photos-h bg-black d-flex ${store.visible1 ? "scale-in-ver-center" : ""} `}>
        <div className="close-icon margen-sup-icon" onClick={handleClick}>
          <FaTimes />
        </div>
        <div className="col-8 d-flex flex-column h100">
          <div className="col-12 d-flex h40">
              <div className="col-4 containerphoto"><div className=" land-4"></div></div>
              <div className="col-4 containerphoto"><div className=" land-5"></div></div>
              <div className="col-4 containerphoto"><div className=" land-6"></div></div>
          </div>
          <div className=" col-12 d-flex h30">
            <div className="col-6 h100 my-auto mx-auto containerphoto">
              <div className=" land-7"></div>
            </div>
            <div className="col-6 h100 my-auto mx-auto containerphoto">
              <div className=" land-8"></div>
            </div>
          </div>
          <div className=" col-12 d-flex h30">
            <div className="col-6 h100 my-auto mx-auto containerphoto">
              <div className=" land-9">
              </div>
            </div>
            <div className="col-6 h100 my-auto mx-auto containerphoto">
              <div className=" land-10">
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex flex-column h100">

          <div className=" col-12 d-flex flex-column h50">
            <div className="col-12 h100 my-auto mx-auto containerphoto">
              <div className=" land-1"></div>
            </div>
          </div>
          <div className="col-12 d-flex h50 ">
            <div className="col-12 mx-auto d-flex">
              <div className="col-6 h100 my-auto containerphoto"><div className=" land-2"></div></div>
              <div className="col-6 h100 my-auto containerphoto"><div className=" land-3"></div></div>
            </div>

          </div>


        </div>

      </div>
    </div>
  );
};

export default Photos1;