//App.js
import "./App.css";
import Course from "./components/Course";
import CourseDetails from "./components/CourseDetails";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App">
          <header class="text-gray-600 body-font bg-indigo-950 justify-center flex ">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                <a class="mr-5 hover:text-gray-900"></a>
                <a class="mr-5 hover:text-gray-900"></a>
                <a class="mr-5 hover:text-gray-900"></a>
                <a class="hover:text-gray-900"></a>
              </nav>
              <div
                class="flex justify-center
             order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-200 lg:items-center lg:justify-center mb-4 md:mb-0"
              >
                <Link to="/">
                  <span class="ml-3 text-xl hover:text-gray-400">
                    Course Listing
                  </span>
                </Link>
              </div>
              <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                <Link to="/dashboard">
                  <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Dashboard
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </header>{" "}
        </div>
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
