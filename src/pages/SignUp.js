// import React, { useContext, useState } from "react";
// import AuthContext from "./AuthProvider";
// import "../styles/SignUp.css";
// import user from "../images/signup.jpg";

// function Signup() {
//   const { register } = useContext(AuthContext);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       return alert("Passwords do not match");
//     }
//     await register(username, email, password);
//   };

//   return (
//     <div className="signUpDiv">
//       <img src={user} alt="Signup" className="signUpImage" />
//       <div className="form">
//         <h3 style={{ textAlign: "center", color: "orange" }}>Sign Up</h3>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             name="username"
//             id="username"
//             placeholder="Enter Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             id="confirmPassword"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <button type="submit" id="signUp">
//             Signup
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useContext, useState } from "react";
import AuthContext from "./AuthProvider";
import "../styles/SignUp.css";
import user from "../images/signup.jpg";
import Layout from "../components/Layout";

function Signup() {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    await register(username, email, password, confirmPassword);
  };

  return (
    <Layout>
      <div className="signUpDiv">
        <img src={user} alt="Signup" className="signUpImage" />
        <div className="form">
          <h3 style={{ textAlign: "center", color: "orange" }}>Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" id="signUp">
              Signup
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
