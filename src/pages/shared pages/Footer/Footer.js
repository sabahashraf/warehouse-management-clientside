import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <p className="text-center bg-dark text-white mt-auto">
      <small>&copy;copyright {year}.All rights reserved</small>
    </p>
  );
};

export default Footer;
