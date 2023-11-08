import React from "react";
import courseModel from "./dummyData";
import { Link } from "react-router-dom";

function CourseList() {
  return (
    <div className="">
      {courseModel.map((course) => (
        <div key={course.id}>
          <h2>
            <Link to={`/courses/${course.id}`}>{course.name}</Link>{" "}
          </h2>
          <p className="">{course.instructor}</p>
          <p>{course.description}</p>
          <p
            className={
              course.enrollmentStatus === "Open"
                ? "text-green-400"
                : course.enrollmentStatus === "Closed"
                ? "text-red-500"
                : "text-orange-400"
            }
          >
            {course.enrollmentStatus}
          </p>

          <p>{course.duration}</p>
          <p>{course.schedule}</p>
          <p>{course.location}</p>
          <p>{course.prerequisites}</p>

          {/* <h3>Enrolled Students:</h3>
          <ul>
            {course.students.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
}

export default CourseList;
