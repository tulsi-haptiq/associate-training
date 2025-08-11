import React from "react";
import { useRouteError } from "react-router-dom";

export default function CustomErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
      <p className="mb-4">{error.statusText || error.message}</p>
      <a
        href="/"
        className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
