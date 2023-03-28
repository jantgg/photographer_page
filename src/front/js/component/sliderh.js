import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const SilderH = ({ data, groupSize }) => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide slider-size-inside centro-texto"
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
        <h1 className="navbars col-12 name-size"> JantGG Photographer</h1>
        <div className="carousel-item active  img-nat centro-texto">
          {" "}
          <div className="row justify-content-center ptop">
            <button
              className="carousel-control-prev black left-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="black" aria-hidden="true">
                <i class="fa-solid fa-chevron-left"></i>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <h1 className=" titles col-3">Landscape</h1>
            <button
              className="carousel-control-next black right-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="black " aria-hidden="true">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="carousel-item img-city centro-texto">
          <div className="row justify-content-center ptop ">
            <button
              className="carousel-control-prev black left-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="black" aria-hidden="true">
                <i class="fa-solid fa-chevron-left"></i>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <h1 className=" titles col-3">City</h1>
            <button
              className="carousel-control-next black right-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="black " aria-hidden="true">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="carousel-item img-por centro-texto">
          <div className="row justify-content-center ptop ">
            <button
              className="carousel-control-prev black left-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="black" aria-hidden="true">
                <i class="fa-solid fa-chevron-left"></i>
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <h1 className=" titles col-3">Portrait</h1>
            <button
              className="carousel-control-next black right-button "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="black " aria-hidden="true">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SilderH;
