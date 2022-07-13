import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BsPlayCircle } from "react-icons/bs";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import { MdEdit, MdDelete } from "react-icons/md";
function WeekView() {
  const [open, setOpen] = useState(0);
  const [courseItems, setCourseItems] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(4);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader className="text-3xl" onClick={() => handleOpen(1)}>
          Week one
        </AccordionHeader>
        <AccordionBody>
          <div className="overflow-y-auto py-4 px-3  rounded ">
            <ul className="space-y-2">
              <li>
                <div className="grid grid-cols-12 gap-4 items-center  p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100">
                  <div className="font-bold col-span-7 text-xl">1. Lecture</div>
                  <div className="col-start-8 col-span-2 grid grid-cols-3">
                    <div>
                      <BiLockAlt />
                    </div>
                    <div className="">Locked</div>
                  </div>
                  <div className="">
                    <MdEdit />
                  </div>
                  <div className="">
                    <MdDelete />
                  </div>

                  <div className="col-span-full grid grid-cols-4">
                    <div className=" w-30 flex align-middle text-xl h-20 items-center justify-items-center bg-gray-400">
                      <div className="m-auto">
                        <BsPlayCircle />
                      </div>
                    </div>
                    <div className="ml-2 mt-auto mb-auto">
                      <div className="flex items-center font-bold">
                        Past Simple Lectures
                      </div>
                      <div className="">Ricciwawa </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12 gap-4 items-center	 p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 ">
                  <div className="font-bold col-span-6 text-xl">2. Quizess</div>
                  <div className="col-start-7 col-span-3 grid grid-cols-3">
                    <div>
                      <BiLockOpenAlt />
                    </div>
                    <div className="col-span-2">Open for Preview</div>
                  </div>
                  <div className="">
                    <MdEdit />
                  </div>
                  <div className="">
                    <MdDelete />
                  </div>
                </div>
              </li>
              <li>
                <div className="grid grid-cols-12 gap-4 items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 ">
                  <div className="font-bold col-span-7 text-xl">
                    3. Discussions
                  </div>
                  <div className="col-start-10">
                    <MdEdit />
                  </div>
                  <div className="">
                    <MdDelete />
                  </div>
                </div>
              </li>
              {courseItems &&
                courseItems.map((courseItem) => (
                  <li>
                    <div className="grid grid-cols-12 gap-4 items-center p-2 text-gray-900 rounded-lg dark:text-black hover:bg-gray-100 ">
                      <div className="font-bold col-span-7 text-xl">
                        {courseItem}
                      </div>
                      <div className="col-start-10">
                        <MdEdit />
                      </div>
                      <div
                        onClick={() => {
                          setCourseItems(courseItems.filter(courseIt=> courseIt!==courseItem ));
                          setCounter((prevCounter) => prevCounter + 1);
                        }}
                      >
                        <MdDelete />
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="mt-7 mb-7">
              <div
                onClick={() => {
                  setCourseItems((prevNames) => [
                    ...prevNames,
                    counter + ". New Task",
                  ]);
                  setCounter((prevCounter) => prevCounter + 1);
                }}
                className="w-32 px-2  rounded-full ml-2 py-2 border-2 p-5 border-black items-center text-sm uppercase font-bold text-black  hover:bg-black hover:text-white"
              >
                Create Tasks
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader className="text-3xl">Add topic</AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <div className="mt-7 mb-7">
        <div className=" w-32 px-2  rounded-full ml-2 py-2 border-2  border-black items-center text-sm uppercase font-bold text-black  hover:bg-black hover:text-white">
          Create Tasks
        </div>
      </div>
    </Fragment>
  );
}
export default WeekView;
