import React from "react";

const ViewToggle = ({ view, setView }) => {
  return (
    <div className="view-toggle">
      <button
        className={view === "grid" ? "active" : ""}
        onClick={() => setView("grid")}
      >
        Grid View
      </button>
      <button
        className={view === "list" ? "active" : ""}
        onClick={() => setView("list")}
      >
        List View
      </button>
    </div>
  );
};

export default ViewToggle;
