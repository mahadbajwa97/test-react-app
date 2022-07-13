import React from "react";

function TabView() {
  return (
    <div className="container px-10 mx-12 flex ">
      <ul className="relative flex flex-wrap px-4 py-3  mb-3">
        <li className="mr-2">
          <div
            aria-current="page"
            className="inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center "
          >
            About
          </div>
        </li>
        <li className="mr-2">
          <div className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center">
            Discussion
          </div>
        </li>
        <li className="mr-2">
          <div className="inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center">
            Members
          </div>
        </li>
        <li className="mr-2">
          <div className="inline-block font-bold text-blue-600 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm  text-center active">
            Course
          </div>
        </li>
        <li>
          <div className="inline-block text-gray-400 rounded-t-lg py-4 px-4 text-sm font-medium text-center cursor-not-allowed">
            Board
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TabView;
