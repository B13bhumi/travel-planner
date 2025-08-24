// // src/Pages/MyTrips.jsx
// import React, { useState, useEffect } from "react";

// const MyTrips = () => {
//   const [trips, setTrips] = useState([]);
//   const [newTrip, setNewTrip] = useState({
//     destination: "",
//     startDate: "",
//     endDate: "",
//     notes: "",
//   });

//   // Load trips from localStorage
//   useEffect(() => {
//     const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
//     setTrips(savedTrips);
//   }, []);

//   // Save trips whenever updated
//   useEffect(() => {
//     localStorage.setItem("trips", JSON.stringify(trips));
//   }, [trips]);

//   // Handle form input
//   const handleChange = (e) => {
//     setNewTrip({ ...newTrip, [e.target.name]: e.target.value });
//   };

//   // Add new trip
//   const addTrip = () => {
//     if (!newTrip.destination || !newTrip.startDate || !newTrip.endDate) return;
//     setTrips([
//       ...trips,
//       { ...newTrip, id: Date.now(), completed: false },
//     ]);
//     setNewTrip({ destination: "", startDate: "", endDate: "", notes: "" });
//   };

//   // Delete trip
//   const deleteTrip = (id) => {
//     setTrips(trips.filter((trip) => trip.id !== id));
//   };

//   // Mark trip as completed
//   const completeTrip = (id) => {
//     setTrips(
//       trips.map((trip) =>
//         trip.id === id ? { ...trip, completed: true } : trip
//       )
//     );
//   };

//   // Separate trips
//   const upcomingTrips = trips.filter((trip) => !trip.completed);
//   const pastTrips = trips.filter((trip) => trip.completed);

//   return (
//     <section className="py-16 bg-gray-50 min-h-screen">
//       <div className="max-w-4xl mx-auto px-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">My Trips</h1>

//         {/* Create New Trip */}
//         <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
//           <h2 className="text-xl font-semibold mb-4">Plan a New Trip</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="destination"
//               placeholder="Destination"
//               value={newTrip.destination}
//               onChange={handleChange}
//               className="p-3 border rounded-lg"
//             />
//             <input
//               type="date"
//               name="startDate"
//               value={newTrip.startDate}
//               onChange={handleChange}
//               className="p-3 border rounded-lg"
//             />
//             <input
//               type="date"
//               name="endDate"
//               value={newTrip.endDate}
//               onChange={handleChange}
//               className="p-3 border rounded-lg"
//             />
//             <textarea
//               name="notes"
//               placeholder="Notes / Activities"
//               value={newTrip.notes}
//               onChange={handleChange}
//               className="p-3 border rounded-lg col-span-2"
//             />
//           </div>
//           <button
//             onClick={addTrip}
//             className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Add Trip
//           </button>
//         </div>

//         {/* Upcoming Trips */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-bold mb-4">Upcoming Trips</h2>
//           {upcomingTrips.length === 0 ? (
//             <p className="text-gray-500">No upcoming trips planned.</p>
//           ) : (
//             <ul className="space-y-4">
//               {upcomingTrips.map((trip) => (
//                 <li
//                   key={trip.id}
//                   className="bg-white shadow-md rounded-2xl p-6 flex justify-between items-start"
//                 >
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {trip.destination}
//                     </h3>
//                     <p className="text-gray-600">
//                       {trip.startDate} → {trip.endDate}
//                     </p>
//                     <p className="mt-2 text-gray-500">{trip.notes}</p>
//                   </div>
//                   <div className="flex space-x-2">
//                     <button
//                       onClick={() => completeTrip(trip.id)}
//                       className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//                     >
//                       Mark Completed
//                     </button>
//                     <button
//                       onClick={() => deleteTrip(trip.id)}
//                       className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Past Trips */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Past Trips</h2>
//           {pastTrips.length === 0 ? (
//             <p className="text-gray-500">No past trips yet.</p>
//           ) : (
//             <ul className="space-y-4">
//               {pastTrips.map((trip) => (
//                 <li
//                   key={trip.id}
//                   className="bg-gray-100 shadow-md rounded-2xl p-6"
//                 >
//                   <h3 className="text-xl font-semibold text-gray-700">
//                     {trip.destination}
//                   </h3>
//                   <p className="text-gray-600">
//                     {trip.startDate} → {trip.endDate}
//                   </p>
//                   <p className="mt-2 text-gray-500">{trip.notes}</p>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MyTrips;









