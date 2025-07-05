import React from "react";

const Button = ({
  label,
  children,
  onClick,
  type = "button",
  className = "",
  variant = "oren",
  ikon,
}) => {
  const variantClasses = {
    green: "bg-greenDark text-white border-greenDark hover:bg-white hover:text-greenDark",
    outline: "bg-transparent text-green border-green hover:bg-green hover:text-white",
    danger: "bg-red-600 text-white border-red-600 hover:bg-red-700",
    secondary: "bg-gray-200 text-black border-gray-300 hover:bg-gray-300",
    ghost: "bg-transparent text-black border-transparent hover:bg-gray-100",
    brown :"bg-brown text-white border-2 border-brown",
    oren :" bg-white text-orange-600 border-2 border-orange-600 "

  };

  const baseClasses =
    "flex items-center gap-2 px-5 py-2 rounded-lg font-bold border-2 transition";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant] || ""} ${className}`}
    >
      {ikon && <span className="text-lg">{ikon}</span>}
      {children || label}
    </button>
  );
};

export default Button;
