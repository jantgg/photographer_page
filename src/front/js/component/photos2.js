import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/photos1.css";
import "../../styles/photos2.css";
import { FaTimes } from 'react-icons/fa';

const Photos2 = () => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const handleClick =()=>{
    actions.setVisible2()
  }



  return (
    <div className={`d-flex flex-column col-12 absolute-center fondo-oscuro `}
    >
    <div className={`col-9 pad-1 mx-auto margen-sup photos-h bg-black d-flex ${store.visible2 ? "scale-in-ver-center":""} `}>
    <div className="close-icon margen-sup-icon" onClick={handleClick}>
        <FaTimes />
      </div>
      <div className="col-3 d-flex flex-column h100">
        <div className="col-12 d-flex h30 ">
          <div className="col-12 mx-auto d-flex justify-content-between">
            <div className="col-6 containerphoto"><div className=" city-4"></div></div>
            <div className="col-6 containerphoto"><div className=" city-5"></div></div>
          </div>

        </div>
        <div className=" col-12 d-flex flex-column h35">
          <div className="col-12 h100 my-auto mx-auto containerphoto"><div className=" city-6"></div></div></div>
        <div className=" col-12 d-flex flex-column h35">
          <div className="col-12 h100 my-auto mx-auto containerphoto"><div className=" city-7"></div></div>
        </div>
      </div>

      <div className="col-6 d-flex flex-column h100">

        <div className=" col-12 d-flex flex-column h50">
          <div className="col-12 h100 my-auto mx-auto containerphoto">
            <div className=" city-1"></div>
          </div>
        </div>
        <div className="col-12 d-flex h50 ">
          <div className="col-12 mx-auto d-flex">
            <div className="col-6 h100 my-auto containerphoto"><div className=" city-2"></div></div>
            <div className="col-6 h100 my-auto containerphoto"><div className=" city-3"></div></div>
          </div>

        </div>


      </div>

      <div className="col-3 d-flex flex-column h100">
      <div className="col-12 d-flex h30 ">
        <div className="col-12 h100 mb-auto mx-auto containerphoto">
            <div className=" city-10"></div>
          </div></div>
        <div className="col-12 d-flex h40 ">
          <div className="col-6 mx-auto d-flex ">
            <div className="col-12 h100 mx-auto my-auto containerphoto"><div className=" city-8"></div></div>
          </div>
          <div className="col-6 mx-auto d-flex ">
            <div className="col-12 h100 mx-auto my-auto containerphoto"><div className=" city-9"></div></div>
          </div>
        </div>
        <div className="col-12 d-flex h30 "><div className="col-12 h100 mb-auto mx-auto containerphoto">
            <div className=" city-11"></div>
          </div></div>


      </div>

    </div>
  </div>
    );
};

export default Photos2;