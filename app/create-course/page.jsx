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
import { GenerateCourseLayout_AI } from "@/configs/AIModel";
import LoadingDialog from "./_components/LoadingDialog";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { CourseList } from "@/configs/Schema";
import { db } from "@/configs/Db";
import { useRouter } from "next/navigation";

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

  const {userCourseInput, setUserCourseInput} = useContext(UserInputContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const {user} = useUser();
  const router = useRouter();

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
        isEmpty(userCourseInput?.prerequisites) ||
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

  const GenerateCourseLayout = async () => {
    setLoading(true);
    const BASIC_PROMPT =
      "Generate a detailed JSON structure for a course tutorial based on the following details. The structure should include fields such as Course Name, Description, Chapters (with Chapter Name, Description, and Duration), and other metadata as specified.";
    const USER_INPUT_PROMPT =
      "Category: " +
      userCourseInput?.category +
      ",Description " +
      userCourseInput?.description +
      ",Topic: " +
      userCourseInput?.topic +
      ",Prerequisites:" +
      userCourseInput?.prerequisites +
      ",Duration:" +
      userCourseInput?.duration +
      ",NoOfChapters:" +
      userCourseInput?.noOfChapter +
      ",Format:" +
      userCourseInput?.format +
      ",Language:" +
      userCourseInput?.language +
      ",Level:" +
      userCourseInput?.level +
      ",Outcome:" +
      userCourseInput?.outcomes +
      ",Video:" +
      userCourseInput?.video +
      ",in JSON format";
    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
    console.log(FINAL_PROMPT);
    const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
    console.log(result.response?.text());
    console.log(JSON.parse(result.response?.text()));
    SaveCourseLayoutInDb(JSON.parse(result.response?.text()));
    setLoading(false);
    // courseLayout is equivalent to the parsed response from the AI model, which is JSON.parse(result.response?.text()).
  };

  const SaveCourseLayoutInDb = async (courseLayout) => {
    const id = uuidv4(); // Generate a unique course ID
    setLoading(true);
    try {
      const result = await db.insert(CourseList).values({
        courseId: id,
        description: userCourseInput?.description,
        name: userCourseInput?.topic,
        category: userCourseInput?.category,
        prerequisites: userCourseInput?.prerequisites,
        duration: userCourseInput?.duration,
        noOfChapters: userCourseInput?.noOfChapter,
        format: userCourseInput?.format,
        language: userCourseInput?.language,
        level: userCourseInput?.level,
        outcomes: userCourseInput?.outcomes,
        includeVideo: userCourseInput?.video ? "Yes" : "No",
        courseOutput: courseLayout,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        userProfileImage: user?.imageUrl,
        publish: false, // Set default value for publish
      });
      console.log("Course saved successfully:", result);
    } catch (error) {
      console.error("Error saving course layout:", error);
    } finally {
      setLoading(false);
      router.replace("/create-course/" + id);
    }
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
            <Button
              disabled={checkStatus()}
              onClick={() => GenerateCourseLayout()}
            >
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
      <LoadingDialog loading={loading} />
    </div>
  );
};
export default CreateCourse;
