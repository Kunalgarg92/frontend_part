// // // // import React, { useState } from "react";

// // // // const AddCourse = ({ addNewCourse }) => {
// // // //   const [id, setId] = useState("");
// // // //   const [image, setImage] = useState(null);
// // // //   const [title, setTitle] = useState("");
// // // //   const [instructor, setInstructor] = useState("");
// // // //   const [description, setDescription] = useState("");

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     const formData = new FormData();
// // // //     formData.append("id", parseInt(id));
// // // //     formData.append("image", image);
// // // //     formData.append("title", title);
// // // //     formData.append("instructor", instructor);
// // // //     formData.append("description", description);

// // // //     addNewCourse(formData);

// // // //     setId("");
// // // //     setImage(null);
// // // //     setTitle("");
// // // //     setInstructor("");
// // // //     setDescription("");
// // // //   };

// // // //   return (
// // // //     <div className="container mt-5">
// // // //       <h3>Add New Course</h3>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <div className="mb-3">
// // // //           <label htmlFor="id" className="form-label">
// // // //             ID
// // // //           </label>
// // // //           <input
// // // //             type="number"
// // // //             className="form-control"
// // // //             id="id"
// // // //             value={id}
// // // //             onChange={(e) => setId(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="mb-3">
// // // //           <label htmlFor="image" className="form-label">
// // // //             Image Upload
// // // //           </label>
// // // //           <input
// // // //             type="file"
// // // //             className="form-control"
// // // //             id="image"
// // // //             onChange={(e) => setImage(e.target.files[0])}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="mb-3">
// // // //           <label htmlFor="title" className="form-label">
// // // //             Course Title
// // // //           </label>
// // // //           <input
// // // //             type="text"
// // // //             className="form-control"
// // // //             id="title"
// // // //             value={title}
// // // //             onChange={(e) => setTitle(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="mb-3">
// // // //           <label htmlFor="instructor" className="form-label">
// // // //             Instructor
// // // //           </label>
// // // //           <input
// // // //             type="text"
// // // //             className="form-control"
// // // //             id="instructor"
// // // //             value={instructor}
// // // //             onChange={(e) => setInstructor(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="mb-3">
// // // //           <label htmlFor="description" className="form-label">
// // // //             Description
// // // //           </label>
// // // //           <textarea
// // // //             className="form-control"
// // // //             id="description"
// // // //             value={description}
// // // //             onChange={(e) => setDescription(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <button type="submit" className="btn btn-primary">
// // // //           Add Course
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddCourse;

// // // // import React, { useState } from "react";
// // // // import axios from "axios"; // Import Axios for HTTP requests

// // // // const AddCourse = ({ addNewCourse }) => {
// // // //   const [id, setId] = useState("");
// // // //   const [image, setImage] = useState(null);
// // // //   const [title, setTitle] = useState("");
// // // //   const [instructor, setInstructor] = useState("");
// // // //   const [description, setDescription] = useState("");

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     const formData = new FormData();
// // // //     formData.append("id", parseInt(id)); // Assuming id is numeric
// // // //     formData.append("image", image);
// // // //     formData.append("title", title);
// // // //     formData.append("instructor", instructor);
// // // //     formData.append("description", description);

// // // //     try {
// // // //       const response = await axios.post(
// // // //         "http://localhost:5000/courses",
// // // //         formData,
// // // //         {
// // // //           headers: {
// // // //             "Content-Type": "multipart/form-data", // Ensure correct content type
// // // //           },
// // // //         }
// // // //       );
// // // //       addNewCourse(response.data); // Add the new course to state
// // // //     } catch (error) {
// // // //       console.error("Error adding course:", error.message);
// // // //     }

// // // //     setId("");
// // // //     setImage(null);
// // // //     setTitle("");
// // // //     setInstructor("");
// // // //     setDescription("");
// // // //   };

// // // //   return (
// // // //     <div className="container mt-5">
// // // //       <h3>Add New Course</h3>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <div className="mb-3">
// // // //           <label htmlFor="id" className="form-label">
// // // //             ID
// // // //           </label>
// // // //           <input
// // // //             type="number"
// // // //             className="form-control"
// // // //             id="id"
// // // //             value={id}
// // // //             onChange={(e) => setId(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="mb-3">
// // // //           <label htmlFor="image" className="form-label">
// // // //             Image Upload
// // // //           </label>
// // // //           <input
// // // //             type="file"
// // // //             className="form-control"
// // // //             id="image"
// // // //             onChange={(e) => setImage(e.target.files[0])}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="mb-3">
// // // //           <label htmlFor="title" className="form-label">
// // // //             Course Title
// // // //           </label>
// // // //           <input
// // // //             type="text"
// // // //             className="form-control"
// // // //             id="title"
// // // //             value={title}
// // // //             onChange={(e) => setTitle(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="mb-3">
// // // //           <label htmlFor="instructor" className="form-label">
// // // //             Instructor
// // // //           </label>
// // // //           <input
// // // //             type="text"
// // // //             className="form-control"
// // // //             id="instructor"
// // // //             value={instructor}
// // // //             onChange={(e) => setInstructor(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div className="mb-3">
// // // //           <label htmlFor="description" className="form-label">
// // // //             Description
// // // //           </label>
// // // //           <textarea
// // // //             className="form-control"
// // // //             id="description"
// // // //             value={description}
// // // //             onChange={(e) => setDescription(e.target.value)}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <button type="submit" className="btn btn-primary">
// // // //           Add Course
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddCourse;

