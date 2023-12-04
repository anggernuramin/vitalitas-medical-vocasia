import React from "react";

const SocialIcons = ({ Icons, title }) => {
  return (
    <div className="text-[#FFF]">
    <h1 className="mb-1 font-semibold">{title}</h1>
    <div className="flex">
      {Icons.map((icon) => (
        <img className="mr-3" key={icon.name} src={`${icon.icon}`} alt="" />
      ))}
      </div>
    </div>
  );
};

export default SocialIcons;