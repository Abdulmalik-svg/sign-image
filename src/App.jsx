import React from "react";
import SingleImage from "./components/singleImage";
import { images } from "./data/images";

function App() {
  return (
    <div className="bg-black pb-20">
      <h1 className="sticky top-0 text-center bg-orange-500 py-8 text-white text-4xl">
        Sign Gallery
      </h1>
      <div className="ml-14 mb-14  flex flex-wrap w-auto gap-4 mt-10">
        {images.map((image, i) => {
          return <SingleImage imagePath={`src/assets/gallery/${image}`} key={i}/>;
        })}
      </div>
    </div>
  );
}

export default App;
