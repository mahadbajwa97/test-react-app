import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import WeekView from "./WeekView";
function CourseView() {
  const [sidebarItems, setSidebarItems] = useState<string[]>([
    "Week 1",
    "Week 2",
  ]);
  const [counter, setCounter] = useState<number>(3);

  return (
    <div className="h-full grid grid-cols-3 gap-4 container px-10 mx-12">
      <div className="py-4 px-3  rounded ">
        <ul className="space-y-2">
          {sidebarItems &&
            sidebarItems.map((sidebarItem: string) => (
              <li>
                <div className="flex items-center font-bold text-xl	 p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:text-blue-600">
                  <span className="ml-3">{sidebarItem}</span>
                </div>
              </li>
            ))}
          <li>
            <div
              className="flex ml-3 items-center font-bold p-2 text-xl text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:text-blue-600"
              onClick={() => {
                setSidebarItems((prevNames) => [...prevNames, "Week "+ counter]);
                setCounter(prevCounter=> prevCounter+1);
              }}
            >
              <BsPlusCircle /> <div className="ml-3">New Topic</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-span-2">
        <WeekView />
      </div>
    </div>
  );
}

export default CourseView;
