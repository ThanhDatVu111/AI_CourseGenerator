"use client";
import { db } from "@/configs/Db";
import { Chapters, CourseList } from "@/configs/Schema";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import ChapterListCard from "./_components/ChapterListCard";
import ChapterContent from "./_components/ChapterContent";
import { useRouter } from "next/navigation";

function CourseStart({ params }) {
  const [course, setCourse] = useState();
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [chapterContent, setChapterContent] = useState();
  const router = useRouter();

  useEffect(() => {
    GetCourse();
  }, []);
  //GetCourse() will only be called once when the component initially mounts. 
  //It will not be called on every render or update, only on the first render.

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList?.courseId, params?.courseId));

    setCourse(result[0]);
  };

  const GetSelectedChapterContent = async (chapterId) => {
    const result = await db
      .select()
      .from(Chapters)
      .where(
        and(
          eq(Chapters.chapterId, chapterId),
          eq(Chapters.courseId, course?.courseId)
        )
      );
    setChapterContent(result[0]);
    console.log(result);
  };

  return (
    <div>
      {/* Chapter list Side Bar  */}
      <div className=" fixed md:w-72 hidden md:block h-screen border-r shadow-lg">
        {/* Course Name  */}
        <h2 className="font-medium text-lg bg-primary p-4 text-white">
          {course?.courseOutput?.course?.name}
        </h2>
        {/* Chapters List  */}
        <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)]">
          {course?.courseOutput?.course?.chapters.map((chapter, index) => (
            <div
              key={index}
              className={`cursor-pointer hover:bg-[#e8e4e3]
                ${selectedChapter?.name == chapter?.name && "bg-[#e8e4e3]"}`}
              onClick={() => {
                setSelectedChapter(chapter); // Sets the clicked chapter as the selectedChapter
                GetSelectedChapterContent(index); // Fetches the content for the clicked chapter
              }}
            >
              <ChapterListCard chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      </div>
      {/* Content Div  */}
      <div className="md:ml-72">
        <ChapterContent chapter={selectedChapter} content={chapterContent} />
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full p-4 bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default CourseStart;
