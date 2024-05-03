import React from "react";

function Jumbotron() {
  return (
    <>
      <section className="bg-white dark:bg-blue-950">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            See value from social sooner
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Our training and strategic services have helped thousands of
            organizations succeed on social
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Request a demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Jumbotron;
