import React from "react";
const Cards = ({ pass }) => {
  //   console.log(pass);
  // Check if pass.Title exists to ensure data is available
  if (!pass.Title) {
    return <h1 className="font-black">Movie not found</h1>;
  }
  return (
    <>
      <div
        className="card flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        style={{ width: "600px", maxWidth: "800px", maxHeight: "300px" }}
      >
        <div
          className="content flex justify-around items-start flex-col gap-4 mr-8 py-4"
          style={{ width: "50%", paddingLeft: "1rem" }}
        >
          <div className="top flex gap-4">
            <div className="posterImg">
              <img src={pass.Poster} alt="" className="w-full" />
            </div>
            <div className="details">
              <h2 className="text-2xl">{pass.Title}</h2>
              <p className="text-blue-600 mb-2 text-xs">
                {pass.Year}, {pass.Director}
              </p>
              <span className="runTime">{pass.Runtime}</span>
              <span className="text-blue-500 text-xs">{pass.Genre}</span>
            </div>
          </div>
          <div className="text-content text-xs">{pass.Plot}</div>
          <div className="icons">
            <span class="material-symbols-outlined">share</span>
            <span class="material-symbols-outlined">favorite</span>
            <span class="material-symbols-outlined">chat_bubble</span>
          </div>
        </div>
        <div
          className="picture relative"
          style={{
            width: "50%",
            height: "300px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <img src={pass.Poster} alt="" className="absolute" />
        </div>
      </div>
    </>
  );
};

export default Cards;
