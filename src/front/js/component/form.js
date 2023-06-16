import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/services.css";
import "../../styles/form.css";

const Form = ({ data, groupSize }) => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
   


   <div className="d-flex flex-column img-fondo">
     <div className="col-11 row mx-auto">
       <div className="col-12 mt"></div>{" "}
       <div
         className={`col-8  col-xxl-4 col-xl-4 col-lg-6 col-m-8 px-5 mx-4 mt-5 card-service d-flex flex-column centro-texto mx-auto ${
           store.roll === 3 ? "slide-in-bottom " : null
         }`}
       >
         <h1 className="mt-2">Get in Contact</h1>
         <div className="borderb col-6 mx-auto"></div>
         <div className="form__group field mx-auto col-6">
           <input
             required=""
             placeholder="Name"
             className="form__field"
             type="input"
           />
           <label class="form__label" for="name">
             E-mail
           </label>
         </div>
         <div className="form__group field mx-auto col-6">
           <textarea
             required=""
             placeholder="Message"
             className="form__field"
             rows="4"
           />
           <label class="form__label" for="message">
             Message
           </label>
         </div>
         <button className="buttonc col-2 mx-auto mt-auto mb-2">Send</button>
       </div>
     </div>
   </div>
  );
};

export default Form;
