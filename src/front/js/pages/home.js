import React, { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-scroll";
import { FaCircle } from "react-icons/fa";
import SimpleSlider from "../component/slider.js";
import SliderH from "../component/sliderh.js";
import Services from "../component/services.js";
import Form from "../component/form.js";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [activeSection, setActiveSection] = useState(1);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const div1Pos = div1Ref.current.getBoundingClientRect();
      const div2Pos = div2Ref.current.getBoundingClientRect();
      const div3Pos = div3Ref.current.getBoundingClientRect();

      if (div1Pos.top >= 0 && div1Pos.bottom <= windowHeight) {
        setActiveSection(1);
        actions.setRoll(1);
      } else if (div2Pos.top >= 0 && div2Pos.bottom <= windowHeight) {
        setActiveSection(2);
        actions.setRoll(2);
      } else if (div3Pos.top >= 0 && div3Pos.bottom <= windowHeight) {
        setActiveSection(3);
        actions.setRoll(3);
      }
    }
  }, []);

  useEffect(() => {
    window.removeEventListener("wheel", handleWheelScroll);
    window.addEventListener("wheel", handleWheelScroll, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheelScroll, {
        passive: false,
      });
    };
  }, [activeSection]);

  function handleWheelScroll(event) {
    event.preventDefault();
    if (event.deltaY > 0) {
      if (activeSection === 1) {
        handleClickScroll2();
      } else if (activeSection === 2) {
        handleClickScroll3();
      }
    } else if (event.deltaY < 0) {
      if (activeSection === 2) {
        handleClickScroll1();
      } else if (activeSection === 3) {
        handleClickScroll2();
      }
    }
  }

  const handleClickScroll1 = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView();
    }
    setActiveSection(1);
    actions.setRoll(1);
  };
  const handleClickScroll2 = () => {
    const element = document.getElementById("section-2");
    if (element) {
      element.scrollIntoView();
    }
    setActiveSection(2);
    actions.setRoll(2);
  };

  const handleClickScroll3 = () => {
    const element = document.getElementById("section-3");
    if (element) {
      element.scrollIntoView();
    }
    setActiveSection(3);
    actions.setRoll(3);
  };

  return (
    <div onWheel={handleWheelScroll} className="d-flex flex-column home ">
      <div className="d-flex flex-column  indicators me-5 text-white">
        {" "}
        <button
          className={`btn-scroll indicator text-white py-2 ${
            activeSection === 1 ? "selected" : ""
          }`}
          onClick={handleClickScroll1}
        >
          {activeSection === 1 ? <div>My work</div> : <div>My work</div>}
        </button>
        <button
          className={`btn-scroll indicator text-white py-2 ${
            activeSection === 2 ? "selected" : ""
          }`}
          onClick={handleClickScroll2}
        >
          {activeSection === 2 ? <div>Services</div> : <div>Services</div>}
        </button>
        <button
          className={`btn-scroll indicator text-white py-2 ${
            activeSection === 3 ? "selected" : ""
          }`}
          onClick={handleClickScroll3}
        >
          {activeSection === 3 ? <div>Contact</div> : <div>Contact</div>}
        </button>
      </div>
      <div ref={div1Ref} id="section-1" className="section-1">
        <div className="slider-size">
          <SliderH />
        </div>
      </div>
      <div ref={div2Ref} id="section-2" className="section-2">
        <Services />
      </div>
      <div ref={div3Ref} id="section-3" className="section-3">
        <Form />
      </div>
      <div ref={div4Ref} id="section-4" className="section-4"></div>
    </div>
  );
};
