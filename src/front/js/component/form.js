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
      <div className="col-8 serviceh mx-auto form-top d-flex imgprops">

        <div className="col-2 d-flex flex-column">

          <a
            className="btn btn-outline-light btn-floating my-2 col-4 py-1 px-2 bg-icons mx-auto mt-5 px-3"
            style={{ border: "3px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating my-2 col-4 py-1 px-2 bg-icons mx-auto"
            style={{ border: "3px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating my-2 col-4 py-1 px-2 bg-icons mx-auto"
            style={{ border: "3px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating my-2 col-4 py-1 px-2 bg-icons mx-auto"
            style={{ border: "3px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating my-2 col-4 py-1 px-2 bg-icons mx-auto"
            style={{ border: "3px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            className="btn btn-outline-light btn-floating my-2 col-4 py-1 px-2 bg-icons mx-auto"
            style={{ border: "3px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>

        </div>
        <div className="col-8">
          <div className="h-50 pt-5">
            <div className="white work-size mt-4">Let's work together</div>
            <div className="white text-size me-3">
              If you have something specific in mind or would like the input of a professional photographer, I invite you to get in direct contact at +34 688-43-32-12. Feel free to reach out for any inquiries or to discuss your photography needs. I'll be more than happy to assist you.</div>

          </div>
          <div className="h-50 d-flex">
            <div className="col-4 mx-3"> <Card /></div>
            <div className="col-4 mx-3"> <Card2 /></div>
            <div className="col-4 mx-3"> <Card3 /></div>

          </div>
        </div>
        <div className="col-2"></div>


      </div>
    </div >

  );
};

export default Form;
