import React from "react";
import rocket from "../assets/rocket.png";
import browser from "../assets/browser.png";
import people from "../assets/people.png";

function Cards() {
  return (
    <>
      <div className="card max-w-64 text-center flex justify-evenly items-center mx-auto flex-col">
        <div className="max-w-40  min-h-40 flex justify-evenly items-center">
          <img src={rocket} alt="" className="w-full" />
        </div>
        <span className="text-2xl font-black mb-4">2,500</span>
        <div className="content w-full">
          <span>Enterprise organizations successfully launched</span>
        </div>
      </div>
      <div className="card max-w-64 text-center flex justify-evenly items-center mx-auto flex-col">
        <div className="max-w-40 min-h-min-h-40 flex justify-evenly items-center">
          <img src={browser} alt="" className="w-full" />
        </div>
        <span className="text-2xl font-black mb-4">45,000</span>
        <div className="content w-full">
          <span>Enterprise organizations successfully launched</span>
        </div>
      </div>
      <div className="card max-w-64 text-center flex justify-evenly items-center mx-auto flex-col">
        <div className="max-w-40  min-h-40 flex justify-evenly items-center">
          <img src={people} alt="" className="w-full" />
        </div>
        <span className="text-2xl font-black mb-4">200,000+</span>
        <div className="content w-full">
          <span>Enterprise organizations successfully launched</span>
        </div>
      </div>
    </>
  );
}

export default Cards;
