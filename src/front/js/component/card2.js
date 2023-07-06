import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/services.css";
import "../../styles/form.css";
import "../../styles/card.css";


const Card2 = () => {
    const Navigate = useNavigate();
    const { store, actions } = useContext(Context);

    return (
        <div className="card">
            <div className="card-content">
                <div className="title">Street Sesion</div>
                <div className="price">$29.99</div>

            </div>

        </div>

    );
};

export default Card2;