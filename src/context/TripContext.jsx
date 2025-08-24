// //add or remove trip
// // Save Trips in LocalStorage
// // (so trips don’t disappear after refresh)

// // // src/context/TripContext.jsx
// import React, { createContext, useState } from "react";

// // Create context
// export const TripContext = createContext();

// // Provider
// export const TripProvider = ({ children }) => {
//   const [trips, setTrips] = useState([]);

//   // Add a new trip
//   const addTrip = (trip) => {
//     setTrips((prev) => [
//       ...prev,
//       { id: Date.now(), ...trip }, // unique id for each trip
//     ]);
//   };

//   // Delete a trip
//   const deleteTrip = (id) => {
//     setTrips((prev) => prev.filter((trip) => trip.id !== id));
//   };

//   return (
//     <TripContext.Provider value={{ trips, addTrip, deleteTrip }}>
//       {children}
//     </TripContext.Provider>
//   );
// };







// src/context/TripContext.jsx
// import React, { createContext, useState, useEffect } from "react";

// export const TripContext = createContext();

// export const TripProvider = ({ children }) => {
//   const [trips, setTrips] = useState([]);

//   // ✅ Load trips from localStorage on first render
//   useEffect(() => {
//     const storedTrips = localStorage.getItem("trips");
//     if (storedTrips) {
//       setTrips(JSON.parse(storedTrips));
//     }
//   }, []);

//   // ✅ Save trips to localStorage whenever trips change
//   useEffect(() => {
//     localStorage.setItem("trips", JSON.stringify(trips));
//   }, [trips]);

//   const addTrip = (trip) => {
//     setTrips((prev) => [...prev, { ...trip, id: Date.now(), status: "Planned" }]);
//   };

//   const removeTrip = (id) => {
//     setTrips((prev) => prev.filter((trip) => trip.id !== id));
//   };

//   const completeTrip = (id) => {
//     setTrips((prev) =>
//       prev.map((trip) =>
//         trip.id === id ? { ...trip, status: "Completed" } : trip
//       )
//     );
//   };

//   return (
//     <TripContext.Provider value={{ trips, addTrip, removeTrip, completeTrip }}>
//       {children}
//     </TripContext.Provider>
//   );
// };












































// import React, { createContext, useState, useEffect } from "react";

// export const TripContext = createContext();

// export const TripProvider = ({ children }) => {
//   const [trips, setTrips] = useState(() => {
//     const savedTrips = localStorage.getItem("trips");
//     return savedTrips ? JSON.parse(savedTrips) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("trips", JSON.stringify(trips));
//   }, [trips]);

//   const addTrip = (trip) => {
//     const newTrip = { id: Date.now(), completed: false, ...trip };
//     setTrips([...trips, newTrip]);
//   };

//   const toggleCompleted = (id) => {
//     setTrips(
//       trips.map((trip) =>
//         trip.id === id ? { ...trip, completed: !trip.completed } : trip
//       )
//     );
//   };

//   // ✅ Remove trip by id
//   const removeTrip = (id) => {
//     setTrips(trips.filter((trip) => trip.id !== id));
//   };

//   return (
//     <TripContext.Provider value={{ trips, addTrip, toggleCompleted, removeTrip }}>
//       {children}
//     </TripContext.Provider>
//   );
// };





















// import React, { createContext, useState, useEffect } from "react";

// export const TripContext = createContext();

// export const TripProvider = ({ children }) => {
//   const [trips, setTrips] = useState(() => {
//     // Load trips from localStorage if available
//     const savedTrips = localStorage.getItem("trips");
//     return savedTrips ? JSON.parse(savedTrips) : [];
//   });

//   useEffect(() => {
//     // Persist trips in localStorage
//     localStorage.setItem("trips", JSON.stringify(trips));
//   }, [trips]);

//   // Add new trip with unique id
//   const addTrip = (trip) => {
//     const newTrip = { id: Date.now(), completed: false, ...trip };
//     setTrips([...trips, newTrip]);
//   };

//   // Toggle completed status by unique id
//   const toggleCompleted = (id) => {
//     setTrips(
//       trips.map((trip) =>
//         trip.id === id ? { ...trip, completed: !trip.completed } : trip
//       )
//     );
//   };

//   // Remove trip by unique id
//   const removeTrip = (id) => {
//     setTrips(trips.filter((trip) => trip.id !== id));
//   };

//   return (
//     <TripContext.Provider value={{ trips, addTrip, toggleCompleted, removeTrip }}>
//       {children}
//     </TripContext.Provider>
//   );
// };

































import React, { createContext, useState, useEffect } from "react";

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem("trips");
    return savedTrips ? JSON.parse(savedTrips) : [];
  });

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  // ✅ Add trip with unique ID
  const addTrip = (trip) => {
    const newTrip = { id: Date.now() + Math.random(), completed: false, ...trip };
    setTrips([...trips, newTrip]);
  };

  // ✅ Toggle completed using ONLY id
  const toggleCompleted = (id) => {
    setTrips(
      trips.map((trip) =>
        trip.id === id ? { ...trip, completed: !trip.completed } : trip
      )
    );
  };

  // ✅ Remove trip using ONLY id
  const removeTrip = (id) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  return (
    <TripContext.Provider value={{ trips, addTrip, toggleCompleted, removeTrip }}>
      {children}
    </TripContext.Provider>
  );
};
