/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import style from "./Contact.module.css";
export default function Contact() {
  function userData(number) {
    let x = document.getElementById("userNameLabel");
    let y = document.getElementById("userAgeLabel");
    let z = document.getElementById("userEmailLabel");
    let s = document.getElementById("userPasswordLabel");
    /**************************************************/
    let userName = document.getElementById("userName");
    let userAge = document.getElementById("userAge");
    let userEmail = document.getElementById("userEmail");
    let userPassword = document.getElementById("userPassword");
    if (number === 1) {
      if (userName.value !== "") {
        x.classList.add("userNameRemove");
        x.classList.remove("userNameAdd");
      } else {
        x.classList.remove("userNameRemove");
        x.classList.add("userNameAdd");
      }
    }
    if (number === 2) {
      if (userAge.value !== "") {
        y.classList.add("userNameRemove");
        y.classList.remove("userNameAdd");
      } else {
        y.classList.remove("userNameRemove");
        y.classList.add("userNameAdd");
      }
    }
    if (number === 3) {
      if (userEmail.value !== "") {
        z.classList.add("userNameRemove");
        z.classList.remove("userNameAdd");
      } else {
        z.classList.remove("userNameRemove");
        z.classList.add("userNameAdd");
      }
    }
    if (number === 4) {
      if (userPassword.value !== "") {
        s.classList.add("userNameRemove");
        s.classList.remove("userNameAdd");
      } else {
        s.classList.remove("userNameRemove");
        s.classList.add("userNameAdd");
      }
    }
  }
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <div className={`${style.Contact} overflow-hidden`}>
        <h2 className=" mt-5 fw-bolder fs-1 mb-3 text-uppercase pt-5 mt-4 ">
          contact section
        </h2>
        <div className={`${style.theStar} mb-3`}>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="container">
          <form className=" mt-5 pt-5">
            <div className="item mb-3">
              <label
                htmlFor="userName"
                className=" text-start d-block w-50 mx-auto userNameAdd "
                id="userNameLabel"
              >
                userName:
              </label>
              <input
                onInput={() => {
                  userData(1);
                }}
                type="text"
                placeholder="userName"
                name="userName"
                className="userName form-control w-50 mx-auto py-3 "
                id="userName"
              />
            </div>
            <div className="item mb-3">
              <label
                htmlFor="userAge"
                className=" text-start d-block w-50 mx-auto userNameAdd "
                id="userAgeLabel"
              >
                userAge:
              </label>
              <input
                onInput={() => {
                  userData(2);
                }}
                type="number"
                placeholder="userAge"
                name=""
                className="userAge form-control w-50 mx-auto py-3"
                id="userAge"
              />
            </div>
            <div className="item mb-3">
              <label
                htmlFor="userEmail"
                className=" text-start d-block w-50 mx-auto userNameAdd "
                id="userEmailLabel"
              >
                userEmail:
              </label>
              <input
                onInput={() => {
                  userData(3);
                }}
                type="email"
                placeholder="userEmail"
                name=""
                className="userEmail form-control w-50 mx-auto py-3"
                id="userEmail"
              />
            </div>
            <div className="item mb-3">
              <label
                htmlFor="userPassword"
                className=" text-start d-block w-50 mx-auto userNameAdd "
                id="userPasswordLabel"
              >
                userPassword:
              </label>
              <input
                onInput={() => {
                  userData(4);
                }}
                type="password"
                placeholder="userPassword"
                name="userPassword"
                className="userPassword form-control w-50 mx-auto py-3 "
                id="userPassword"
              />
            </div>
            <div className="item mb-3 text-start w-50 mx-auto text-start ">
              <button
                className="btn my-3 px-3 rounded-2 contact-btn"
                type="button"
              >
                send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
