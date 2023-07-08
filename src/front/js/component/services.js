import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/services.css";
import "../../styles/photos1.css";
import me from '../images/pexels-atahan-demir-16166521.jpg';

const Services = ({ data, groupSize }) => {
  const Navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const isNotMobile = window.innerWidth >= 700;
  const [tablet, setTablet] = useState(false);

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
            <div className="d-flex flex-column">
              <div className="col-11 servicehtablet mx-auto service-top-tablet d-flex">
                <div className="col-12 d-flex white mx-auto p-4" style={{ border: "2px solid white", borderRadius: "2" }}>
                  <div className="col-12" style={{ backgroundImage: `url(${me})`, backgroundSize: 'cover' }}>
                    <div className="image-with-gradient px-5 pt-5 col-12">
                      <h1 className="name-size text-shadow " style={{ fontSize: "6.2vw" }}>
                        Hi,<br></br>It's Juan Antonio Gomez
                      </h1>
                      <p className="service-text-size h-100 text-shadow  " style={{ textAlign: 'justify', fontSize: "3.2vw", maxHeight: '49vh' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a consequat ipsum. Maecenas vel tincidunt sem.
                        Nam lacinia, arcu sit amet lacinia porta, odio ipsum rhoncus enim, id vestibulum tellus urna eget arcu.
                        Integer viverra risus tristique mi condimentum sodales. Sed tristique tellus nec neque vehicula, nec sodales risus porttitor.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Pellentesque quis turpis at diam vulputate lacinia at egestas turpis.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                      </p></div>

                    <div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          ) : (
            <div className="d-flex flex-column">
              <div className="col-9 serviceh mx-auto service-top d-flex">
                <div className="col-6 d-flex">
                  <div className="col-xxl-2 col-0 "></div>
                  <div className="col-xxl-8 ms-auto col-12  h100 pe-3 image-container"> <img src={me} alt="Background Image" className="img-style" /></div>
                </div>
                <div className="col-6 d-flex white ps-3">
                  <div className="col-xxl-10 col-12 ">
                    <h1 className="service-size">Hi,<br></br>It's Juan Antonio Gomez</h1>
                    <p className="service-text-size h-100 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a consequat ipsum. Maecenas vel tincidunt sem.
                      Nam lacinia, arcu sit amet lacinia porta, odio ipsum rhoncus enim, id vestibulum tellus urna eget arcu.
                      Integer viverra risus tristique mi condimentum sodales. Sed tristique tellus nec neque vehicula, nec sodales risus porttitor.
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                      Pellentesque quis turpis at diam vulputate lacinia at egestas turpis.
                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                    </p>
                    <div></div>
                  </div>

                </div>

              </div>
            </div>
          )}
        </>




      ) : (
        <div className="d-flex flex-column">
          <div className="col-11 serviceh mx-auto service-top d-flex">
            <div className="col-12 d-flex white mx-auto  p-2" style={{ border: "2px solid white", borderRadius: "2" }}>
              <div className="col-12" style={{ backgroundImage: `url(${me})`, backgroundSize: 'cover' }}>
                <div className="image-with-gradient px-5 pt-5 col-12">
                  <h1 className="name-size text-shadow ">Hi,<br></br>It's Juan Antonio Gomez</h1>
                  <p className="service-text-size h-100 text-shadow  " style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a consequat ipsum. Maecenas vel tincidunt sem.
                    Nam lacinia, arcu sit amet lacinia porta, odio ipsum rhoncus enim, id vestibulum tellus urna eget arcu.
                    Integer viverra risus tristique mi condimentum sodales. Sed tristique tellus nec neque vehicula, nec sodales risus porttitor.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Pellentesque quis turpis at diam vulputate lacinia at egestas turpis.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                  </p></div>

                <div>

                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </>




  );
};

export default Services;
