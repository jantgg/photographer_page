import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/services.css";

const Services = ({ data, groupSize }) => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex flex-column img-fondo">
      <div className="d-flex justify-content-center ">
        {" "}
        <div className="col-2 mx-4 fondo card-service d-flex flex-column centro-texto">
          <h1 className="mt-2">Landscape</h1>
          <div className="borderb col-6 mx-auto my-4 mb-5"></div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            imperdiet ante sit amet interdum iaculis. Pellentesque non faucibus
            erat. Sed pulvinar est id dolor tincidunt sodales.
          </p>
          <button className="buttonc col-5 mx-auto mt-auto mb-2">
            Get the service
          </button>
        </div>
        <div className="col-2 mx-4 fondo card-service2 d-flex flex-column centro-texto">
          <h1 className="mt-2">City</h1>
          <div className="borderb col-6 mx-auto my-4 mb-5"></div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            imperdiet ante sit amet interdum iaculis. Pellentesque non faucibus
            erat. Sed pulvinar est id dolor tincidunt sodales.
          </p>
          <button className="buttonc col-5 mx-auto mt-auto mb-2">
            Get the service
          </button>
        </div>
        <div className="col-2 mx-4 fondo card-service3 d-flex flex-column centro-texto">
          <h1 className="mt-2">Portrait</h1>
          <div className="borderb col-6 mx-auto my-4 mb-5"></div>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            imperdiet ante sit amet interdum iaculis. Pellentesque non faucibus
            erat. Sed pulvinar est id dolor tincidunt sodales.
          </p>
          <button className="buttonc col-5 mx-auto mt-auto mb-2">
            Get the service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
