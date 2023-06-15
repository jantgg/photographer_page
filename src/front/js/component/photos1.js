import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Photos1 = () => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
  <div className="col-10 bg-black">


hello
  </div>
    );
};

export default Photos1;