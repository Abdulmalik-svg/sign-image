import React, { useState } from "react";
import { useParams } from "react-router-dom";
import wallpapers from "../data/images";

const WallpaperCategory = () => {
  const { category } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const filteredWallpapers = wallpapers.filter(
    (item) => item.category === category
  );

  // Function to open modal with the clicked image
  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white py-10 px-5">
      <h1 className="text-center text-3xl font-bold mb-8 capitalize">
        {category} Wallpapers
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredWallpapers.map((item, index) => (
          <div key={index} className="w-60 shadow-lg rounded-lg overflow-hidden">
            <img
              src={`/gallery/${item.name}`}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="bg-orange-500 text-white text-center py-2 capitalize">
              {item.category}
            </div>
            <div className="flex justify-around mt-4">
              {/* View Button */}
              <button
                onClick={() => openModal(`/gallery/${item.name}`)}
                className="bg-white-500 text-black py-2 px-4 rounded-md"
              >
                View
              </button>
              {/* Download Button */}
              <a
                href={`/gallery/${item.name}`}
                download
                className="bg-white-500 text-black py-2 px-4 rounded-md"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="bg-white absolute top-2 right-2 text-xl text-black-500"
            >
              Close
            </button>
            <img
              src={currentImage}
              alt="Full-size"
              className="w-96 h-96 max-w-3xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WallpaperCategory;
