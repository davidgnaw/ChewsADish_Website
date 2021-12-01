import React from "react";
import "../../App.css";
import GalleryPic from "../GalleryPic";
// import { useParams } from "react-router-dom";
import data from "./../../data.json";

const Gallary = () => {
  return (
    <>
      <section className="main">
        <div className="container">
          {data.map((post) => (
            <GalleryPic post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallary;
