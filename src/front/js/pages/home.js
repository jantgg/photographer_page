import React, { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-scroll";
import { FaCircle } from "react-icons/fa";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [activeSection, setActiveSection] = useState(1);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  //   useEffect(() => {
  //     function handleScroll() {
  //       const windowHeight = window.innerHeight;
  //       const div1Pos = div1Ref.current.getBoundingClientRect();
  //       const div2Pos = div2Ref.current.getBoundingClientRect();
  //       const div3Pos = div3Ref.current.getBoundingClientRect();

  //       if (div1Pos.top >= 0 && div1Pos.bottom <= windowHeight) {
  //     setActiveSection(1);
  //       } else if (div2Pos.top >= 0 && div2Pos.bottom <= windowHeight) {
  //      setActiveSection(2);
  //       } else if (div3Pos.top >= 0 && div3Pos.bottom <= windowHeight) {
  //      setActiveSection(3);
  //       }
  //     }

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheelScroll, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheelScroll, {
        passive: false,
      });
    };
  }, []);

  function handleWheelScroll(event) {
    event.preventDefault();
    if (event.deltaY > 0) {
      if (activeSection === 1) {
        handleClickScroll2();
      } else {
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
  };
  const handleClickScroll2 = () => {
    const element = document.getElementById("section-2");
    if (element) {
      element.scrollIntoView();
    }
    setActiveSection(2);
  };

  const handleClickScroll3 = () => {
    const element = document.getElementById("section-3");
    if (element) {
      element.scrollIntoView();
    }
    setActiveSection(3);
  };

  return (
    <div onWheel={handleWheelScroll} className="d-flex flex-column home ">
      <div className="d-flex flex-column col-1 indicators me-3">
        {" "}
        <button
          className={`btn-scroll indicator ${
            activeSection === 1 ? "selected" : ""
          }`}
          onClick={handleClickScroll1}
        >
          {activeSection === 1 ? (
            <i class="fa-solid fa-circle"></i>
          ) : (
            <i className="fa-regular fa-circle"></i>
          )}
        </button>
        <button
          className={`btn-scroll indicator ${
            activeSection === 2 ? "selected" : ""
          }`}
          onClick={handleClickScroll2}
        >
          {activeSection === 2 ? (
            <i class="fa-solid fa-circle"></i>
          ) : (
            <i className="fa-regular fa-circle"></i>
          )}
        </button>
        <button
          className={`btn-scroll indicator ${
            activeSection === 3 ? "selected" : ""
          }`}
          onClick={handleClickScroll3}
        >
          {activeSection === 3 ? (
            <i class="fa-solid fa-circle"></i>
          ) : (
            <i className="fa-regular fa-circle"></i>
          )}
        </button>
      </div>
      <div ref={div1Ref} id="section-1" className="section-1"></div>
      <div ref={div2Ref} id="section-2" className="section-2"></div>
      <div ref={div3Ref} id="section-3" className="section-3"></div>
      <div ref={div4Ref} id="section-4" className="section-4"></div>
    </div>
  );
};
