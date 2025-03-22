import React, { useState } from "react";

function SingleImage({ imagePath }) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="rounded-2xl bg-white">
        <img
          src={imagePath}
          alt=""
          className="w-96 h-80 rounded-t-xl cursor-pointer object-cover"
        />
        <div className="flex py-2 px-8 justify-between">
          <button
            className="text-black-200 font-[600] underline cursor-pointer"
            onClick={() => {
              setActive(true);
            }}
          >
            View
          </button>
          <a
            className="text-green-900 font-[600] underline"
            href={imagePath}
            download={"download.jpg"}
            target="_blank"
          >
            Download
          </a>
        </div>
      </div>
      {/* Modal */}
      {active && (
        <div className="fixed top-0 left-0 right-0 bottom-0 h-screen bg-[rgba(0,0,0,0.9)]">
          <button
            className="bg-white px-10 py-2 rounded-md absolute right-10 top-10 cursor-pointer"
            onClick={() => {
              setActive(false);
            }}
          >
            Close
          </button>
          <div className="w-screen h-screen flex items-center justify-center">
            <div>
              <img
                src={imagePath}
                alt=""
                className="w-auto h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleImage;
