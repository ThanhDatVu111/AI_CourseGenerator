"use client";
import { db } from "@/configs/Db";
import { CourseList } from "@/configs/Schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import BasicInfo from "../_components/BasicInfo";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

function FinishScreen({ params }) {
  //The course ID is passed as a parameter from the router.
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    params && GetCourse(); //if params (course ID) exists, then call GetCourse()
  }, [params, user]); //useEffect should re-run if either params (course ID) or user changes.

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, params?.courseId),
          eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    setCourse(result[0]);
    console.log(result);
  };

  return (
    <div className="px-10 md:px-20 lg:px-44 my-7">
      <h2 className="text-center font-bold text-2xl my-3 text-primary">
        Congratulations! Your Course is Now Live and Ready to Shine!
      </h2>

      <BasicInfo course={course} refreshData={() => console.log()} edit = {false} />
      <h2 className="mt-3">Course URL:</h2>
      <h2 className="text-center text-gray-500 border p-2 round flex gap-5 items-center shadow-md">
        {process.env.NEXT_PUBLIC_HOST_NAME}/course/{course?.courseId}
        <HiOutlineClipboardDocumentCheck
          className="h-5 w-5 cursor-pointer"
          onClick={async () =>
            await navigator.clipboard.writeText(
              process.env.NEXT_PUBLIC_HOST_NAME + "/course/" + course?.courseId
            )
          } //on click, write the course URL to the clipboard
        />
      </h2>
    </div>
  );
}

export default FinishScreen;
