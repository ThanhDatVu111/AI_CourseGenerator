"use client";
import React, { useState } from "react";
import { UserCourseListContext } from "../_context/UserCourseListContext";
import dynamic from "next/dynamic";
const SideBar = dynamic(() => import("./_components/SideBar"), { ssr: false });
const Header = dynamic(() => import("./_components/Header"), { ssr: false });


function DashboardLayout({ children }) {
  const [userCourseList, setUserCourseList] = useState([]);
  return (
    <UserCourseListContext.Provider
      value={{ userCourseList, setUserCourseList }}
    >
      {/* if SideBar or Header (or any other nested component) needs access to
      userCourseList or wants to update it, they can do so by using React's
      useContext(UserCourseListContext). */}
      <div>
        <div className="md:w-64 hidden md:block">
          <SideBar />
        </div>
        <div className="md:ml-64 ">
          <Header />
          <div className="p-10">{children}</div>
        </div>
      </div>
    </UserCourseListContext.Provider>
  );
}

export default DashboardLayout;
