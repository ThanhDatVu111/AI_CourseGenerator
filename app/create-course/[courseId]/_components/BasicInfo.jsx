import React from "react";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { IoLanguageOutline } from "react-icons/io5";
import {
  IoIosCheckmarkCircleOutline,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { GoGoal } from "react-icons/go";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const BasicInfo = ({ course }) => {
  return (
    <div className="p-10 border rounded-xl shadow-lg mt-5 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h2 className="font-bold text-3xl">
            {course?.courseOutput?.course?.name}
          </h2>
          <p className="text-sm text-gray-400 mt-3 ">
            {course?.courseOutput?.course?.description}
          </p>
          <h2 className="font-medium mt-2 flex gap-2 items-center text-primary">
            <HiOutlineRectangleStack />
            {course?.category}
          </h2>
          <div className="mt-5">
            <h3 className="font-semibold text-lg">Course Details:</h3>
            <p className="mt-2 flex items-center">
              <IoIosCheckmarkCircleOutline className="mr-2" />
              Prerequisites: {course?.courseOutput?.course?.prerequisites}
            </p>
            <p className="mt-2 flex items-center">
              <IoLanguageOutline className="mr-2" />
              Language: {course?.courseOutput?.course?.language}
            </p>
            <p className="mt-2 flex items-center">
              <IoIosInformationCircleOutline className="mr-2" />
              Format: {course?.courseOutput?.course?.format}
            </p>
            <p className="mt-2 flex items-center">
              <GoGoal className="mr-2" />
              Outcome: {course?.courseOutput?.course?.outcome}
            </p>
          </div>
          <Button className="w-full mt-5">Start</Button>
        </div>
        {/* Right Section (Image) */}
        <div className="flex-1 flex items-center justify-center">
          <label htmlFor="upload-image" className="w-full h-full">
            <Image
              src="/placeholder.png"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-xl object-cover cursor-pointer"
              alt="Course Image"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;