/* eslint-disable no-unused-vars */
import React from "react";

export default function Footer() {
  return (
    
    <div className="  Footer pt-5 ">
      <div className="container py-3">
        <div className="row  g-4 ">
          <div className="col-md-4">
            <div className="item">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item ">
              <h3>AROUND THE WEB</h3>
              <span className="icons mx-1 my-1">
                <i className="fa-brands fa-facebook mx-1"></i>
              </span>
              <span className="icons mx-1">
                <i className="fa-brands fa-twitter mx-1"></i>
              </span>
              <span className="icons mx-1">
                <i className="fa-brands fa-linkedin mx-1"></i>
              </span>
              <span className="icons mx-1">
                <i className="fa-solid fa-globe mx-1"></i>
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="TheFooter py-3">
        <p>Copyright © Your Website 2021</p>
      </footer>
    </div>
  );
}
