import React from "react";

export const Footer = () => {
  let footerstyle = {
    position: "relative",
    top: "10vh",
    width: "100% ",
  };
  return (
    <footer className="bg-dark text-light py-2" style={footerstyle}>
      <p className="text-center">copyright &copy; NewsApi.com</p>
    </footer>
  );
};
