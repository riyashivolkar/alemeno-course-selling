import React, { useState } from "react";
import courseModel from "./dummyData";

const UserDashboard = ({}) => {
  const [completedCourses, setCompletedCourses] = useState([]);

  const markCourseAsCompleted = (courseId) => {
    // Add the course to the list of completed courses
    setCompletedCourses([...completedCourses, courseId]);
  };

  return (
    <div className=" bg-blue-100 ">
      <h1 className="sm:text-3xl text-xl font-bold p-4 bg-blue-100 text-indigo-500  text-border  ">
        Your Enrolled Courses
      </h1>
      <ul className="space-y-6 ">
        {courseModel &&
          courseModel.map((course) => (
            <li
              key={course.id}
              className="border border-gray-300 p-4 rounded-lg shadow-md bg-white ml-4 mr-4 "
            >
              <div className="flex  space-x-4 ">
                <img
                  src={course.thumbnail}
                  alt={course.name}
                  className="sm:w-1/3 w-1/2  sm:h-1/2 h-full object-cover rounded-lg sm:pb-0 pb-48 bg-gray-300 sm:p-0 p-4 "
                />
                <div className="flex-1">
                  <h2 className=" sm:text-xl text-[17px] font-semibold">
                    {course.name}
                  </h2>
                  <p className="text-gray-600 sm:text-[16px] text-sm">
                    Instructor: {course.instructor}
                  </p>
                  <p className="text-gray-600 sm:text-[16px] text-sm">
                    Duration: {course.duration}
                  </p>
                  <p className="text-gray-600 sm:text-[16px] text-sm">
                    Schedule: {course.schedule}
                  </p>
                  <p className="text-gray-600 sm:text-[16px] text-sm">
                    Location: {course.location}
                  </p>
                  <p className="text-gray-600 sm:text-[16px] text-sm">
                    Prerequisites: {course.prerequisites.join(", ")}
                  </p>
                  {/* Add a progress bar here */}
                  <button
                    onClick={() => markCourseAsCompleted(course.id)}
                    className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                  >
                    Mark as Completed
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
