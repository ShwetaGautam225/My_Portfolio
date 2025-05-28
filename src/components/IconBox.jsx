import React from "react";

const IconBox = ({ icon, title, description }) => {
  return (
    <article>
      <div className="h-full text-left border border-gray-700 rounded-sm p-4">
        <div className="h-20 w-20 mx-auto flex justify-center items-center rounded-full p-4 border-2 border-gray-600 mb-2">
          <img src={icon} alt={title + " icon"} />
        </div>
        <h3 className="text-white text-center text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-center">{description}</p>
      </div>
    </article>
  );
};

export default IconBox;