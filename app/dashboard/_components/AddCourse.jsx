"use client"
import React, { useContext } from 'react'
import Link from 'next/link';
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';

const AddCourse = () => {
  const {user}=useUser();
  const { userCourseList, setUserCourseList } = useContext(
    UserCourseListContext
  );
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl">
          Greetings, <span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-sm text-gray-500">
          Launch your AI-powered course, connect with friends, and monetize your
          knowledge!
        </p>
      </div>
      <Link
        href={
          userCourseList?.length >= 5
            ? "dashboard/upgrade"
            : "/create-course"
        }
      >
        <Button>+ Create AI Course</Button>
      </Link>
    </div>
  );
}

export default AddCourse