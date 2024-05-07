import { useState } from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [callData, setData] = useState({});

  const onSearch = () => {
    fetchSearch(query);
    setQuery("");
  };

  const API_KEY = "642c00f";
  const fetchSearch = async (query) => {
    // https://www.omdbapi.com/?t=Batman&apikey=642c00f
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error occurred", error);
      setData({});
    }
  };

  return (
    <>
      <h1 class="mt-8 text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          MOVIE
        </span>{" "}
        Search
      </h1>
      <p class="mb-8 text-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        At Movie Search, we're dedicated to bringing your favorite movies right
        to your fingertips...
      </p>

      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative mx-auto" style={{ maxWidth: "33rem" }}>
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Movies, Series..."
          required
        />
        <button
          onClick={onSearch}
          type="button"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>

      <div className="container flex justify-center items-center my-12 mx-auto">
        <Cards pass={callData} />
      </div>
    </>
  );
}

export default App;
