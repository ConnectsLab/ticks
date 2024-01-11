import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* container */}
      <div className="md:w-[50%] mx-auto font-body text-violet-50 font-light text-center">
        <p>
          Made By <span className="font-bold underline">ConnectsLab</span>{" "}
        </p>
        <p>©2024</p>
      </div>
    </footer>
  );
};

export default Footer;
