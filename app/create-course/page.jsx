"use client";
import React, { useState, useEffect, useContext } from "react";
import { MdCategory } from "react-icons/md";
import { FcIdea } from "react-icons/fc";
import { FaListCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";

const CreateCourse = () => {
  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <MdCategory />,
    },
    {
      id: 2,
      name: "Topic & Des",
      icon: <FcIdea />,
    },
    {
      id: 3,
      name: "Options",
      icon: <FaListCheck />,
    },
  ];
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    console.log(userCourseInput);
  }, [userCourseInput]);

  /**
   * Used to check Next Button Enable or Disable Status
   */
  const isEmpty = (value) => !value || value.length === 0;
  const checkStatus = () => {
    if (userCourseInput?.length == 0) {
      return true;
    }
    if (
      activeIndex == 0 &&
      (userCourseInput?.category?.length == 0 ||
        userCourseInput?.category == undefined)
    ) {
      return true;
    }
    if (
      activeIndex === 1 &&
      (isEmpty(userCourseInput?.topic) ||
        isEmpty(userCourseInput?.description) ||
        isEmpty(userCourseInput?.target) ||
        isEmpty(userCourseInput?.outcomes))
    ) {
      return true;
    } else if (
      activeIndex == 2 &&
      (userCourseInput?.level == undefined ||
        userCourseInput?.duration == undefined ||
        userCourseInput?.video == undefined ||
        userCourseInput?.format == undefined ||
        userCourseInput?.language == undefined ||
        userCourseInput?.noOfChapter == undefined)
    ) {
      return true;
    }
    return false;
  };

  return (
    <div>
      {/* Stepper  */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-medium">
          Let's Create Your AI Course
        </h2>
        <div className="flex mt-10">
          {StepperOptions.map((item, index) => (
            <div className="flex items-center ">
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`bg-gray-200 p-3 rounded-full text-white ${
                    activeIndex >= index && "bg-primary"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index != StepperOptions?.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-200 ${
                    activeIndex > index && "bg-primary"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {/* Component  */}
        {activeIndex == 0 ? (
          <SelectCategory />
        ) : activeIndex == 1 ? (
          <TopicDescription />
        ) : activeIndex == 2 ? (
          <SelectOption />
        ) : null}
        <div className="flex justify-between mt-10">
          <Button
            disabled={activeIndex == 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              Next
            </Button>
          )}
          {activeIndex == 2 && (
            <Button disabled={checkStatus()}>Generate Course Layout</Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default CreateCourse;
