import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { db } from "@/configs/Db";
import { CourseList } from "@/configs/Schema";
import { eq } from "drizzle-orm";

function EditBasicInfo({ course, refreshData }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    setName(course?.courseOutput?.course?.name);
    setDescription(course?.courseOutput?.course?.description);
  }, [course]);
  //   when course changes, the useEffect hook runs, calling setName and setDescription to update the name and description state variables with the latest values from course.

  const onUpdateHandler = async () => {
    course.courseOutput.course.name = name;
    course.courseOutput.course.description = description;
    const result = await db
      .update(CourseList)
      .set({
        courseOutput: course?.courseOutput,
      })
      .where(eq(CourseList?.id, course?.id));
      refreshData(true)
  };
  // The .set({ courseOutput: course?.courseOutput }) part tells the database to update the courseOutput field in the CourseList table to match the current state of course.courseOutput.
  // The .where(eq(CourseList?.id, course?.id)) ensures that only the row with the matching id is updated.
  // useEffect alone won’t cause an automatic re-fetch from the database. It only responds to changes in dependencies like course. Without refreshData, after editing, course wouldn’t automatically update unless you trigger a manual refresh.

  return (
    <Dialog>
      <DialogTrigger>
        <HiPencilSquare />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Course Title & Description</DialogTitle>
          <DialogDescription>
            <div className="mt-3">
              <label>Course Title</label>
              <Input
                defaultValue={course?.courseOutput?.course?.name}
                onChange={(event) => setName(event?.target.value)}
                //  it triggers a state update using the setName function from the useState hook.
              />
            </div>
            <div>
              <label>Description</label>
              <Textarea
                className="h-40"
                defaultValue={course?.courseOutput?.course?.description}
                onChange={(event) => setDescription(event?.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button onClick={onUpdateHandler}>Update</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditBasicInfo;
