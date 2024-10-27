import { UserInputContext } from "@/app/_context/UserInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange = (name) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: name,
    }));
  };

  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5"> Start by Selecting Your Course Category</h2>

      <div className="grid grid-cols-4 gap-2 md:gap-10 ">
        {CategoryList.map((item) => (
          <div
            className={`flex flex-col p-5 border 
            items-center rounded-xl hover:border-primary hover:bg-[#d3c9ce]
            cursor-pointer ${
              userCourseInput?.category == item.name &&
              "border-primary bg-[#d3c9ce]"
            }`}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image src={item.icon} width={50} height={50} />
            <h2 className="text-sm hidden md:block">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCategory;
