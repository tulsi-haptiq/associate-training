import React, { useState } from "react";

export default function SignUp() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-black-700 to-indigo-900 relative overflow-hidden">
      {/* Background bubbles */}
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
              animationDuration: `${Math.random() * 5 + 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Auth Box */}
      <div className="relative bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl shadow-lg p-6 sm:p-10 w-full max-w-sm sm:max-w-md text-white z-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        <form>
          <div className="space-y-4">
            {isSignUp && (
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-full bg-black/60 placeholder-white/70 focus:outline-none text-sm sm:text-base"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-full bg-black/60 placeholder-white/70 focus:outline-none text-sm sm:text-base"
            />
            <input
              type="password"
              placeholder="Password"
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
              <>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <input type="checkbox" className="accent-purple-500" />
                  Remember me
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 py-2 rounded-full hover:from-purple-600 hover:to-indigo-600 text-sm sm:text-base"
                >
                  Sign In
                </button>
              </>
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
