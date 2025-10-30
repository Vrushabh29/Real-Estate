import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="toggle-btn" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Filters</h2>
        <div className="filter-group">
          <label htmlFor="search">Search</label>
          <input id="search" placeholder="Search by title" />
        </div>
        <div className="filter-group">
          <label htmlFor="location">Location</label>
          <input id="location" placeholder="Enter location" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;