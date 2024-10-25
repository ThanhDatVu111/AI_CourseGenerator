import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
function SelectOption() {
  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label className="text-sm">🎓 Difficulty Level</label>
          <Select>
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
          <Select>
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hourse">1 Hours</SelectItem>
              <SelectItem value="2 Hourse">2 Hourse</SelectItem>
              <SelectItem value="More than 3 Hourse">
                More than 3 Hourse
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm">▶️ Add Video</label>
          <Select>
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
          <Select>
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Spanish">Vietnamese</SelectItem>
              <SelectItem value="English">Chinese</SelectItem>
              <SelectItem value="French">Japanese</SelectItem>
              <SelectItem value="English">Spainish</SelectItem>
              {/* Add more languages as needed */}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm">📝 Preferred Course Format</label>
          <Select>
            <SelectTrigger className="h-14 text-lg">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Video Lectures"> Video Lectures</SelectItem>
              <SelectItem value="Written Articles">Written Articles</SelectItem>
              <SelectItem value="Quizzes">Quizzes</SelectItem>
              <SelectItem value="Hands-On Exercises">
                Hands-On Exercises
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm">📖 No of Chapters</label>
          <Input type="number" />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
