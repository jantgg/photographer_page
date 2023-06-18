import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/services.css";
import "../../styles/form.css";
import phone from '../images/pexels-chepté-cormani-1416530.jpg';

const Form = ({ data, groupSize }) => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex">
      <div className="col-9 serviceh mx-auto form-top d-flex">
        <div className="col-2"></div>
        <div className=" col-6 d-flex flex-column">
          <div className="col-12 mx-auto h70 image-container2 ">
            <div className=" inside">
              <h1 className="name-size ps-5 pt-4">We can work together</h1>
              <p className="text-size ps-5 pt-1">Send an e-mail to: jantgg.works@contact.es
              </p>
              <div className="ms-5 mt-4">
                <a
                  className="btn btn-outline-light btn-floating mx-2 px-3"
                  style={{ border: "3px solid white", borderRadius: "0", fontSize: "1.5vw" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating mx-2"
                  style={{ border: "3px solid white", borderRadius: "0", fontSize: "1.5vw" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating mx-2"
                  style={{ border: "3px solid white", borderRadius: "0", fontSize: "1.5vw" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating mx-2"
                  style={{ border: "3px solid white", borderRadius: "0", fontSize: "1.5vw" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating mx-2"
                  style={{ border: "3px solid white", borderRadius: "0", fontSize: "1.5vw" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating mx-2"
                  style={{ border: "3px solid white", borderRadius: "0", fontSize: "1.5vw" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>

            </div>
            <img src={phone} alt="Background Image" className="img-style imgprops" /></div>
          <div className="col-12 h50 bg-black"> HELOOO</div>
        </div>


      </div>


    </div>
  );
};

export default Form;
