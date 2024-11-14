import React from "react";
import { HiOutlineCheckCircle, HiOutlineClock } from "react-icons/hi2";
import EditChapterList from "./EditChapterList";

function ChapterList({ course, refreshData, edit = true }) {
  return (
    <div className="mt-3">
      <h2 className="font-medium text-xl">Chapters</h2>
      {/* Chapter Cards */}
      <div className="mt-2">
        {course?.courseOutput?.course?.chapters.map((chapter, index) => (
          <div className="flex border p-5 rounded-lg mb-4 items-center justify-between shadow-lg">
            <div className="flex gap-5 items-center">
              {/* item center help the chapter number aligns vertically with the
              chapter title and details. */}

              {/* Chapter Circle */}
              <h2 className="bg-primary flex-none h-10 w-10 text-white rounded-full text-center p-2">
                {index + 1}
              </h2>

              {/* Chapter Details */}
              <div className="">
                <h2 className="font-medium text-lg ">
                  {chapter?.name}{" "}
                  {edit && <EditChapterList
                    course={course}
                    index={index}
                    refreshData={refreshData}
                  />}
                </h2>
                <p className="text-sm text-gray-500 ">{chapter?.description}</p>
                <p className="flex gap-2 text-primary items-center">
                  {" "}
                  <HiOutlineClock /> {chapter?.duration}
                </p>
              </div>
            </div>

            {/* Check Circle */}
            <HiOutlineCheckCircle className="text-4xl text-gray-300 flex-none" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
