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
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
            </div>
            <button className="card-button">
                Get the service
            </button>
        </div>

    );
};

export default Card2;