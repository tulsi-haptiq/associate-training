import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearError } from "../redux/slice/errorSlice";

export default function GlobalError() {
  const { message } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  if (!message) return null;

  return (
    <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50">
      <p>{message}</p>
      <button
        onClick={() => dispatch(clearError())}
        className="mt-2 px-3 py-1 bg-white text-red-600 rounded"
      >
        Close
      </button>
    </div>
  );
}
