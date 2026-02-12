import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./assert/logo.jpg"


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
    setError("");
    console.log("Email",email)
    console.log("Password",password)
  };
  function check()
  {
    const logindetails=axios.post("http://localhost:5000/login",{"email":email,"password":password})
    logindetails.then(function(data){

    if(data.data===true)
    {
      navigate("/Dashboard")
    }
    else{
      navigate("/Fail")
    }
  
  
  })
  }

  return (
    <div className="h-screen bg-[#101010] flex items-center justify-center relative">
      <img src={logo} alt="Netflix" className="absolute w-72 top-6 left-6" ></img>
      <div
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
             {error && <p className="text-red-500 mb-3">{error}</p>}
        <button  onClick={check}className="w-full bg-red-600 p-3 text-white font-bold">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
