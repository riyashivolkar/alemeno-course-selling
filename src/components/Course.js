import React, { useState } from "react";
import courseModel from "./dummyData";
import { Link } from "react-router-dom";

function Course({ course }) {
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [filteredCourses, setFilteredCourses] = useState(courseModel); // State for filtered courses

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Split the input into words
    const searchWords = inputValue.toLowerCase().split(" ");

    // Filter courses based on course name or instructor
    const filtered = courseModel.filter((course) =>
      searchWords.some(
        (word) =>
          course.name.toLowerCase().includes(word) ||
          course.instructor.toLowerCase().includes(word)
      )
    );

    setFilteredCourses(filtered);
  };

  return (
    <div className="text-black">
      <div class="container px-5 py-12 mx-auto">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search by course name or instructor"
          value={searchInput}
          onChange={handleSearchInputChange}
          className="p-2 border border-gray-300 rounded-md mb-4 sm:w-1/3 w-1/2"
        />

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {filteredCourses.map((course) => (
            <div key={course.id} class="p-4 md:w-1/2 sm:mb-0 mb-6">
              <Link to={`/courses/${course.id}`}>
                <div className="bg-gray-200 p-4 rounded-sm shadow-lg">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.name}
                      class="object-cover object-center h-full w-full bg-red-300 cursor-pointer"
                    />
                  </div>

                  <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                    {course.name}
                  </h2>
                  <p class="text-base leading-relaxed mt-2">
                    {course.instructor}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
