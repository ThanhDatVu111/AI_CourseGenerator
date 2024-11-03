"use client";
import React from "react";
import dynamic from "next/dynamic";

const SideBar = dynamic(() => import("./_components/SideBar"), { ssr: false });
const Header = dynamic(() => import("./_components/Header"), { ssr: false });

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="md:w-64 hidden md:block">
        <SideBar />
      </div>
      <div className="md:ml-64 ">
        <Header />
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
