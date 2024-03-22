import React, { useState } from "react";
import Bg from "../assets/BG.png";
import Navbar from "../components/Navbar";
import Pumkin from "../assets/pumkin.png";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Perform search functionality here using the searchTerm state
    console.log("Searching for:", searchTerm);
  };

  return (
    <div
      className=" h-screen bg-cover font-mono"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <Navbar />
      <div className=" pt-[6%] ">
        <div className="flex items-center border border-gray-300 rounded-md p-2 mx-96">
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-xl outline-none px-2"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            className="ml-2 p-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l-5-5-5 5"
              />
            </svg>
          </button>
        </div>
        <p classname=" text-5xl font-semibold p-6">Hot now</p>
          <div className=" flex justify-center pt-6">
            <div className=" flex justify-center items-center rounded-2xl p-6 pt-0 w-[60%] bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl">
              <div className="  px-16">
                <div className=" flex justify-center">
                  <img className="w-full" src={Pumkin} alt="" />
                </div>
                <p className=" pt-3 text-3xl flex justify-center">
                  The pumkin secrets
                </p>
                <div className=" flex justify-center pt-3">
                  <a
                    href="https://environmental-conscience.com/fast-food-pros-cons/"
                    target="_blank"
                    className="py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-green-400 hover:to-green-200 hover:text-black"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center rounded-2xl p-6 pt-0 w-[60%] bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl">
              <div className="  px-16">
                <div className=" flex justify-center">
                  <img className="w-full" src={Pumkin} alt="" />
                </div>
                <p className=" pt-3 text-3xl flex justify-center">
                  The pumkin secrets
                </p>
                <div className=" flex justify-center pt-3">
                  <a
                    href="https://environmental-conscience.com/fast-food-pros-cons/"
                    target="_blank"
                    className="py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-green-400 hover:to-green-200 hover:text-black"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center rounded-2xl p-6 pt-0 w-[60%] bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl">
              <div className="  px-16">
                <div className=" flex justify-center">
                  <img className="w-full" src={Pumkin} alt="" />
                </div>
                <p className=" pt-3 text-3xl flex justify-center">
                  The pumkin secrets
                </p>
                <div className=" flex justify-center pt-3">
                  <a
                    href="https://environmental-conscience.com/fast-food-pros-cons/"
                    target="_blank"
                    className="py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-green-400 hover:to-green-200 hover:text-black"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default News;
