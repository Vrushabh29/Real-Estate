import React, { useState } from "react";
import "./styles.css"; // ✅ Single stylesheet
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PropertyCard from "./components/PropertyCard";
import ViewToggle from "./components/ViewToggle";

const App = () => {
  const [view, setView] = useState("grid"); // grid | list

  // 🏡 Sample property data
  const properties = [
    {
      title: "3BHK Apartment in Downtown",
      price: "$250,000",
      location: "Los Angeles",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      description: "Spacious apartment with modern interiors.",
    },
    {
      title: "4BHK Studio Flat",
      price: "$20,000",
      location: "New York",
      image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
      description: "Spacious apartment with modern interiors.",
    },
    {
      title: "Cozy Studio Flat",
      price: "$150,000",
      location: "New York",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
      description: "Perfect for singles or couples, fully furnished.",
    },
    {
      title: "Family House with Garden",
      price: "$400,000",
      location: "Houston",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      description: "4-bedroom family house with a spacious backyard.",
    },
    {
      title: "Modern Penthouse Suite",
      price: "$950,000",
      location: "San Francisco",
      image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
      description: "Panoramic skyline view with luxury finish.",
    },
    {
      title: "Beachfront Cottage",
      price: "$600,000",
      location: "California",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      description: "Peaceful cottage right near the beach.",
    },
  ];

  return (
    <div className="app-container">
      {/* Header Section */}
      <Header />

      {/* Main Content Area */}
      <div className="main-content">
        {/* Sidebar Section */}
        <Sidebar />

        {/* Property Listings Section */}
        <div className="property-section">
          <ViewToggle view={view} setView={setView} />

          <div className={view === "grid" ? "property-grid" : "property-list"}>
            {properties.map((property, index) => (
              <PropertyCard key={index} property={property} view={view} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;