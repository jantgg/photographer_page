import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/services.css";
import "../../styles/form.css";
import Card from "../component/card.js"; 2
import Card2 from "../component/card2.js";
import Card3 from "../component/card3.js";

const Form = () => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);


  return (
    <div className="d-flex">
      <div className="col-8 mx-auto form-top d-flex ">

        <div className="col-1 h100 my-auto d-flex flex-column h100">
          <div className="col-12  d-flex">
            <div className="col-6 py-3  h100"></div>
            <div className="col-6 py-3  outline-borderl h100 outline-bordert"></div>
          </div>
          <a
            className="btn btn-outline-light col-7 btn-floating col-4 pt-2 px-2 bg-icons mx-auto px-3"
            style={{ border: "1px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <div className="col-12  d-flex">
            <div className="col-6 py-3  h100"></div>
            <div className="col-6 py-3  outline-borderl h100"></div>
          </div>
          <a
            className="btn btn-outline-light col-7 btn-floating col-4 pt-2 px-2 bg-icons mx-auto"
            style={{ border: "1px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <div className="col-12  d-flex">
            <div className="col-6 py-3  h100"></div>
            <div className="col-6 py-3  outline-borderl h100"></div>
          </div>
          <a
            className="btn btn-outline-light col-7 btn-floating col-4 pt-2 px-2 bg-icons mx-auto"
            style={{ border: "1px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>
          <div className="col-12  d-flex">
            <div className="col-6 py-3  h100"></div>
            <div className="col-6 py-3  outline-borderl h100"></div>
          </div>
          <a
            className="btn btn-outline-light col-7 btn-floating col-4 pt-2 px-2 bg-icons mx-auto"
            style={{ border: "1px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <div className="col-12  d-flex">
            <div className="col-6 py-3  h100"></div>
            <div className="col-6 py-3  outline-borderl h100"></div>
          </div>
          <a
            className="btn btn-outline-light col-7 btn-floating col-4 pt-2 px-2 bg-icons mx-auto"
            style={{ border: "1px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <div className="col-12  d-flex">
            <div className="col-6 py-3  h100"></div>
            <div className="col-6 py-3  outline-borderl h100"></div>
          </div>
          <a
            className="btn btn-outline-light col-7 btn-floating col-4 pt-2 px-2 bg-icons mx-auto"
            style={{ border: "1px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
          <div className="col-12 d-flex">
            <div className="col-6 py-3  h100"></div>
            <div className="col-6 py-3  outline-borderl h100 outline-borderb"></div>
          </div>

        </div>
        <div className="col-10 paddingy outline-bordert outline-borderb d-flex flex-column">

          <div className="col-12 imgprops h100">
            <div className="h100 pt-5 paddingx">
              <div className="white work-size mt-4 text-shadow">Let's work together</div>
              <div className="white text-size me-3 text-shadow" style={{ textAlign: 'justify' }}>
                If you have something specific in mind or would like the input of a professional photographer, I invite you to get in direct contact at +34 688-43-32-12. Feel free to reach out for any inquiries or to discuss your photography needs. I'll be more than happy to assist you.
              </div>
              <div className="d-flex mx-auto col-10 pt-2 mt-5">
                <div className="col-4 mx-auto"> <Card /></div>
                <div className="col-4 mx-auto"> <Card2 /></div>
                <div className="col-4 mx-auto"> <Card3 /></div>

              </div>
            </div>
          </div>
        </div>

        <div className="col-1">
          <div className="col-12 h100 d-flex">
            <div className="col-6 py-3  h100 outline-bordert outline-borderb"></div>
            <div className="col-6 py-3  outline-borderl h100 "></div>
          </div>
        </div>


      </div>
    </div >

  );
};

export default Form;
