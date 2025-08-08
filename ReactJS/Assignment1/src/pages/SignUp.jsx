import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/authSlice";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

export default function SignUp() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get("mode");
    setIsSignUp(mode === "signup");
  }, [location.search]);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (isSignUp) {
      // Sign Up
      const userExists = users.find((user) => user.email === formData.email);
      if (userExists) {
        toast.error("User already exists");
        return;
      }

      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      toast.success("Account created successfully! Please sign in.");
      dispatch(login(newUser)); // log in the new user
      setFormData({ name: "", email: "", password: "" });
      navigate("/"); // redirect to home page
    } else {
      // Sign In
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        dispatch(login(user));
        toast.success("Logged in successfully!");
        setFormData({ name: "", email: "", password: "" });
        navigate("/"); // Redirect to homepage
      } else {
        toast.error("Invalid credentials");
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br
       from-gray-900 to-indigo-900 relative overflow-hidden"
    >
      <div className="absolute w-full h-full overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-500 rounded-full opacity-30 animate-pulse"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl shadow-lg p-6 sm:p-10 w-full max-w-sm sm:max-w-md text-white z-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {isSignUp && (
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-full bg-black/60 placeholder-white/70 focus:outline-none text-sm sm:text-base"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-full bg-black/60 placeholder-white/70 focus:outline-none text-sm sm:text-base"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 rounded-full bg-black/60 placeholder-white/70 focus:outline-none text-sm sm:text-base"
            />

            {isSignUp ? (
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 py-2 rounded-full hover:from-purple-600 hover:to-indigo-600 text-sm sm:text-base"
              >
                Create Account
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 py-2 rounded-full hover:from-purple-600 hover:to-indigo-600 text-sm sm:text-base"
              >
                Sign In
              </button>
            )}
          </div>
        </form>

        <p className="text-center text-xs sm:text-sm mt-4">
          {isSignUp ? (
            <>
              Already registered?{" "}
              <span
                className="text-purple-300 cursor-pointer underline"
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                className="text-purple-300 cursor-pointer underline"
                onClick={() => setIsSignUp(true)}
              >
                Create one
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
