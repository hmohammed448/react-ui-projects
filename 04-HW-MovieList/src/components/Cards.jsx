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
          style={{ width: "50%", height: "300px" }}
        >
          <img src={pass.Poster} alt="" className="absolute" />
        </div>
      </div>

      {/* <div
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={pass.Poster}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pass.Title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {pass.Plot}
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Cards;
