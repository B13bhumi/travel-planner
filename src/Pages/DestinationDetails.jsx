// src/Pages/DestinationDetails.jsx
// This page shows full details for one destination.
// src/Pages/DestinationDetails.jsx
// src/Pages/DestinationDetails.jsx
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const itineraries = {
//   Paris: [
//     { day: "Day 1", plan: "Arrival, Eiffel Tower visit, evening Seine River cruise." },
//     { day: "Day 2", plan: "Louvre Museum, Notre Dame, café hopping." },
//     { day: "Day 3", plan: "Day trip to Versailles Palace, shopping in Champs-Élysées." },
//   ],
//   Bali: [
//     { day: "Day 1", plan: "Arrival, Uluwatu Temple, Kecak Dance Show." },
//     { day: "Day 2", plan: "Water sports at Nusa Dua, relax at Jimbaran Beach." },
//     { day: "Day 3", plan: "Ubud Monkey Forest, Rice Terraces, local market." },
//     { day: "Day 4", plan: "Shopping in Seminyak, departure." },
//   ],
//   Tokyo: [
//     { day: "Day 1", plan: "Shibuya Crossing, Hachiko Statue, Shinjuku nightlife." },
//     { day: "Day 2", plan: "Asakusa Temple, Tokyo Skytree, Akihabara." },
//     { day: "Day 3", plan: "Day trip to Mt. Fuji + Lake Kawaguchi." },
//   ],
//   // Add more for other destinations...
// };

// const DestinationDetails = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { name, image, description, country, category } = state;

//   return (
//     <section className="py-16 bg-white min-h-screen">
//       <div className="max-w-5xl mx-auto px-6">
//         <img src={image} alt={name} className="w-full h-80 object-cover rounded-2xl shadow-md" />
        
//         <h1 className="text-4xl font-bold mt-6 text-gray-800">{name}</h1>
//         <p className="text-lg text-gray-600 mt-3">{description}</p>
//         <p className="mt-2 text-blue-600 font-semibold">{country} • {category}</p>

//         {/* Itinerary Section */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Itinerary</h2>
//           {itineraries[name] ? (
//             <ul className="space-y-3">
//               {itineraries[name].map((dayPlan, i) => (
//                 <li key={i} className="p-4 bg-gray-100 rounded-xl shadow-sm">
//                   <strong>{dayPlan.day}:</strong> {dayPlan.plan}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500">Itinerary coming soon...</p>
//           )}
//         </div>

//         <button
//           onClick={() => navigate("/book")}
//           className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
//         >
//           Book Now
//         </button>
//       </div>
//     </section>
//   );
// };

// export default DestinationDetails;














// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const itineraries = {
//   Paris: [
//     { day: "Day 1", plan: "Arrival, Eiffel Tower visit, evening Seine River cruise." },
//     { day: "Day 2", plan: "Louvre Museum, Notre Dame, café hopping." },
//     { day: "Day 3", plan: "Day trip to Versailles Palace, shopping in Champs-Élysées." }
//   ],
//   Bali: [
//     { day: "Day 1", plan: "Arrival, Uluwatu Temple, Kecak Dance Show." },
//     { day: "Day 2", plan: "Water sports at Nusa Dua, relax at Jimbaran Beach." },
//     { day: "Day 3", plan: "Ubud Monkey Forest, Rice Terraces, local market." },
//     { day: "Day 4", plan: "Shopping in Seminyak, departure." }
//   ],
//   Tokyo: [
//     { day: "Day 1", plan: "Shibuya Crossing, Hachiko Statue, Shinjuku nightlife." },
//     { day: "Day 2", plan: "Asakusa Temple, Tokyo Skytree, Akihabara." },
//     { day: "Day 3", plan: "Day trip to Mt. Fuji + Lake Kawaguchi." }
//   ]
// };

// const allDestinations = [
//   { name: "Goa", country: "India", category: "Beach" },
//   { name: "Manali", country: "India", category: "Mountain" },
//   { name: "Paris", country: "France", category: "City" },
//   { name: "New York", country: "USA", category: "City" },
//   { name: "Kerala", country: "India", category: "Nature" },
//   { name: "Dubai", country: "UAE", category: "City" }
// ];

// const DestinationDetails = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { name, image, description, country, category } = state;

//   // Search and filter state
//   const [searchText, setSearchText] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");

//   // Filtered destinations for "More Destinations" section
//   const filteredDestinations = allDestinations.filter(dest => {
//     return (
//       dest.name.toLowerCase().includes(searchText.toLowerCase()) &&
//       (selectedCategory === "" || dest.category === selectedCategory)
//     );
//   });

//   return (
//     <section className="py-16 bg-white min-h-screen">
//       <div className="max-w-5xl mx-auto px-6">

//         {/* --- Search & Dropdown --- */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
//           <input
//             type="text"
//             placeholder="Search destinations..."
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             className="px-4 py-2 border rounded-lg w-full md:w-1/2"
//           />
//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="px-4 py-2 border rounded-lg w-full md:w-1/3"
//           >
//             <option value="">All Categories</option>
//             <option value="Beach">Beach</option>
//             <option value="Mountain">Mountain</option>
//             <option value="City">City</option>
//             <option value="Nature">Nature</option>
//           </select>
//         </div>

//         {/* --- Current Destination Details --- */}
//         <img src={image} alt={name} className="w-full h-80 object-cover rounded-2xl shadow-md" />
//         <h1 className="text-4xl font-bold mt-6 text-gray-800">{name}</h1>
//         <p className="text-lg text-gray-600 mt-3">{description}</p>
//         <p className="mt-2 text-blue-600 font-semibold">{country} • {category}</p>

//         {/* --- Itinerary --- */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Itinerary</h2>
//           {itineraries[name] ? (
//             <ul className="space-y-3">
//               {itineraries[name].map((dayPlan, i) => (
//                 <li key={i} className="p-4 bg-gray-100 rounded-xl shadow-sm">
//                   <strong>{dayPlan.day}:</strong> {dayPlan.plan}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500">Itinerary coming soon...</p>
//           )}
//         </div>

//         {/* --- Book Now Button --- */}
//         <button
//           onClick={() => navigate("/book")}
//           className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
//         >
//           Book Now
//         </button>

//         {/* --- More Destinations based on search & filter --- */}
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold mb-4">More Destinations</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredDestinations.map((dest, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gray-50 shadow-md rounded-xl p-4 cursor-pointer hover:scale-105 transition-transform"
//                 onClick={() => navigate("/destination-details", { state: dest })}
//               >
//                 <h3 className="text-xl font-semibold">{dest.name}</h3>
//                 <p className="text-gray-600">{dest.country} • {dest.category}</p>
//               </div>
//             ))}
//             {filteredDestinations.length === 0 && (
//               <p className="text-gray-500">No destinations found.</p>
//             )}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default DestinationDetails;


























// // src/Pages/DestinationDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const itineraries = {
  Paris: [
    { day: "Day 1", plan: "Arrival, Eiffel Tower visit, evening Seine River cruise." },
    { day: "Day 2", plan: "Louvre Museum, Notre Dame, café hopping." },
    { day: "Day 3", plan: "Day trip to Versailles Palace, shopping in Champs-Élysées." },
  ],
  Bali: [
    { day: "Day 1", plan: "Arrival, Uluwatu Temple, Kecak Dance Show." },
    { day: "Day 2", plan: "Water sports at Nusa Dua, relax at Jimbaran Beach." },
    { day: "Day 3", plan: "Ubud Monkey Forest, Rice Terraces, local market." },
    { day: "Day 4", plan: "Shopping in Seminyak, departure." },
  ],
  Tokyo: [
    { day: "Day 1", plan: "Shibuya Crossing, Hachiko Statue, Shinjuku nightlife." },
    { day: "Day 2", plan: "Asakusa Temple, Tokyo Skytree, Akihabara." },
    { day: "Day 3", plan: "Day trip to Mt. Fuji + Lake Kawaguchi." },
  ],
  // Add more as needed
};

const DestinationDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { name, image, description, country, category } = state;

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <img src={image} alt={name} className="w-full h-80 object-cover rounded-2xl shadow-md" />
        
        <h1 className="text-4xl font-bold mt-6 text-gray-800">{name}</h1>
        <p className="text-lg text-gray-600 mt-3">{description}</p>
        <p className="mt-2 text-blue-600 font-semibold">{country} • {category}</p>

        {/* Itinerary */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Itinerary</h2>
          {itineraries[name] ? (
            <ul className="space-y-3">
              {itineraries[name].map((dayPlan, i) => (
                <li key={i} className="p-4 bg-gray-100 rounded-xl shadow-sm">
                  <strong>{dayPlan.day}:</strong> {dayPlan.plan}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Itinerary coming soon...</p>
          )}
        </div>

        {/* Book Now */}
        <button
          onClick={() => navigate("/book-now")}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default DestinationDetails;




































