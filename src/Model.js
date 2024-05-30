import React from "react";
import Image from "./Image.png";
import Map from "./Map.png";
const Model = () => {
  return (
    <>
      <div className="flex flex-col custom-mobile:flex-col md:flex-row items-center">
        <div className="p-4">
          <img className="" src={Image} alt="LOGO" />
          <div className="  hidden md:flex justify-between ">
            <div className=" py-3  my-3">
              <img className="w-44" src={Image} alt="LOGO" />
            </div>
            <div className=" p-3 my-3">
              <img className="w-44" src={Image} alt="LOGO" />
            </div>
            <div className=" p-3 my-3">
              <img className="w-44" src={Image} alt="LOGO" />
            </div>
          </div>
        </div>
        <div className="random ">
          <h1 style={{ fontWeight: "bold" }}>Tangled Up In Green</h1>
          <h2 style={{ fontWeight: "bold" }} className="hidden md:flex">
            Tangled Up In Green
          </h2>
          <p className="">
            Tangled Up In Green, a vision of Total Environment, is a luxury
            plotted development nestled amidst the lush landscapes of
            Devanahalli. This peaceful hideaway in North Bangalore sits on 115
            acres and has exclusive residential plots with a modern design and
            green living blend. The plots range from 1800 sq. ft. to 7200 sq.
            ft. You could be fascinated by the botanical wonders found at the
            Tree Museum or…
          </p>
          <div className="line"></div>
          <div className="flex">
            <div className="w-full custom-mobile:w-full md:w-2/3 p-4">
              <div class="grid grid-cols-3 gap-4 p-4 ">
                <div class=" p-4">₹ 1.4 Cr</div>
                <div class=" p-4">Plot Size</div>
                <div class=" p-4">Area</div>
                <div class=" p-4">Total Units 968</div>
                <div class=" p-4">Project Type Plotted Development </div>
                <div class=" p-4">Status Newly Launched</div>
              </div>

              <div style={{ border: "1px solid black" }}></div>
              <h1>30+ Amenities</h1>

              <div className="list">
                <br></br>
                <div>
                  <ol>Children's Liberary</ol>
                  <ol>Basket ball,volley ball,</ol>
                  <ol>Tree Museum</ol>
                  <ol>Jogging track</ol>
                </div>
                <div>
                  <ol>Ampitheare</ol>
                  <ol>Heated pool</ol>
                  <ol>Cycling track</ol>
                  <ol>Pet park,</ol>
                </div>
              </div>
            </div>
            <div className="">
              <img className="h-[25rem] " src={Map} alt="LOGO" />
            </div>
          </div>

          <div className="button">
            <button className="b1">Chat Now </button>
            <button className="b2">Call Now</button>
            <button className="b3">Schedule Site visit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
