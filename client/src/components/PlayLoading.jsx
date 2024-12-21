import React from "react";
import { useSelector } from "react-redux";

const PlayLoading = () => {
  const loading = useSelector((state) => state.auth.loading);

  if (!loading) return null; // Render nothing if not loading

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#461A42] z-50">
      <img
        src="./images/spinner.gif" // Replace with your spinner image path
        alt="Loading..."
        width={100}
        height={100}
        className="filter invert"
      />
    </div>
  );
};

export default PlayLoading;
