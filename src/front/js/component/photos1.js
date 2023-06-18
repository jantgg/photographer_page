import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/photos1.css";
import "../../styles/photos2.css";
import { FaTimes } from 'react-icons/fa';
import land1 from '../images/lands/pexels-eberhard-grossgasteiger-2437291.jpg';
import land2 from '../images/lands/pexels-tomáš-malík-3022417.jpg';
import land3 from '../images/lands/pexels-trace-hudson-2613946.jpg';
import land4 from '../images/lands/pexels-eberhard-grossgasteiger-1287145.jpg';
import land5 from '../images/lands/pexels-tyler-lastovich-808465.jpg';
import land6 from '../images/lands/pexels-aliona-&-pasha-3892172.jpg';
import land7 from '../images/lands/pexels-matthew-montrone-1324803.jpg';
import land8 from '../images/lands/pexels-ian-beckley-2440021.jpg';
import land9 from '../images/lands/pexels-eberhard-grossgasteiger-2310641.jpg';
import land10 from '../images/lands/pexels-eberhard-grossgasteiger-1366919.jpg';




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
            <div className="col-4 containerphoto"><img src={land1} alt="Background Image" className="img-style"/></div>
            <div className="col-4 containerphoto"><img src={land2} alt="Background Image" className="img-style"/></div>
            <div className="col-4 containerphoto"><img src={land3} alt="Background Image" className="img-style"/></div>
          </div>
          <div className=" col-12 d-flex h30">
            <div className="col-6 h100 my-auto mx-auto containerphoto">
            <img src={land4} alt="Background Image" className="img-style"/>
            </div>
            <div className="col-6 h100 my-auto mx-auto containerphoto">
            <img src={land5} alt="Background Image" className="img-style"/>
            </div>
          </div>
          <div className=" col-12 d-flex h30">
            <div className="col-6 h100 my-auto mx-auto containerphoto">
            <img src={land6} alt="Background Image" className="img-style"/>
            </div>
            <div className="col-6 h100 my-auto mx-auto containerphoto">
            <img src={land7} alt="Background Image" className="img-style"/>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex flex-column h100">

          <div className=" col-12 d-flex flex-column h50">
            <div className="col-12 h100 my-auto mx-auto containerphoto">
            <img src={land8} alt="Background Image" className="img-style"/>
            </div>
          </div>
          <div className="col-12 d-flex h50 ">
            <div className="col-12 mx-auto d-flex">
              <div className="col-6 h100 my-auto containerphoto"><img src={land9} alt="Background Image" className="img-style"/></div>
              <div className="col-6 h100 my-auto containerphoto"><img src={land10} alt="Background Image" className="img-style"/></div>
            </div>

          </div>


        </div>

      </div>
    </div>
  );
};

export default Photos1;