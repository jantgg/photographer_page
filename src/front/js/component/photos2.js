import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Photos2 = () => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
  <div>


hello
  </div>
    );
};

export default Photos2;