// // // src/pages/MyTrips.jsx
// // import React, { useEffect, useState } from "react";

// // const MyTrips = () => {
// //   const [trips, setTrips] = useState([]);

// //   useEffect(() => {
// //     const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
// //     setTrips(savedTrips);
// //   }, []);

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-3xl font-bold mb-6">My Trips</h2>
// //       {trips.length === 0 ? (
// //         <p className="text-gray-600">No trips planned yet. Go to the homepage and plan your trip!</p>
// //       ) : (
// //         <div className="grid md:grid-cols-2 gap-6">
// //           {trips.map((trip) => (
// //             <div
// //               key={trip.id}
// //               className="p-4 border rounded-xl shadow bg-white"
// //             >
// //               <h3 className="text-xl font-semibold">{trip.destination}</h3>
// //               <p>👥 {trip.people} People</p>
// //               <p>📅 {trip.date}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MyTrips;










// import React from "react";
// import { useLocation } from "react-router-dom";

// const MyTrips = () => {
//   const location = useLocation();
//   const trip = location.state;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">My Trips</h1>

//       {trip ? (
//         <div className="border rounded-lg shadow p-4">
//           <p><strong>Destination:</strong> {trip.destination}</p>
//           <p><strong>People:</strong> {trip.people}</p>
//           <p><strong>Date:</strong> {trip.date}</p>
//         </div>
//       ) : (
//         <p>No trips planned yet.</p>
//       )}
//     </div>
//   );
// };

// export default MyTrips;


















// src/Pages/MyTrips.jsx
// import React, { useContext, useState } from "react";
// import { TripContext } from "../context/TripContext";

// const MyTrips = () => {
//   const { trips, deleteTrip } = useContext(TripContext);
//   const [completedTrips, setCompletedTrips] = useState([]);

//   const markCompleted = (id) => {
//     setCompletedTrips((prev) => [...prev, id]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-center mb-6">My Trips</h1>

//       {trips.length === 0 ? (
//         <p className="text-center text-gray-500">No trips planned yet.</p>
//       ) : (
//         <div className="grid gap-6 max-w-3xl mx-auto">
//           {trips.map((trip) => (
//             <div
//               key={trip.id}
//               className="bg-white p-6 rounded-xl shadow-md flex justify-between items-center"
//             >
//               <div>
//                 <h2 className="text-xl font-semibold">{trip.destination}</h2>
//                 <p className="text-gray-600">
//                   {trip.people} People | {trip.date}
//                 </p>
//                 {completedTrips.includes(trip.id) && (
//                   <p className="text-green-600 font-semibold mt-1">
//                     ✅ Completed
//                   </p>
//                 )}
//               </div>

//               <div className="flex gap-3">
//                 {!completedTrips.includes(trip.id) && (
//                   <button
//                     onClick={() => markCompleted(trip.id)}
//                     className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
//                   >
//                     Mark Completed
//                   </button>
//                 )}
//                 <button
//                   onClick={() => deleteTrip(trip.id)}
//                   className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyTrips;
























// import React, { useContext } from "react";
// import { TripContext } from "../context/TripContext";

// const MyTrips = () => {
//   const { trips, toggleCompleted } = useContext(TripContext);

//   if (trips.length === 0) {
//     return <p className="text-center mt-6">No trips booked yet.</p>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6 text-center">My Trips</h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {trips.map((trip) => (
//           <div
//             key={trip.id} // ✅ use unique id
//             className={`p-4 rounded-lg shadow-md ${
//               trip.completed ? "bg-green-100" : "bg-white"
//             }`}
//           >
//             <h3 className="text-xl font-semibold">{trip.destination}</h3>
//             <p className="text-gray-600 text-sm mb-2">
//               Date: {trip.date} | People: {trip.people}
//             </p>

