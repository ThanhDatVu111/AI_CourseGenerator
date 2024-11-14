"use client";
import { db } from "@/configs/Db";
import { CourseList } from "@/configs/Schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";

function UserCourseList() {
  const [courseList, setCourseList] = useState([]);
  const { user } = useUser();
  const { userCourseList, setUserCourseList } = useContext(UserCourseListContext);

  useEffect(() => {
    user && getUserCourses();
  }, [user]);

  const getUserCourses = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(CourseList.id)); // order by id in descending order
    setCourseList(result); // setCourseList is the function you can use to update the value of courseList.
    setUserCourseList(result); // setCourseList is the function you can use to update the value of courseList.
  };

  return (
    <div className="mt-10">
      <h2 className="font-medium text-xl">My AI Learning Hub</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {courseList?.length > 0
          ? courseList?.map((course, index) => (
              <CourseCard
                course={course}
                key={index}
                refreshData={() => getUserCourses()}
              />
            ))
          : [1, 2, 3, 4].map(
              (
                item,
                index //else: courseList is empty or undefined: A loading state is displayed, where five placeholders are rendered
              ) => (
                <div
                  key={index}
                  className="w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[270px]"
                ></div>
              )
            )}
      </div>
    </div>
  );
}

export default UserCourseList;
