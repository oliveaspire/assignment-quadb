import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form Submitted");
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      console.log(response);
      if (response.status === 200) {
        console.log("Login Successful");
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-row bg-[#fff]">
      <section className="poppins bg-[#F3F5F7] login-bg-image font-semibold w-1/2 h-dvh text-center bg-">
        <h1 className="p-8 text-xl">
          3legant
          <span className="text-[#6C7275]">.</span>
        </h1>
      </section>
      <section className="w-1/2 h-dvh text-center flex items-center ">
        <form className="w-3/4 p-8 text-left" onSubmit={handleFormSubmit}>
          <div>
            <h1 className="poppins text-4xl h-22 text-left font-medium p-2 pb-3">
              Sign In
            </h1>
            <Link to="/signup">
              <h2 className="text-left text-[#6C7275] bg-[#fff]">
                Don't have an account?{" "}
                <span className="text-[#38CB89] font-semibold"> Sign Up</span>
              </h2>
            </Link>
          </div>
          <div className="flex flex-col items-left justify-center pl-0 p-8">
            <input
              type="email"
              placeholder="Your username or email address"
              className="p-2 border-b mb-8 w-full border-[#E8ECEF] focus:outline-none"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border-b mb-8 w-full border-[#E8ECEF] focus:outline-none"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <div className="flex flex-row">
              <input type="checkbox" className="w-8" />
              <div className="flex flex-row justify-between w-full">
                <label className="text-[#6C7275] ml-4 text-l">
                  Remember me
                </label>
                <Link to="#" className="font-semibold ml-4">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button className="w-full p-3 mt-4 bg-black text-white rounded">
              Sign In
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
