import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserInputContext } from "@/app/_context/UserInputContext";
import React, { useContext } from "react";

const TopicDescription = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="mx-20 lg:mx-44">
      {/* Input Topic */}
      <div className="mt-5">
        <label>
          💡 Specify the topic you want to create a course on (e.g., Python
          Programming, Yoga Basics, etc.):
        </label>
        <Input
          placeholder={"Topic"}
          className="h-14 text-xl"
          defaultValue={userCourseInput?.topic}
          onChange={(e) => handleInputChange("topic", e.target.value)}
        />
      </div>

      {/* Course Details */}
      <div className="mt-5">
        <label>
          📝 Describe your course vision. What key ideas or skills should it
          cover? (Optional)
        </label>
        <Textarea
          placeholder="About your course"
          className="h-24 text-xl"
          defaultValue={userCourseInput?.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>

      {/* Target Audience */}
      <div className="mt-5">
        <label>
          🎯 Who is your target audience for this course? (e.g., Beginners,
          Intermediate learners, Professionals)
        </label>
        <Input
          placeholder="Target Audience"
          className="h-14 text-xl"
          defaultValue={userCourseInput?.target}
          onChange={(e) => handleInputChange("target", e.target.value)}
        />
      </div>

      {/* Key Learning Outcomes */}
      <div className="mt-5">
        <label>
          📚 What are the main learning outcomes you want students to gain from
          this course? (Optional)
        </label>
        <Textarea
          placeholder="Learning Outcomes"
          className="h-24 text-xl"
          defaultValue={userCourseInput?.outcomes}
          onChange={(e) => handleInputChange("outcomes", e.target.value)}
        />
      </div>
    </div>
  );
};

export default TopicDescription;
