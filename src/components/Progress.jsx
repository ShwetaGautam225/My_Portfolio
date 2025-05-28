import React from "react";

const Progress = ({ label, percentage }) => {
  return (
    <div className="my-4 overflow-hidden">
      <label className="inline-block text-gray-400 font-bold mb-2">
        {label}
      </label>
      <div className="relative h-2 w-full bg-gray-700">
        <div
          className="absolute top-0 left-0 h-full w-full bg-[#FD6F00]"
          style={{ transform: `translateX(-${100- percentage}%)` }}
        >
            <div className="absolute -right-2 -top-5 h-4 w-4 rotate-45 rounded-t-2xl rounded-l-2xl bg-gradient-to-r from-[#fd1100] to-[#FD6F00] z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;