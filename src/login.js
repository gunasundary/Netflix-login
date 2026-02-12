import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./assert/logo.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }

    try {
      // Backend API call
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data === true) {
        // Successful login
        setError("");
        navigate("/Dashboard");
      } else {
        // Invalid login
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="h-screen bg-[#101010] flex items-center justify-center relative">
      <img src={logo} alt="Netflix" className="absolute w-72 top-6 left-6" />
      <form
        onSubmit={handleSubmit}
        className="bg-black border border-gray-700 p-10 w-[350px]"
      >
        <h1 className="text-white text-3xl mb-6 font-bold">Sign In</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-gray-800 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-gray-800 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Display error messages */}
        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-red-600 p-3 text-white font-bold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
