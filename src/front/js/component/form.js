import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/services.css";
import "../../styles/form.css";
import "../../styles/rows.css";
import Card from "../component/card.js"; 2
import Card2 from "../component/card2.js";
import Card3 from "../component/card3.js";

const Form = () => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const isDesktop = window.innerWidth >= 1400;
  const [tablet, setTablet] = useState(false);
  const isNotMobile = window.innerWidth >= 700;

  useEffect(() => {
    handleResize()
  }, []);

  function handleResize() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    setTablet(height > width);
  }

  return (
    <>
      {isNotMobile ? (
        <>
          {tablet ? (

            <div className="d-flex">
              <div
                className={`mx-auto d-flex flex-column ${isDesktop ? 'col-8' : 'col-11'} form-top`}
              >

                <div className="col-12 d-flex">

                  <div className="col-2-5 d-flex flex-column">
                    <div className="col-12 h50">
                    </div>
                    <div className="col-12 h50 outline-borderl outline-bordert">º
                    </div>
                  </div>
                  <a
                    className={`btn btn-outline-light btn-floating pt-2 bg-icons vertical-center iconfont col-1`}
                    style={{ border: "2px solid white", borderRadius: "2" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <div className="col-1  d-flex flex-column">
                    <div className="col-12 h50">
                    </div>
                    <div className="col-12 h50 outline-bordert">
                    </div>
                  </div>
                  <a
                    className={`btn btn-outline-light btn-floating pt-2  bg-icons vertical-center iconfont col-1`}
                    style={{ border: "2px solid white", borderRadius: "2" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <div className="col-1 d-flex flex-column">
                    <div className="col-12 h50">
                    </div>
                    <div className="col-12 h50 outline-bordert">
                    </div>
                  </div>
                  <a
                    className={`btn btn-outline-light btn-floating pt-2  bg-icons vertical-center iconfont col-1`}
                    style={{ border: "2px solid white", borderRadius: "2" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>
                  <div className="col-1 d-flex flex-column">
                    <div className="col-12 h50">
                    </div>
                    <div className="col-12 h50 outline-bordert">
                    </div>
                  </div>
                  <a
                    className={`btn btn-outline-light btn-floating pt-2  bg-icons vertical-center iconfont col-1`}
                    style={{ border: "2px solid white", borderRadius: "2" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <div className="col-2-5">
                    <div className="col-12 h50">
                    </div>
                    <div className="col-12 h50 outline-borderr outline-bordert">
                    </div>
                  </div>
                  {/* <div className="col-12 bar-h d-flex">
            <div className="col-6 py-3  h100"></div>
            <div className="col-6 py-3  outline-borderl h100"></div>
          </div>
          <a
            className={`btn btn-outline-light col-7 btn-floating col-4 pt-2  bg-icons ${isDesktop ? 'icon-h' : 'bar-h'}`}
            style={{ border: "2px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a> */}
                  {/* <a
          className={`btn btn-outline-light col-7 btn-floating col-4 pt-2  bg-icons mx-auto ${isDesktop ? 'icon-h' : 'bar-h'}`}
          style={{ border: "1px solid white", borderRadius: "2", fontSize: "1.7vw" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-github"></i>
        </a>
        <div className="col-12 bar-h d-flex">
          <div className="col-6 py-3  h100"></div>
          <div className="col-6 py-3  outline-borderl h100 outline-borderb"></div>
        </div> */}

                </div>
                <div className="col-12 pt-3 pb-4 px-4 d-flex flex-column outline-borderl outline-borderr outline-borderb ">

                  <div className="col-12 mx-auto imgprops h100 ">
                    <div
                      className={` h100 paddingx ${isDesktop ? 'pt-5' : 'pt-3'}`}
                    >
                      <div className="white work-size mt-5 text-shadow" style={{ fontSize: "7vw" }}>Let's work together</div>
                      <div className="white service-text-size text-shadow mt-3" style={{ textAlign: 'justify', fontSize: "3vw" }}>
                        If you have something specific in mind or would like the input of a professional photographer, I invite you to get in direct contact at +34 688-43-32-12. Feel free to reach out for any inquiries or to discuss your photography needs. I'll be more than happy to assist you.
                      </div>
                      <div
                        className={` d-flex mx-auto col-12 pt-4 mb-4 ${isDesktop ? 'mt-5 pb-5' : 'mt-3 pb-5'}`}
                      >
                        <div className="col-4"> <Card /></div>
                        <div className="col-4"> <Card2 /></div>
                        <div className="col-4"> <Card3 /></div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            <div className="d-flex">
              <div
                className={`mx-auto d-flex  ${isDesktop ? 'col-8' : 'col-10'} ${tablet ? 'tablet-margin' : 'form-top'}`}
              >

                <div className="col-1 h100 my-auto d-flex flex-column h100">

                  <div className="col-12 d-flex row-1">
                    <div className="col-6 py-3  h100"></div>
                    <div className="col-6 py-3  outline-borderl h100 outline-bordert"></div>
                  </div>

                  <div className="d-flex flex-column row-10">
                    <a
                      className={`btn btn-outline-light col-7 btn-floating col-4 pt-2 bg-icons mx-auto vertical-center iconfont ${isDesktop ? 'row-2' : 'row-2'}`}
                      style={{ border: "1px solid white", borderRadius: "2" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <div className="col-12 row-1 d-flex">
                      <div className="col-6 py-3  h100"></div>
                      <div className="col-6 py-3  outline-borderl h100"></div>
                    </div>
                    <a
                      className={`btn btn-outline-light col-7 btn-floating col-4 pt-2  bg-icons mx-auto vertical-center iconfont ${isDesktop ? 'row-2' : 'row-2'}`}
                      style={{ border: "1px solid white", borderRadius: "2" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <div className="col-12 row-1 d-flex">
                      <div className="col-6 py-3  h100"></div>
                      <div className="col-6 py-3  outline-borderl h100"></div>
                    </div>
                    <a
                      className={`btn btn-outline-light col-7 btn-floating col-4 pt-2  bg-icons mx-auto vertical-center iconfont ${isDesktop ? 'row-2' : 'row-2'}`}
                      style={{ border: "1px solid white", borderRadius: "2" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-google"></i>
                    </a>
                    <div className="col-12 row-1 d-flex">
                      <div className="col-6 py-3  h100"></div>
                      <div className="col-6 py-3  outline-borderl h100"></div>
                    </div>
                    <a
                      className={`btn btn-outline-light col-7 btn-floating col-4 pt-2  bg-icons mx-auto vertical-center iconfont ${isDesktop ? 'row-2' : 'row-2'}`}
                      style={{ border: "1px solid white", borderRadius: "2" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <div
                      className={`col-12 row-1 d-flex ${isDesktop ? 'row-1' : 'row-1'}`}
                    >
                      <div className="col-6 py-3  h100"></div>
                      <div className="col-6 py-3  outline-borderl h100"></div>
                    </div>
                    {/* <div className="col-12 bar-h d-flex">
            <div className="col-6 py-3  h100"></div>
            <div className="col-6 py-3  outline-borderl h100"></div>
          </div>
          <a
            className={`btn btn-outline-light col-7 btn-floating col-4 pt-2  bg-icons mx-auto ${isDesktop ? 'icon-h' : 'bar-h'}`}
            style={{ border: "1px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a> */}
                  </div>
                  <div className="col-12 row-1 d-flex ">
                    <div className="col-6 py-3  h100"></div>
                    <div className="col-6 py-3  outline-borderl outline-borderb h100"></div>
                  </div>
                  {/* <a
          className={`btn btn-outline-light col-7 btn-floating col-4 pt-2  bg-icons mx-auto ${isDesktop ? 'icon-h' : 'bar-h'}`}
          style={{ border: "1px solid white", borderRadius: "2", fontSize: "1.7vw" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-github"></i>
        </a>
        <div className="col-12 bar-h d-flex">
          <div className="col-6 py-3  h100"></div>
          <div className="col-6 py-3  outline-borderl h100 outline-borderb"></div>
        </div> */}

                </div>
                <div className="col-10 paddingy outline-bordert outline-borderb d-flex flex-column">

                  <div className="col-12 imgprops h100">
                    <div
                      className={` h100 paddingx ${isDesktop ? 'pt-5' : 'pt-3'}`}
                    >
                      <div className="white work-size mt-4 text-shadow">Let's work together</div>
                      <div className="white text-size me-3 text-shadow" style={{ textAlign: 'justify' }}>
                        If you have something specific in mind or would like the input of a professional photographer, I invite you to get in direct contact at +34 688-43-32-12. Feel free to reach out for any inquiries or to discuss your photography needs. I'll be more than happy to assist you.
                      </div>
                      <div
                        className={` d-flex mx-auto col-10 pt-2 ${isDesktop ? 'mt-5 pb-5' : 'mt-3 pb-5'}`}
                      >
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
            </div>)}
        </>
      ) : (
        <div className="d-flex">
          <div
            className={`mx-auto d-flex flex-column ${isDesktop ? 'col-8' : 'col-11'} form-top`}
          >

            <div className="col-12 d-flex">

              <div className="col-2-5 d-flex flex-column">
                <div className="col-12 h50">
                </div>
                <div className="col-12 h50 outline-borderl outline-bordert">º
                </div>
              </div>
              <a
                className={`btn btn-outline-light btn-floating pt-2 bg-icons vertical-center iconfont col-1`}
                style={{ border: "2px solid white", borderRadius: "2" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <div className="col-1  d-flex flex-column">
                <div className="col-12 h50">
                </div>
                <div className="col-12 h50 outline-bordert">
                </div>
              </div>
              <a
                className={`btn btn-outline-light btn-floating pt-2  bg-icons vertical-center iconfont col-1`}
                style={{ border: "2px solid white", borderRadius: "2" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <div className="col-1 d-flex flex-column">
                <div className="col-12 h50">
                </div>
                <div className="col-12 h50 outline-bordert">
                </div>
              </div>
              <a
                className={`btn btn-outline-light btn-floating pt-2  bg-icons vertical-center iconfont col-1`}
                style={{ border: "2px solid white", borderRadius: "2" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>
              <div className="col-1 d-flex flex-column">
                <div className="col-12 h50">
                </div>
                <div className="col-12 h50 outline-bordert">
                </div>
              </div>
              <a
                className={`btn btn-outline-light btn-floating pt-2  bg-icons vertical-center iconfont col-1`}
                style={{ border: "2px solid white", borderRadius: "2" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <div className="col-2-5">
                <div className="col-12 h50">
                </div>
                <div className="col-12 h50 outline-borderr outline-bordert">
                </div>
              </div>
              {/* <div className="col-12 bar-h d-flex">
            <div className="col-6 py-3  h100"></div>
            <div className="col-6 py-3  outline-borderl h100"></div>
          </div>
          <a
            className={`btn btn-outline-light col-7 btn-floating col-4 pt-2  bg-icons ${isDesktop ? 'icon-h' : 'bar-h'}`}
            style={{ border: "2px solid white", borderRadius: "2", fontSize: "1.7vw" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a> */}
              {/* <a
          className={`btn btn-outline-light col-7 btn-floating col-4 pt-2  bg-icons mx-auto ${isDesktop ? 'icon-h' : 'bar-h'}`}
          style={{ border: "1px solid white", borderRadius: "2", fontSize: "1.7vw" }}
          href="#!"
          role="button"
        >
          <i className="fab fa-github"></i>
        </a>
        <div className="col-12 bar-h d-flex">
          <div className="col-6 py-3  h100"></div>
          <div className="col-6 py-3  outline-borderl h100 outline-borderb"></div>
        </div> */}

            </div>
            <div className="col-12 pt-1 pb-2 px-2 d-flex flex-column outline-borderl outline-borderr outline-borderb ">

              <div className="col-12 mx-auto imgprops h100 ">
                <div
                  className={` h100 paddingx ${isDesktop ? 'pt-5' : 'pt-3'}`}
                >
                  <div className="white work-size mt-2 text-shadow">Let's work together</div>
                  <div className="white service-text-size text-shadow form-text-size mt-3" style={{ textAlign: 'justify' }}>
                    If you have something specific in mind or would like the input of a professional photographer, I invite you to get in direct contact at +34 688-43-32-12. Feel free to reach out for any inquiries or to discuss your photography needs. I'll be more than happy to assist you.
                  </div>
                  <div
                    className={` d-flex mx-auto flex-column col-12 mt-2 mb-3`}
                  >
                    <div className="col-12 mx-auto"> <Card /></div>
                    <div className="col-12 mx-auto"> <Card2 /></div>
                    <div className="col-12 mx-auto"> <Card3 /></div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </>


  );
};

export default Form;