//             <button
//               onClick={() => toggleCompleted(trip.id)} // ✅ mark only one trip
//               className={`px-4 py-2 rounded-lg ${
//                 trip.completed
//                   ? "bg-gray-500 text-white"
//                   : "bg-blue-600 text-white hover:bg-blue-700"
//               }`}
//             >
//               {trip.completed ? "Completed" : "Mark as Completed"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyTrips;





















// import React, { useContext } from "react";
// import { TripContext } from "../context/TripContext";

// const MyTrips = () => {
//   const { trips, toggleCompleted, removeTrip } = useContext(TripContext);

//   if (trips.length === 0) {
//     return <p className="text-center mt-6">No trips booked yet.</p>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6 text-center">My Trips</h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {trips.map((trip) => (
//           <div
//             key={trip.id}
//             className={`p-4 rounded-lg shadow-md flex flex-col justify-between ${
//               trip.completed ? "bg-green-100" : "bg-white"
//             }`}
//           >
//             <div>
//               <h3 className="text-xl font-semibold">{trip.destination}</h3>
//               <p className="text-gray-600 text-sm mb-2">
//                 Date: {trip.date} | People: {trip.people}
//               </p>
//             </div>

//             <div className="flex gap-2 mt-4">
//               <button
//                 onClick={() => toggleCompleted(trip.id)}
//                 className={`flex-1 px-4 py-2 rounded-lg ${
//                   trip.completed
//                     ? "bg-gray-500 text-white"
//                     : "bg-blue-600 text-white hover:bg-blue-700"
//                 }`}
//               >
//                 {trip.completed ? "Completed" : "Mark as Completed"}
//               </button>

//               <button
//                 onClick={() => removeTrip(trip.id)}
//                 className="flex-1 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyTrips;























// import React, { useContext } from "react";
// import { TripContext } from "../context/TripContext";

// const MyTrips = () => {
//   const { trips, toggleCompleted, removeTrip } = useContext(TripContext);

//   if (trips.length === 0) {
//     return <p className="text-center mt-6 text-gray-600">No trips booked yet.</p>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6 text-center">My Trips</h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {trips.map((trip) => (
//           <div
//             key={trip.id}
//             className={`p-4 rounded-lg shadow-md flex flex-col justify-between ${
//               trip.completed ? "bg-green-100" : "bg-white"
//             }`}
//           >
//             <div>
//               <h3 className="text-xl font-semibold">{trip.destination}</h3>
//               <p className="text-gray-600 text-sm mb-2">
//                 Date: {trip.date} | People: {trip.people}
//               </p>
//             </div>

//             <div className="flex gap-2 mt-4">
//               {/* Mark as Completed */}
//               <button
//                 onClick={() => toggleCompleted(trip.id)}
//                 className={`flex-1 px-4 py-2 rounded-lg ${
//                   trip.completed
//                     ? "bg-gray-500 text-white"
//                     : "bg-blue-600 text-white hover:bg-blue-700"
//                 }`}
//               >
//                 {trip.completed ? "Completed" : "Mark as Completed"}
//               </button>

//               {/* Remove Trip */}
//               <button
//                 onClick={() => removeTrip(trip.id)}
//                 className="flex-1 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyTrips;





















import React, { useContext } from "react";
import { TripContext } from "../context/TripContext";

const MyTrips = () => {
  const { trips, toggleCompleted, removeTrip } = useContext(TripContext);

  if (trips.length === 0) return <p className="text-center mt-6">No trips booked yet.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">My Trips</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((trip) => (
          <div
            key={trip.id} // ✅ Must use unique id
            className={`p-4 rounded-lg shadow-md flex flex-col justify-between ${
              trip.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold">{trip.destination}</h3>
              <p className="text-gray-600 text-sm mb-2">
                Date: {trip.date} | People: {trip.people}
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => toggleCompleted(trip.id)} // ✅ Toggle by id only
                className={`flex-1 px-4 py-2 rounded-lg ${
                  trip.completed
                    ? "bg-gray-500 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {trip.completed ? "Completed" : "Mark as Completed"}
              </button>

              <button
                onClick={() => removeTrip(trip.id)} // ✅ Remove by id only
                className="flex-1 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTrips;
