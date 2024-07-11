// // import React from "react";
// // import "../styles/Courses.css";
// // import add from "../images/add.png";
// // import Layout from "../components/Layout";
// // import { Link } from "react-router-dom";

// // function Courses({ courses, addCourse }) {
// //   // Receive courses and addCourse as props
// //   return (
// //     <Layout>
// //       <div
// //         style={{
// //           display: "flex",
// //           justifyContent: "space-between",
// //           paddingTop: "3rem",
// //         }}
// //         className="courseMain px-2 py-5"
// //       >
// //         {courses.map((course) => (
// //           <div key={course.id} className="card">
// //             <div className="card-image">
// //               <img
// //                 src={course.image}
// //                 style={{ width: "100%", height: "8rem" }}
// //                 alt={course.title}
// //               />
// //             </div>
// //             <div className="card-body">
// //               <h5 className="card-title">{course.title}</h5>
// //               <h6 className="card-subtitle mb-2 text-body-secondary">
// //                 {course.instructor}
// //               </h6>
// //               <p className="card-text">{course.description}</p>
// //               <div style={{ display: "flex", justifyContent: "space-evenly" }}>
// //                 <button
// //                   className="addCourse btn btn-success me- pb-2"
// //                   onClick={() => addCourse(course)}
// //                 >
// //                   <img src={add} className="buttonImage" alt="Add" />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="d-flex justify-content-center mt-4">
// //         <Link to="/add-course" className="btn btn-primary">
// //           Add New Course
// //         </Link>
// //       </div>
// //     </Layout>
// //   );
// // }

// // export default Courses;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios"; // Import Axios for HTTP requests
// // import Layout from "../components/Layout";
// // import { Link } from "react-router-dom";
// // import add from "../images/add.png";
// // import "../styles/Courses.css";

// // function Courses({ addCourse }) {
// //   const [courses, setCourses] = useState([]);

// //   useEffect(() => {
// //     // Function to fetch courses from backend
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:5000/courses");
// //         setCourses(response.data); // Set courses state with fetched data
// //       } catch (error) {
// //         console.error("Error fetching courses:", error.message);
// //       }
// //     };

// //     fetchCourses(); // Call fetchCourses when component mounts
// //   }, []); // Empty dependency array ensures useEffect runs only once

// //   return (
// //     <Layout>
// //       <div className="courseMain px-2 py-5">
// //         {courses.map((course) => (
// //           <div key={course._id} className="card">
// //             <div className="card-image">
// //               <img
// //                 src={course.image}
// //                 style={{ width: "100%", height: "8rem" }}
// //                 alt={course.title}
// //               />
// //             </div>
// //             <div className="card-body">
// //               <h5 className="card-title">{course.title}</h5>
// //               <h6 className="card-subtitle mb-2 text-body-secondary">
// //                 {course.instructor}
// //               </h6>
// //               <p className="card-text">{course.description}</p>
// //               <div style={{ display: "flex", justifyContent: "space-evenly" }}>
// //                 <button
// //                   className="addCourse btn btn-success me- pb-2"
// //                   onClick={() => addCourse(course)}
// //                 >
// //                   <img src={add} className="buttonImage" alt="Add" />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="d-flex justify-content-center mt-4">
// //         <Link to="/add-course" className="btn btn-primary">
// //           Add New Course
// //         </Link>
// //       </div>
// //     </Layout>
// //   );
// // }

// // export default Courses;

// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import Axios for HTTP requests
// import Layout from "../components/Layout";
// import { Link } from "react-router-dom";
// import add from "../images/add.png";
// import "../styles/Courses.css";

// function Courses({ addCourse }) {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Function to fetch courses from backend
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/courses");
//         setCourses(response.data); // Set courses state with fetched data
//       } catch (error) {
//         console.error("Error fetching courses:", error.message);
//       }
//     };

//     fetchCourses(); // Call fetchCourses when component mounts
//   }, []); // Empty dependency array ensures useEffect runs only once

//   return (
//     <Layout>
//       <div className="courseMain px-2 py-5">
//         {/* Display existing courses (hardcoded) */}
//         {courses.map((course) => (
//           <div key={course._id} className="card">
//             <div className="card-image">
//               <img
//                 src={course.image}
//                 style={{ width: "100%", height: "8rem" }}
//                 alt={course.title}
//               />
//             </div>
//             <div className="card-body">
//               <h5 className="card-title">{course.title}</h5>
//               <h6 className="card-subtitle mb-2 text-body-secondary">
//                 {course.instructor}
//               </h6>
//               <p className="card-text">{course.description}</p>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-evenly",
//                 }}
//               >
//                 <button
//                   className="addCourse btn btn-success me- pb-2"
//                   onClick={() => addCourse(course)}
//                 >
//                   <img src={add} className="buttonImage" alt="Add" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="d-flex justify-content-center mt-4">
//         <Link to="/add-course" className="btn btn-primary">
//           Add New Course
//         </Link>
//       </div>
//     </Layout>
//   );
// }

// export default Courses;

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import add from "../images/add.png";
import "../styles/Courses.css";

function Courses({ addCourse }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Function to fetch courses from backend
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/courses");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data); // Set courses state with fetched data
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };

    fetchCourses(); // Call fetchCourses when component mounts
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <Layout>
      <div className="courseMain px-2 py-5">
        {/* Display existing courses */}
        {courses.map((course) => (
          <div key={course._id} className="card">
            <div className="card-image">
              <img
                src={course.image}
                style={{ width: "100%", height: "8rem" }}
                alt={course.title}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {course.instructor}
              </h6>
              <p className="card-text">{course.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <button
                  className="addCourse btn btn-success me- pb-2"
                  onClick={() => addCourse(course)}
                >
                  <img src={add} className="buttonImage" alt="Add" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/add-course" className="btn btn-primary">
          Add New Course
        </Link>
      </div>
    </Layout>
  );
}

export default Courses;
