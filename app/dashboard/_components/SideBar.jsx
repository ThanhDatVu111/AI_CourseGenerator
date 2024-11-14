"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { IoHome} from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { usePathname } from "next/navigation";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";


const SideBar = () => {
  const { userCourseList, setUserCourseList } = useContext(
    UserCourseListContext
  ); // get userCourseList from UserCourseListContext

  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <IoHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <MdExplore />,
      path: "/dashboard/explore",
    },
  ];
  const path = usePathname();
  return (
    <div className="fixed h-full md:w-64 p-5 shadow-2xl">
      <Image src={"/logo.svg"} width={250} height={100} />
      <hr className="my-4 border-black" />
      <ul>
        {Menu.map((item) => (
          <Link href={item.path}>
            <div
              className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100
                    hover:text-black rounded-lg mb-3
                    ${item.path == path && "bg-gray-100 text-black"}`}
            >
              <div className="text-2xl">{item.icon}</div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>

      <div className="absolute bottom-10 w-[80%]">
        <Progress value={(userCourseList?.length / 5) * 100} />
        {/* using percentage */}
        <h2 className="text-sm my-2">
          {userCourseList?.length} Out of 5 Course created
        </h2>
        <h2 className="text-xs text-gray-500">
          Upgrade your plan for unlimted course generate
        </h2>
      </div>
    </div>
  );
};

export default SideBar

