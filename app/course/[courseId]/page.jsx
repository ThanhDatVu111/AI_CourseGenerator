"use client"
import Header from "@/app/dashboard/_components/Header.jsx";
import ChapterList from '@/app/create-course/[courseId]/_components/ChapterList'
import BasicInfo from '@/app/create-course/[courseId]/_components/BasicInfo'
import CourseDetail from '@/app/create-course/[courseId]/_components/CourseDetail'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Course({params}) {
  //params is the parameter passed from the router = the course ID
    const [course,setCourse]=useState();

    useEffect(()=>{
        params&&GetCourse();
    },[params]) //if params (course ID) changes , then call GetCourse

    const GetCourse=async()=>{
        const result=await db.select().from(CourseList)
        .where(eq(CourseList?.courseId,params?.courseId))

        setCourse(result[0]);
        console.log(result);
    }

  return (
    <div>
        <Header/>
        <div className='px-10 p-10 md:px-20 lg:px-44'>
        <BasicInfo course={course} edit={false} />
        <CourseDetail course={course} />
        <ChapterList course={course}  edit={false}/>
        </div>
        <h2 className='text-sm text-gray-400 text-center mb-10'>This course created by 
        <Link href={''}>
        Thanh Dat Vu - 2024
        </Link></h2>
    </div>
  )
}

export default Course