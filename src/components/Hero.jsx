
// // new chatgpt code
// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"; // ✅ Import navigation

// const Hero = () => {
//   const navigate = useNavigate(); // ✅ Initialize navigate

//   return (
//     <section
//       className="relative h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/hero.jpg')" }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
//         >
//           Plan Your Perfect Journey
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="mt-4 text-lg md:text-2xl text-gray-200"
//         >
//           Discover amazing destinations and book your dream trip today.
//         </motion.p>

//         {/* Search Box */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="mt-8 bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl"
//         >
//           <input
//             type="text"
//             placeholder="Enter Destination"
//             className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
//           />
//           <input
//             type="number"
//             placeholder="No. of People"
//             className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"

//           />
//           <input
//             type="date"
//             min={new Date().toISOString().split("T")[0]}
//             className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
//           />
//           <button
//             onClick={() => navigate("/my-trips")}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition font-semibold text-base whitespace-nowrap flex items-center justify-center"
//             style={{ minHeight: "44px" }}
//           >
//             Plan My Trip
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;










// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate();

//   // ✅ use state for inputs
//   const [destination, setDestination] = useState("");
//   const [people, setPeople] = useState("");
//   const [date, setDate] = useState("");

//   const handlePlanTrip = () => {
//     navigate("/mytrips", {
//       state: { destination, people, date },
//     });
//   };

//   return (
//     <section
//       className="relative h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/hero.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>

//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
//         >
//           Plan Your Perfect Journey
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="mt-4 text-lg md:text-2xl text-gray-200"
//         >
//           Discover amazing destinations and book your dream trip today.
//         </motion.p>

//         {/* Inputs */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="mt-8 bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl"
//         >
//           <input
//             type="text"
//             placeholder="Enter Destination"
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//             className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
//           />
//           <input
//             type="number"
//             placeholder="No. of People"
//             value={people}
//             onChange={(e) => setPeople(e.target.value)}
//             className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
//           />
//           <input
//             type="date"
//             min={new Date().toISOString().split("T")[0]}
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
//           />
//           <button
//             type="button"
//             onClick={handlePlanTrip}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition font-semibold text-base"
//           >
//             Plan My Trip
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;









// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { TripContext } from "../context/TripContext";

// const Hero = () => {
//   const navigate = useNavigate();
//   const { addTrip } = useContext(TripContext); // ✅ get addTrip from context

//   const [destination, setDestination] = useState("");
//   const [people, setPeople] = useState("");
//   const [date, setDate] = useState("");

//   const handlePlanTrip = () => {
//     if (!destination || !people || !date) {
//       alert("Please fill all fields!");
//       return;
//     }

//     // ✅ Create trip
//     addTrip({
//       id: Date.now(),
//       destination,
//       people,
//       date,
//     });

//     // ✅ Redirect to MyTrips
//     navigate("/mytrips");
//   };

//   return (
//     <section
//       className="relative h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/hero.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black/50"></div>

//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
//         >
//           Plan Your Perfect Journey
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="mt-8 bg-white rounded-2xl shadow-xl p-4 flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl"
//         >
//           <input
//             type="text"
//             placeholder="Enter Destination"
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//             className="flex-1 border rounded-xl px-4 py-2"
//           />
//           <input
//             type="number"
//             placeholder="No. of People"
//             value={people}
//             onChange={(e) => setPeople(e.target.value)}
//             className="flex-1 border rounded-xl px-4 py-2"
//           />
//           <input
//             type="date"
//             min={new Date().toISOString().split("T")[0]}
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="flex-1 border rounded-xl px-4 py-2"
//           />
//           <button
//             type="button"
//             onClick={handlePlanTrip}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md"
//           >
//             Plan My Trip
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;






// src/components/Hero.jsx
import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TripContext } from "../context/TripContext";

const Hero = () => {
  const navigate = useNavigate();
  const { addTrip } = useContext(TripContext);

  const [destination, setDestination] = useState("");
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");

  const handlePlanTrip = () => {
    if (!destination || !people || !date) {
      alert("Please fill all fields!");
      return;
    }
    addTrip({ destination, people, date });
    navigate("/mytrips");
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          Plan Your Perfect Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-2xl text-gray-200"
        >
          Discover amazing destinations and book your dream trip today.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl"
        >
          {/* Destination Dropdown */}
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
          >
            <option value="">Select Destination</option>
            <option value="Goa">Goa</option>
            <option value="Manali">Manali</option>
            <option value="Paris">Paris</option>
            <option value="New York">New York</option>
            <option value="Dubai">Dubai</option>
          </select>

          {/* People */}
          <input
            type="number"
            placeholder="No. of People"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
          />

          {/* Date */}
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none"
          />

          {/* Plan Trip Button */}
          <button
            onClick={handlePlanTrip}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition font-semibold text-base"
            style={{ minHeight: "44px" }}
          >
            Plan My Trip
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
