//CourseDetails.js
import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access route parameters
import courseModel from "./dummyData";
function CourseDetails() {
  const [showSyllabus, setShowSyllabus] = useState(false);

  const toggleSyllabus = () => {
    setShowSyllabus(!showSyllabus);
  };
  const { id } = useParams();

  // Find the course with the matching ID
  const course = courseModel.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className=" p-4 rounded-lg">
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-2 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden p-2 bg-gray-300">
              <img
                alt="Course Thumbnail"
                className="object-cover object-center h-full w-full"
                src={course.thumbnail}
              />
            </div>
            <h2 className="text-2xl text-gray-900 tracking-wider mt-5 font-semibold">
              {course.name}
            </h2>
            <p className="text-sm text-gray-600 tracking-wide p-1">
              {course.description}
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 mx-auto ">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 bg-blue-100 p-4">
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Instructor</span>
                <span className="ml-auto text-gray-900">
                  {course.instructor}
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Enrollment Status</span>
                <span
                  className={`ml-auto ${
                    course.enrollmentStatus === "Open"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {course.enrollmentStatus}
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Course Duration</span>
                <span className="ml-auto text-gray-900">{course.duration}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Location</span>
                <span className="ml-auto text-gray-900">{course.location}</span>
              </div>

              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500 mr-2">Prerequisites</span>
                <span className="ml-auto text-gray-900">
                  <ul>
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index}>
                        <span className="prerequisite-bullet">&#8226;</span>{" "}
                        {prerequisite}
                      </li>
                    ))}
                  </ul>
                </span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500 mr-2">Schedule</span>
                <span className="ml-auto text-gray-600 text-sm">
                  {course.schedule}
                </span>
              </div>

              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Syllabus</span>
                <span className="ml-auto text-gray-600 text-sm">
                  <button
                    onClick={toggleSyllabus}
                    className="ml-auto text-indigo-500 focus:outline-none"
                  >
                    {showSyllabus ? "Hide" : "Show"}
                  </button>
                </span>
              </div>

              {showSyllabus && (
                <div>
                  {course.syllabus.map((item) => (
                    <div key={item.week} className="mb-5">
                      <h3 className="text-lg font-semibold text-gray-700 mt-2">
                        Week {item.week}: {item.topic}
                      </h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseDetails;
