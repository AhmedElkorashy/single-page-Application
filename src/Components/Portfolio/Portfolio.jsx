/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import port1 from "./../../assets/port1.png";
import port2 from "./../../assets/port2.png";
import port3 from "./../../assets/port3.png";
import style from "./Portfolio.module.css";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <>
      <div className={`${style.Portfolio} overflow-hidden`}>
        <h2 className=" mt-5 fw-bolder fs-1 mb-3 text-uppercase pt-5 mt-4">
          portfolio component
        </h2>
        <div className={`${style.theStar} mb-3`}>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="container  pb-3">
          <div className="row g-5">
            <div className="col-md-4">
              <div
                className="item"
                data-bs-toggle="modal"
                data-bs-target="#item1"
              >
                <div className={style.test}>
                  <img
                    src={port1}
                    className=" w-100 d-block rounded-2"
                    alt=""
                  />
                  <div
                    className={`${style.theCover} d-flex justify-content-center align-items-center`}
                  >
                    <i className="text-white fa-solid fa-plus fa-6x "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="item"
                data-bs-toggle="modal"
                data-bs-target="#item2"
              >
                <div className={style.test}>
                  <img
                    src={port2}
                    className=" w-100 d-block rounded-2"
                    alt=""
                  />
                  <div
                    className={`${style.theCover} d-flex justify-content-center align-items-center`}
                  >
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="item"
                data-bs-toggle="modal"
                data-bs-target="#item3"
              >
                <div className={style.test}>
                  <img
                    src={port3}
                    className=" w-100 d-block rounded-2"
                    alt=""
                  />
                  <div
                    className={`${style.theCover} d-flex justify-content-center align-items-center`}
                  >
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="item"
                data-bs-toggle="modal"
                data-bs-target="#item1"
              >
                <div className={style.test}>
                  <img
                    src={port1}
                    className=" w-100 d-block rounded-2"
                    alt=""
                  />
                  <div
                    className={`${style.theCover} d-flex justify-content-center align-items-center`}
                  >
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="item"
                data-bs-toggle="modal"
                data-bs-target="#item2"
              >
                <div className={style.test}>
                  <img
                    src={port2}
                    className=" w-100 d-block rounded-2"
                    alt=""
                  />
                  <div
                    className={`${style.theCover} d-flex justify-content-center align-items-center`}
                  >
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="item"
                data-bs-toggle="modal"
                data-bs-target="#item3"
              >
                <div className={style.test}>
                  <img
                    src={port3}
                    className=" w-100 d-block rounded-2"
                    alt=""
                  />
                  <div
                    className={`${style.theCover} d-flex justify-content-center align-items-center`}
                  >
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************************* */}
      <div
        className="modal fade"
        id="item1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body ">
              <img src={port1} className=" w-100 d-block rounded-2" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ************************ */}
      <div
        className="modal fade"
        id="item2"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <img src={port2} className=" w-100 d-block rounded-2" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ********************* */}
      <div
        className="modal fade"
        id="item3"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <img src={port3} className=" w-100 d-block rounded-2" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ************************************************* */}
    </>
  );
}
