import { HiOutlineRectangleStack } from "react-icons/hi2";
import { IoLanguageOutline } from "react-icons/io5";
import {
  IoIosCheckmarkCircleOutline,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { GoGoal } from "react-icons/go";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EditBasicInfo from "./EditBasicInfo";
import React, { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/configs/FirebaseConfig";
import { db } from "@/configs/Db";
import { CourseList } from "@/configs/Schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

const BasicInfo = ({ course, refreshData, edit }) => {
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    if (course) {
      setSelectedFile(course?.courseBanner);
    }
  }, [course]);

  const onFileSelected = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));

    const fileName = Date.now() + ".jpg";
    const storageRef = ref(storage, "ai-course-pic/" + fileName);
    await uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("Upload File Complete");
      })
      .then((resp) => {
        getDownloadURL(storageRef).then(async (downloadUrl) => {
          console.log(downloadUrl);

          await db
            .update(CourseList)
            .set({
              courseBanner: downloadUrl,
            })
            .where(eq(CourseList.id, course?.id));
        });
      });
  };
  return (
    <div className="p-10 border rounded-xl shadow-lg mt-5 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h2 className="flex items-center gap-2 font-bold text-3xl ">
            {course?.courseOutput?.course?.name}
            {edit && (
              <EditBasicInfo course={course} refreshData={refreshData} />
            )}
          </h2>
          <p className="text-md text-gray-500 mt-3">
            {course?.courseOutput?.course?.description}
          </p>
          <h2 className="font-medium mt-2 flex gap-2 items-center text-primary">
            <HiOutlineRectangleStack />
            {course?.category}
          </h2>
          <div className="mt-5">
            <h3 className="font-semibold text-lg">Course Details:</h3>
            <p className="mt-2 flex items-center">
              <IoIosCheckmarkCircleOutline className="mr-2" />
              Prerequisites: {course?.courseOutput?.course?.prerequisites}
            </p>
            <p className="mt-2 flex items-center">
              <IoLanguageOutline className="mr-2" />
              Language: {course?.courseOutput?.course?.language}
            </p>
            <p className="mt-2 flex items-center">
              <IoIosInformationCircleOutline className="mr-2" />
              Format: {course?.courseOutput?.course?.format}
            </p>
            <p className="mt-2 grid grid-cols-[auto,1fr] items-start gap-2">
              <GoGoal className="text-md self-center" />
              <span>Outcome: {course?.courseOutput?.course?.outcome}</span>
            </p>
          </div>
          {!edit && (
            <Link href={"/course/" + course?.courseId + "/start"}>
              <Button className="w-full mt-5">Start</Button>
            </Link>
          )}
        </div>

        {/* Right Section (Image) */}
        <div className="relative h-full">
          <label htmlFor="upload-image">
            <div className="relative w-full h-full">
              <Image
                src={selectedFile ? selectedFile : "/placeholder.png"}
                alt="Course banner"
                layout="fill"
                style={{ objectFit: "cover" }}
                className="rounded-xl cursor-pointer"
              />
            </div>
          </label>
          {edit && (
            <input
              type="file"
              id="upload-image"
              className="hidden"
              onChange={onFileSelected}
              accept="image/*"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
