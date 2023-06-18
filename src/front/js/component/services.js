import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/services.css";
import "../../styles/photos1.css";
import me from '../images/pexels-atahan-demir-16166521.jpg';

const Services = ({ data, groupSize }) => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex flex-column">
      <div className="col-9 serviceh mx-auto service-top d-flex">
        <div className="col-6 d-flex">
          <div className="col-4"></div>
          <div className="col-8 h100 pe-3 image-container"> <img src={me} alt="Background Image" className="img-style" /></div>
        </div>
        <div className="col-6 d-flex white ps-3">
          <div className="col-8 "> 
          <h1 className="name-size">Hi,<br></br>It's Juan Antonio Gomez</h1>
          <p className="text-size"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a consequat ipsum. Maecenas vel tincidunt sem. 
            Nam lacinia, arcu sit amet lacinia porta, odio ipsum rhoncus enim, id vestibulum tellus urna eget arcu. 
            Integer viverra risus tristique mi condimentum sodales. Sed tristique tellus nec neque vehicula, nec sodales risus porttitor. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Pellentesque quis turpis at diam vulputate lacinia at egestas turpis. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
          <div></div>
          </div>
         
        </div>

      </div>
    </div>
  );
};

export default Services;
