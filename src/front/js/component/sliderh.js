import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Photos1 from "../component/photos1.js";
import Photos2 from "../component/photos2.js";
import Photos3 from "../component/photos3.js";

const SilderH = ({ data, groupSize }) => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context); 
  const isDesktop = window.innerWidth >= 1000;

  const handleClick1 =()=>{
    actions.setVisible1()
  }
  const handleClick2 =()=>{
    actions.setVisible2()
  }
  const handleClick3 =()=>{
    actions.setVisible3()
  }




  return (
    <div
      id="carouselExampleIndicators"
      className= {`carousel slide slider-size-inside centro-texto padre`}
    >
      {/* <div className="carousel-indicators black">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div> */}
      <div className="carousel-inner ">
        <h1 className= {`navbars col-12 name-size ${isDesktop ? '' : ''}`} >
           JantGG Gallery</h1>
        <div
        className= {`carousel-item active centro-texto img-nat `}
        >
          {" "}
          <div
            className={`ptop d-flex`}
          >
          <div className={`row justify-content-center col-12`}>
            <button
              className="carousel-control-prev black left-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="black" aria-hidden="true">
                <i className="fa-solid fa-chevron-left"></i>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <h1 className={` titles pointer ${isDesktop ? "col-3" : " col-6"} `} onClick={handleClick1}>
              Landscape
            </h1>
            <button
              className="carousel-control-next black right-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="black " aria-hidden="true">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {store.visible1 && <Photos1 />}
          </div>
        </div>
        <div className= {`carousel-item centro-texto img-city `} >
        <div
            className={`ptop d-flex`}
          >
          <div className={`row justify-content-center col-12 `}>
            <button
              className="carousel-control-prev black left-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="black" aria-hidden="true">
                <i className="fa-solid fa-chevron-left"></i>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <h1 className={` titles pointer ${isDesktop ? "col-3" : " col-6"}` } onClick={handleClick2}>City</h1>
            <button
              className="carousel-control-next black right-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="black " aria-hidden="true">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {store.visible2 && <Photos2 />}
          </div>
        </div>
        <div  className= {`carousel-item centro-texto img-por `} >
          <div className={`ptop d-flex`}>
          <div
            className={`row justify-content-center col-12`}
          >
            <button
              className="carousel-control-prev black left-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="black" aria-hidden="true">
                <i className="fa-solid fa-chevron-left"></i>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <h1 className={` titles pointer ${isDesktop ? "col-3" : " col-6"}` } onClick={handleClick3}>Portrait</h1>
            <button
              className="carousel-control-next black right-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="black " aria-hidden="true">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {store.visible3 && <Photos3 />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SilderH;
