"use client";
import { db } from "@/configs/Db";
import { CourseList } from "@/configs/Schema";
import React, { useEffect, useState } from "react";
import CourseCard from "../_components/CourseCard";
import { Button } from "@/components/ui/button";

function Explore() {
  const [courseList, setCourseList] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    GetAllCourse();
  }, [pageIndex]);

  // This means that whenever pageIndex changes (either increased or decreased by 
  // clicking the "Next Page" or "Previous Page" buttons), useEffect will re-run and call 
  // the GetAllCourse function again.

  const GetAllCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .limit(9)
      .offset(pageIndex * 9); // limit 9 per page
    setCourseList(result); // setCourseList is the function you can use to update the value of courseList.
    console.log(result);
  };

  return (
    <div>
      <h2 className="font-bold text-3xl">Explore More Projects</h2>
      <p>Explore more project build with AI by other users</p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {/* // display 9 per page */}
        {courseList?.length > 0
          ? courseList?.map((course, index) => (
              <div>
                <CourseCard course={course} displayUser={true} />
              </div>
            ))
          : [1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="w-full h-[230px] bg-slate-200 rounded-lg"
              ></div>
            ))}
      </div>

      <div className="flex justify-between mt-5">
        {pageIndex != 0 && (
          <Button onClick={() => setPageIndex(pageIndex - 1)}>
            Previous Page
          </Button>
        )}
        <Button onClick={() => setPageIndex(pageIndex + 1)}>Next Page</Button>
      </div>
    </div>
  );
}

export default Explore;