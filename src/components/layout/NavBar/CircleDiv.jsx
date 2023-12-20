import React from "react";

export default function CircleDiv({ children, size, className, ...props }) {
  return (
    <div
      className={`border-circle ${className}`}
      style={{ height: `${size}px`, width: `${size}px` }}
      {...props}
    >
      {children}
    </div>
  );
}
