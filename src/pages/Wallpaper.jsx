import React from 'react';
import wallpapers from "../data/images";

const Wallpaper = () => {
  return (
    <div className="bg-white py-10 px-5">
      <h1 className="text-center text-3xl font-bold mb-8">All Wallpapers</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {wallpapers.map((item, index) => (
          <div key={index} className="w-60 shadow-lg rounded-lg overflow-hidden">
            <img
              src={`/gallery/${item.name}`}
              alt={`Wallpaper ${index}`}
              className="w-full h-40 object-cover"
            />
            <div className="bg-orange-500 text-white text-center py-2 capitalize">
              {item.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallpaper;
