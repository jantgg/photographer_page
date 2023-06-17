import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/photos1.css";
import "../../styles/photos3.css";
import { FaTimes } from 'react-icons/fa';

const Photos3 = () => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const handleClick =()=>{
    actions.setVisible3()
  }



  return (
    <div className={`d-flex flex-column col-12 absolute-center fondo-oscuro `}
    >
    <div className={`col-9 pad-1 mx-auto margen-sup photos-h bg-black d-flex ${store.visible3 ? "scale-in-ver-center":""} `}>
      <div className="close-icon margen-sup-icon" onClick={handleClick}>
          <FaTimes />
        </div>

      <div className="col-7 d-flex flex-column h100">
        <div className="col-12 d-flex h50 ">
          <div className="col-12 mx-auto d-flex justify-content-between">
            <div className="col-4 containerphoto"><div className=" port-1"></div></div>
            <div className="col-4 containerphoto"><div className=" port-2"></div></div>
            <div className="col-4 containerphoto"><div className=" port-3"></div></div>
          </div>

        </div>
        <div className=" col-12 d-flex h50">
          <div className="col-6 h100 my-auto mx-auto containerphoto">
            <div className=" port-4"></div>
          </div>
          <div className="col-6 h100 my-auto mx-auto containerphoto">
            <div className=" port-5"></div>
          </div>
        </div>
      </div>

      <div className="col-5 d-flex flex-column h100">

        <div className=" col-12 d-flex flex-column h50">
          <div className="col-12 h100 my-auto mx-auto containerphoto">
            <div className=" port-6"></div>
          </div>
        </div>

        <div className="col-12 d-flex h50 ">
          <div className="col-6 mx-auto d-flex">
            <div className="col-12 h100 my-auto containerphoto"><div className=" port-7"></div></div>

          </div>
          <div className="col-6 mx-auto d-flex flex-column">
            <div className="col-12 h100 my-auto containerphoto"><div className=" port-8"></div></div>
          </div>


        </div>


      </div>


    </div>
  </div>
    );
};

export default Photos3;