// // // import React, { useState } from "react";

// // // const AddCourse = ({ addNewCourse }) => {
// // //   // const [id, setId] = useState("");
// // //   // const [image, setImage] = useState(null);
// // //   const [title, setTitle] = useState("");
// // //   const [instructor, setInstructor] = useState("");
// // //   const [description, setDescription] = useState("");

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const formData = new FormData();
// // //     formData.append("title", title);
// // //     formData.append("instructor", instructor);
// // //     formData.append("description", description);

// // //     try {
// // //       const response = await fetch("http://localhost:5000/courses", {
// // //         method: "POST",
// // //         body: formData,
// // //       });
// // //       if (!response.ok) {
// // //         const errorMessage = await response.text();
// // //         throw new Error(
// // //           `HTTP error! Status: ${response.status}, Message: ${errorMessage}`
// // //         );
// // //       }
// // //       const data = await response.json();
// // //       addNewCourse(data); // Update state with new course
// // //       // Reset form fields
// // //       setTitle("");
// // //       setInstructor("");
// // //       setDescription("");
// // //     } catch (error) {
// // //       console.error("Error adding course:", error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mt-5">
// // //       <h3>Add New Course</h3>
// // //       <form onSubmit={handleSubmit}>
// // //         {/* <div className="mb-3">
// // //           <label htmlFor="id" className="form-label">
// // //             ID
// // //           </label>
// // //           <input
// // //             type="number"
// // //             className="form-control"
// // //             id="id"
// // //             value={id}
// // //             onChange={(e) => setId(e.target.value)}
// // //             required
// // //           />
// // //         </div> */}
// // //         {/* <div className="mb-3">
// // //           <label htmlFor="image" className="form-label">
// // //             Image Upload
// // //           </label>
// // //           <input
// // //             type="file"
// // //             className="form-control"
// // //             id="image"
// // //             onChange={(e) => setImage(e.target.files[0])}
// // //             required
// // //           />
// // //         </div> */}
// // //         <div className="mb-3">
// // //           <label htmlFor="title" className="form-label">
// // //             Course Title
// // //           </label>
// // //           <input
// // //             type="text"
// // //             className="form-control"
// // //             id="title"
// // //             value={title}
// // //             onChange={(e) => setTitle(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="mb-3">
// // //           <label htmlFor="instructor" className="form-label">
// // //             Instructor
// // //           </label>
// // //           <input
// // //             type="text"
// // //             className="form-control"
// // //             id="instructor"
// // //             value={instructor}
// // //             onChange={(e) => setInstructor(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <div className="mb-3">
// // //           <label htmlFor="description" className="form-label">
// // //             Description
// // //           </label>
// // //           <textarea
// // //             className="form-control"
// // //             id="description"
// // //             value={description}
// // //             onChange={(e) => setDescription(e.target.value)}
// // //             required
// // //           />
// // //         </div>
// // //         <button type="submit" className="btn btn-primary">
// // //           Add Course
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default AddCourse;

// // import React, { useState } from "react";

// // const AddCourse = ({ addNewCourse }) => {
// //   const [title, setTitle] = useState("");
// //   const [instructor, setInstructor] = useState("");
// //   const [description, setDescription] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append("title", title);
// //     formData.append("instructor", instructor);
// //     formData.append("description", description);

// //     try {
// //       const response = await fetch("http://localhost:5000/courses", {
// //         method: "POST",
// //         body: formData,
// //       });
// //       if (!response.ok) {
// //         throw new Error("Failed to add course");
// //       }
// //       const data = await response.json();
// //       addNewCourse(data); // Add the new course to state
// //       // Clear form fields after successful submission
// //       setTitle("");
// //       setInstructor("");
// //       setDescription("");
// //     } catch (error) {
// //       console.error("Error adding course:", error.message);
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h3>Add New Course</h3>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-3">
// //           <label htmlFor="title" className="form-label">
// //             Course Title
// //           </label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="title"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="instructor" className="form-label">
// //             Instructor
// //           </label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="instructor"
// //             value={instructor}
// //             onChange={(e) => setInstructor(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="description" className="form-label">
// //             Description
// //           </label>
// //           <textarea
// //             className="form-control"
// //             id="description"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit" className="btn btn-primary">
// //           Add Course
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddCourse;

import React, { useState } from "react";

const AddCouse = ({ addNewCourse }) => {
  const [courseData, setCourseData] = useState({
    title: "",
    instructor: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error("Failed to add course");
      }

      const data = await response.json();
      addNewCourse(data); // Add the new course to state
      setCourseData({
        title: "",
        instructor: "",
        description: "",
      }); // Clear form fields after successful submission
    } catch (error) {
      console.error("Error adding course:", error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add New Course</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Course Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="instructor" className="form-label">
            Instructor
          </label>
          <input
            type="text"
            className="form-control"
            id="instructor"
            name="instructor"
            value={courseData.instructor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={courseData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCouse;
