import React, { useState, useEffect } from "react";
import "./App.css";

const Editable = ({ text, placeholder, children, childRef, ...props }) => {
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  const handleKeyDown = event => {
    const { key } = event;
    switch (key) {
      case "Enter":
      case "Escape":
        setEditing(false);
        break;
      default:
        break;
    }
  };

  return (
    <section {...props}>
      {isEditing ? (
        <div onBlur={() => setEditing(false)} onKeyDown={handleKeyDown}>
          {children}
        </div>
      ) : (
        <div
          className="rounded py-2 px-3 text-gray-700 leading-tight hover:shadow-outline"
          onClick={() => setEditing(true)}
        >
          {text || placeholder || "Editable content"}
        </div>
      )}
    </section>
  );
};

export default Editable;
