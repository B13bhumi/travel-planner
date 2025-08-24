// src/components/DestinationCard.jsx
import { Link } from "react-router-dom";

export default function DestinationCard({ destination, index }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-3 w-64">
      <img src={destination.img} alt={destination.name} className="h-40 w-full object-cover" />
      <h2 className="text-xl font-semibold mt-2">{destination.name}</h2>
      <p className="text-gray-600 text-sm">{destination.description.substring(0, 60)}...</p>
      <Link to={`/destination/${index}`}>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
}
