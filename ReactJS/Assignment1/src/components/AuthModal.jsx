import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/authSlice";
import { toast } from "react-toastify";

export default function AuthModal({ isOpen, onClose, mode }) {
  const [isSignUp, setIsSignUp] = useState(mode === "signup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setIsSignUp(mode === "signup");
  }, [mode]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isSignUp) {
      if (users.find((u) => u.email === formData.email)) {
        toast.error("User already exists");
        return;
      }

      const newUser = { ...formData };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      dispatch(login(newUser));
      toast.success("Signed up successfully");
      onClose();
    } else {
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        dispatch(login(user));
        toast.success("Logged in successfully");
        onClose();
      } else {
        toast.error("Invalid credentials");
      }
    }

    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              onChange={handleChange}
              value={formData.name}
              className="w-full border px-4 py-2 rounded"
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={formData.email}
            className="w-full border px-4 py-2 rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={formData.password}
            className="w-full border px-4 py-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsSignUp(false)}
                className="text-indigo-600 cursor-pointer"
              >
                Sign In
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsSignUp(true)}
                className="text-indigo-600 cursor-pointer"
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
