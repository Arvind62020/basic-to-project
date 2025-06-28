import { useState } from 'react';

const TourOptions = () => {
  const [selectedTour, setSelectedTour] = useState(null);

  const tours = [
    {
      id: 1,
      title: "Mountain Adventure",
      description: "Experience breathtaking views on our 5-day mountain trek with expert guides.",
      duration: "5 days",
      difficulty: "Moderate",
      price: "$499",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Beach Paradise",
      description: "Relax on pristine beaches with our all-inclusive 7-day tropical getaway.",
      duration: "7 days",
      difficulty: "Easy",
      price: "$799",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
    },
    {
      id: 3,
      title: "Cultural Explorer",
      description: "Immerse yourself in local culture with guided tours of historical sites.",
      duration: "4 days",
      difficulty: "Easy",
      price: "$399",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Wild Safari",
      description: "Get up close with wildlife on this thrilling 3-day safari adventure.",
      duration: "3 days",
      difficulty: "Moderate",
      price: "$599",
      image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    }
  ];

  const handleTourSelect = (tourId) => {
    setSelectedTour(tourId === selectedTour ? null : tourId);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tour Packages</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover amazing destinations with our carefully curated tour options
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tours.map((tour) => (
          <div 
            key={tour.id}
            className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
              selectedTour === tour.id ? 'ring-2 ring-brandGreen' : ''
            }`}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tour.title}</h3>
              <p className="text-gray-600 mb-4">{tour.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-500">{tour.duration}</span>
                <span className="text-sm font-medium text-gray-500">{tour.difficulty}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-brandGreen">{tour.price}</span>
                <button
                  onClick={() => handleTourSelect(tour.id)}
                  className="px-4 py-2 bg-brandGreen text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  {selectedTour === tour.id ? 'Selected' : 'Book Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedTour && (
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            You've selected: {tours.find(t => t.id === selectedTour).title}
          </h3>
          <p className="text-gray-600 mb-6">
            {tours.find(t => t.id === selectedTour).description}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-700"><span className="font-semibold">Duration:</span> {tours.find(t => t.id === selectedTour).duration}</p>
              <p className="text-gray-700"><span className="font-semibold">Difficulty:</span> {tours.find(t => t.id === selectedTour).difficulty}</p>
              <p className="text-gray-700"><span className="font-semibold">Price:</span> {tours.find(t => t.id === selectedTour).price}</p>
            </div>
            <button className="px-6 py-3 bg-brandGreen text-white rounded-md hover:bg-green-600 transition-colors text-lg font-medium">
              Proceed to Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourOptions;