// import React from 'react';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// export default function PropertyCard({ property, view }) {
//   return (
//     <article className={`property ${view}`}>
//       {/* <div className='thumb'><img src={property.image} alt={property.title} /></div> */}
//       <div className='info'>
//         <h3>{property.title}</h3>
//         <p><FaMapMarkerAlt /> {property.location} - {property.price}</p>
//         <p>{property.description}</p>
//       </div>
//     </article>
//   );
// }


import React from "react";

const PropertyCard = ({ property, view }) => {
  return (
    <div className={`property-card ${view === "list" ? "list-view" : ""}`}>
      <img src={property.image} alt={property.title} />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p className="info">{property.location}</p>
        <p>{property.description}</p>
        <p className="price">{property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;