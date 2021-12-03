import React, { useEffect, useState } from "react";
import "../../App.css";
import GalleryPic from "../GalleryPic";
// import { useParams } from "react-router-dom";
import data from "./../../data.json";

const Gallary = () => {
  const [galleryPosts, setGalleryPosts] = useState([]);
  useEffect(() => {
    // call the API and set the response to galleryPosts state, after that remove this line and like  5:
    setGalleryPosts(data);
  }, []);
  return (
    <>
      <section className="main">
        <div className="container">
          {galleryPosts.map((post) => (
            <GalleryPic post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallary;
