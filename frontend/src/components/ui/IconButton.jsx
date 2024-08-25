import React from 'react'

const IconButton = ({ text, className, Icon, onClick }) => {
  return (
    <button
      className={"p-2 flex flex-col items-center justify-center transition-colors duration-200 " + className}
      onClick={onClick}
    >
      <Icon className="text-5xl" />
      <span className="text-sm font-semibold">{text}</span>
    </button>
  );
};

export default IconButton;