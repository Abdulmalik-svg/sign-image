import React from "react";
import SingleImage from "./SingleImage";
import { images } from "../data/images";
import Footer from "../components/Footer";

function Apple() {
  return (
    <div className="bg-white pb-20">
      <h1 className="sticky top-0 text-center bg-orange-500 py-8 text-white text-4xl">
        Sign Gallery
      </h1>
      <div className="ml-14 mb-14  flex flex-wrap w-auto gap-10 mt-10">
        {images.map((image, i) => {
          return <SingleImage imagePath={`/gallery/${image}`} key={i}/>;
        })}
      </div>
      <Footer />
    </div>
    
  );
}

export default Apple;




