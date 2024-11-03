import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { TbUsersGroup } from "react-icons/tb";
import { GoVideo } from "react-icons/go";

function CourseDetail({ course }) {
  return (
    <div className="border p-6 rounded-xl shadow-lg mt-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="flex gap-2">
          <TbUsersGroup className="text-4xl text-primary" />
          <div>
            <h2 className="text-lg text-gray-500">Skill Level</h2>
            <h2 className="font-medium text-lg">{course?.level}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <HiOutlineClock className="text-4xl text-primary" />
          <div>
            <h2 className="text-lg text-gray-500">Duration</h2>
            <h2 className="font-medium text-lg">
              {course?.courseOutput?.course?.duration}
            </h2>
          </div>
        </div>
        <div className="flex gap-2">
          <HiOutlineBookOpen className="text-4xl text-primary" />
          <div>
            <h2 className="text-lg text-gray-500">No Of Chapters</h2>
            <h2 className="font-medium text-lg">
              {course?.courseOutput?.course?.numberOfChapters}
            </h2>
          </div>
        </div>
        <div className="flex gap-2">
          <GoVideo className="text-4xl text-primary" />
          <div>
            <h2 className="text-lg text-gray-500">Video Included?</h2>
            <h2 className="font-medium text-lg">{course?.includeVideo}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;