import React from 'react';
import '../../App.css';
import GalleryPic from '../GalleryPic'
// import { useParams } from "react-router-dom";
// import useFetch from "../useFetch";


const Gallary = () => {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    return(
      <>
        <GalleryPic />
        </>

      );
}

export default Gallary;
