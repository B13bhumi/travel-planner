import React, { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignup ? "Sign Up" : "Login"}
        </h2>

        {/* Login Form */}
        {!isSignup && (
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        )}

        {/* Signup Form */}
        {isSignup && (
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Toggle Link */}
        <p className="text-center mt-4 text-sm">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                className="text-blue-500 underline"
                onClick={() => setIsSignup(false)}
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                className="text-blue-500 underline"
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
