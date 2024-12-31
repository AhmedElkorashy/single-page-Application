/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import style from "./About.module.css";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <div className={`${style.About} py-5 `}>
        <h2 className=" fw-bolder fs-1 mb-3 text-uppercase pt-5 mt-5">about component</h2>
        <div className={style.theStar}>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="container py-5">
          <div className="row g-2">
            <div className="col-md-6">
              <div className="item px-5 pb-5">
                <p className="text-start">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="item">
                <p className="  text-start">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
