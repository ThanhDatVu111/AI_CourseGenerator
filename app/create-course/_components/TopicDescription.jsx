import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TopicDescription = () => {
  return (
    <div className="mx-20 lg:mx-44">
      {/* Input Topic */}
      <div className="mt-5">
        <label>
          💡 Specify the topic you want to create a course on (e.g., Python
          Programming, Yoga Basics, etc.):
        </label>
        <Input placeholder={"Course Topic"} />
      </div>

      {/* Course Details */}
      <div className="mt-5">
        <label>
          📝 Describe your course vision. What key ideas or skills should it
          cover? (Optional)
        </label>
        <Textarea placeholder="Course Details" />
      </div>

      {/* Target Audience */}
      <div className="mt-5">
        <label>
          🎯 Who is your target audience for this course? (e.g., Beginners,
          Intermediate learners, Professionals)
        </label>
        <Input placeholder="Target Audience" />
      </div>

      {/* Key Learning Outcomes */}
      <div className="mt-5">
        <label>
          📚 What are the main learning outcomes you want students to gain from
          this course? (Optional)
        </label>
        <Textarea placeholder="Learning Outcomes" />
      </div>
    </div>
  );
};

export default TopicDescription;
