// // src/Pages/Destinations.jsx
// // Wrap each card with onClick → navigate to /destination/:id.
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const allDestinations = [
//   { id: 1, name: "Paris", country: "France", category: "City", image: "/images/paris.jpg", description: "The city of love, Eiffel Tower, cafes, and art museums." },
//   { id: 2, name: "Bali", country: "Indonesia", category: "Beach", image: "/images/bali.jpg", description: "Tropical paradise with beaches, temples, and nightlife." },
//   { id: 3, name: "New York", country: "USA", category: "City", image: "/images/newyork.jpg", description: "The city that never sleeps, skyscrapers, and Times Square." },
//   { id: 4, name: "Tokyo", country: "Japan", category: "City", image: "/images/tokyo.jpg", description: "Blend of tradition and tech with Shibuya crossing and temples." },
//   { id: 5, name: "Goa", country: "India", category: "Beach", image: "/images/goa.jpg", description: "Beaches, parties, and vibrant nightlife in India’s paradise." },
//   { id: 6, name: "Dubai", country: "UAE", category: "Luxury", image: "/images/dubai.jpg", description: "Luxury shopping, Burj Khalifa, and desert safaris." },
//   { id: 7, name: "Maldives", country: "Maldives", category: "Beach", image: "/images/maldives.jpg", description: "Crystal clear waters, resorts, and snorkeling heaven." },
//   { id: 8, name: "London", country: "UK", category: "City", image: "/images/london.jpg", description: "Big Ben, London Eye, and a mix of history & modern vibes." },
// ];

// const Destinations = () => {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");
//   const navigate = useNavigate();

//   const filtered = allDestinations.filter(
//     (d) =>
//       (filter === "All" || d.category === filter) &&
//       d.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <section className="py-16 bg-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl font-bold text-center text-gray-800"
//         >
//           Explore All Destinations
//         </motion.h2>

//         {/* Search + Filter */}
//         <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
//           <input
//             type="text"
//             placeholder="Search destinations..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border px-4 py-2 rounded-xl shadow-sm w-full md:w-1/3"
//           />
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="border px-4 py-2 rounded-xl shadow-sm w-full md:w-1/4"
//           >
//             <option value="All">All</option>
//             <option value="City">City</option>
//             <option value="Beach">Beach</option>
//             <option value="Luxury">Luxury</option>
//           </select>
//         </div>

//         {/* Destination Grid */}
//         <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((dest, i) => (
//             <motion.div
//               key={dest.id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1, duration: 0.6 }}
//               onClick={() => navigate(`/destination/${dest.id}`, { state: dest })}
//               className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition"
//             >
//               <img src={dest.image} alt={dest.name} className="w-full h-56 object-cover" />
//               <div className="p-5">
//                 <h3 className="text-xl font-semibold text-gray-800">{dest.name}</h3>
//                 <p className="text-gray-600">{dest.country}</p>
//                 <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
//                   {dest.category}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Destinations;




// src/Pages/Destinations.jsx
// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { TripContext } from "../context/TripContext";

// const allDestinations = [
//   {
//     name: "Goa",
//     image: "/images/goa.jpg",
//     description: "Beautiful beaches and vibrant nightlife."
//   },
//   {
//     name: "Manali",
//     image: "/images/manali.jpg",
//     description: "Snow-capped mountains and adventure sports."
//   },
//   {
//     name: "Paris",
//     image: "/images/paris.jpg",
//     description: "The city of love and lights."
//   },
//   {
//     name: "New York",
//     image: "/images/newyork.jpg",
//     description: "The city that never sleeps."
//   },
//   {
//     name: "Kerala",
//     image: "/images/kerala.jpg",
//     description: "Backwaters and lush greenery."
//   },
//   {
//     name: "Dubai",
//     image: "/images/dubai.jpg",
//     description: "Luxury shopping and modern architecture."
//   }
// ];

// const Destinations = () => {
//   const navigate = useNavigate();
//   const { addTrip } = useContext(TripContext);

//   const handleBookNow = (destination) => {
//     const today = new Date().toISOString().split("T")[0];
//     addTrip({
//       destination,
//       people: 1,
//       date: today,
//     });
//     navigate("/mytrips");
//   };

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           All Destinations
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {allDestinations.map((place, idx) => (
//             <div
//               key={idx}
//               className="bg-white shadow-md rounded-xl overflow-hidden"
//             >
//               <img
//                 src={place.image}
//                 alt={place.name}
//                 className="h-48 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{place.name}</h3>
//                 <p className="text-gray-600 text-sm mb-3">
//                   {place.description}
//                 </p>
//                 <button
//                   onClick={() => handleBookNow(place.name)}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Destinations;


























// src/Pages/Destination.jsx
// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { TripContext } from "../context/TripContext";

// const allDestinations = [
//   { name: "Goa", image: "/images/goa.jpg", description: "Beautiful beaches and vibrant nightlife.", country: "India", category: "Beach" },
//   { name: "Manali", image: "/images/manali.jpg", description: "Snow-capped mountains and adventure sports.", country: "India", category: "Mountain" },
//   { name: "Paris", image: "/images/paris.jpg", description: "The city of love and lights.", country: "France", category: "City" },
//   { name: "New York", image: "/images/newyork.jpg", description: "The city that never sleeps.", country: "USA", category: "City" },
//   { name: "Kerala", image: "/images/kerala.jpg", description: "Backwaters and lush greenery.", country: "India", category: "Nature" },
//   { name: "Dubai", image: "/images/dubai.jpg", description: "Luxury shopping and modern architecture.", country: "UAE", category: "City" }
// ];

// const Destination = () => {
//   const navigate = useNavigate();
//   const { addTrip } = useContext(TripContext);

//   const handleBookNow = (destination) => {
//     const today = new Date().toISOString().split("T")[0];
//     addTrip({ destination, people: 1, date: today });
//     navigate("/mytrips");
//   };

//   const goToDetails = (place) => {
//     navigate("/destination-details", { state: place });
//   };






//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">All Destinations</h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {allDestinations.map((place, idx) => (
//             <div
//               key={idx}
//               className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
//               onClick={() => goToDetails(place)}
//             >
//               <img src={place.image} alt={place.name} className="h-48 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{place.name}</h3>
//                 <p className="text-gray-600 text-sm mb-3">{place.description}</p>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation(); // Prevent navigating when clicking button
//                     handleBookNow(place.name);
//                   }}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Destination;













































// // src/Pages/Destinations.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TripContext } from "../context/TripContext";

const allDestinations = [
  { name: "Goa", image: "/images/goa.jpg", description: "Beautiful beaches and vibrant nightlife.", country: "India", category: "Beach" },
  { name: "Manali", image: "/images/manali.jpg", description: "Snow-capped mountains and adventure sports.", country: "India", category: "Mountain" },
  { name: "Paris", image: "/images/paris.jpg", description: "The city of love and lights.", country: "France", category: "City" },
  { name: "New York", image: "/images/newyork.jpg", description: "The city that never sleeps.", country: "USA", category: "City" },
  { name: "Kerala", image: "/images/kerala.jpg", description: "Backwaters and lush greenery.", country: "India", category: "Nature" },
  { name: "Dubai", image: "/images/dubai.jpg", description: "Luxury shopping and modern architecture.", country: "UAE", category: "City" }
];

const Destinations = () => {
  const navigate = useNavigate();
  const { addTrip } = useContext(TripContext);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredDestinations = allDestinations.filter(dest => {
    return (
      dest.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedCategory === "" || dest.category === selectedCategory)
    );
  });

  const handleBookNow = (destination) => {
    const today = new Date().toISOString().split("T")[0];
    addTrip({ destination, people: 1, date: today });
    navigate("/mytrips");
  };

  const goToDetails = (place) => {
    navigate("/destination-details", { state: place });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">All Destinations</h2>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full md:w-1/2"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full md:w-1/3"
          >
            <option value="">All Categories</option>
            <option value="Beach">Beach</option>
            <option value="Mountain">Mountain</option>
            <option value="City">City</option>
            <option value="Nature">Nature</option>
          </select>
        </div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((place, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              onClick={() => goToDetails(place)}
            >
              <img src={place.image} alt={place.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{place.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{place.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookNow(place.name);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
          {filteredDestinations.length === 0 && <p className="text-gray-500">No destinations found.</p>}
        </div>
      </div>
    </section>
  );
};

export default Destinations;














































































