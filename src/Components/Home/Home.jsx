/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import style from "./Home.module.css";
import HomeImage from "../../assets/avataaars.svg";
export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <section className={`${style.Home}  py-5 `}>
      <figure className="text-white mt-4">
        <img src={HomeImage} className="w-75 mb-3" alt="" />
        <h2 className=" text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
        <div className={style.theStar}>
          <i className="fa-solid fa-star"></i>
        </div>
        <div>Graphic Artist - Web Designer - Illustrator</div>
      </figure>
    </section>
  );
}
