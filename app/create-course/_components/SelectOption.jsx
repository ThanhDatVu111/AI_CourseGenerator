import React, { useContext } from "react";
import { UserInputContext } from "@/app/_context/UserInputContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function SelectOption() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label className="text-sm">🎓 Difficulty Level</label>
          <Select
            onValueChange={(value) => handleInputChange("level", value)}
            defaultValue={userCourseInput?.level}
          >
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">🕒 Course Duration</label>
          <Select
            onValueChange={(value) => handleInputChange("duration", value)}
            defaultValue={userCourseInput?.duration}
          >
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hourse">1 Hours</SelectItem>
              <SelectItem value="2 Hourse">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hourse">
                More than 3 Hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">▶️ Add Video</label>
          <Select
            onValueChange={(value) => handleInputChange("video", value)}
            defaultValue={userCourseInput?.video}
          >
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">🌐 Language</label>
          <Select
            onValueChange={(value) => handleInputChange("language", value)}
            defaultValue={userCourseInput?.language}
          >
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Vietnamese">Vietnamese</SelectItem>
              <SelectItem value="Chinese">Chinese</SelectItem>
              <SelectItem value="Japanese">Japanese</SelectItem>
              <SelectItem value="Spanish">Spanish</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">📝 Preferred Course Format</label>
          <Select
            onValueChange={(value) => handleInputChange("format", value)}
            defaultValue={userCourseInput?.format}
          >
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Video Lectures"> Video Lectures</SelectItem>
              <SelectItem value="Written Articles">Written Articles</SelectItem>
              <SelectItem value="Quizzes">Quizzes</SelectItem>
              <SelectItem value="Hands-On Exercises">
                {" "}
                Hands-On Exercises
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">📖 No of Chapters</label>
          <Input
            type="number"
            className="h-14 text-lg"
            defaultValue={userCourseInput?.noOfChapter}
            onChange={(event) =>
              handleInputChange("noOfChapter", event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
