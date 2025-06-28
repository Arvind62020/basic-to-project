import { useState } from 'react';

const TourPlaneMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  const tourCategories = [
    {
      title: "Adventure Tours",
      items: [
        "Mountain Trekking",
        "White Water Rafting",
        "Desert Safari",
        "Jungle Expedition"
      ],
      icon: "🌄"
    },
    {
      title: "Cultural Experiences",
      items: [
        "Heritage Walks",
        "Local Cuisine Tours",
        "Traditional Arts",
        "Historical Sites"
      ],
      icon: "🏛️"
    },
    {
      title: "Beach Getaways",
      items: [
        "Island Hopping",
        "Snorkeling Packages",
        "Luxury Resorts",
        "Sunset Cruises"
      ],
      icon: "🏖️"
    },
    {
      title: "Special Interests",
      items: [
        "Photography Tours",
        "Wildlife Safaris",
        "Yoga Retreats",
        "Wine Tasting"
      ],
      icon: "🎯"
    }
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="hover:text-primary flex items-center group">
        Tour Plan <span className="ml-1 transition-transform duration-300 group-hover:rotate-180">▾</span>
      </button>

      <div className={`
        absolute right-0 mt-2 w-[85vw] max-w-[700px] bg-white shadow-xl rounded-lg z-50 p-4 border border-gray-100
        transition-all duration-300 ease-in-out
        ${isHovered ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}
      `}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {tourCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{category.icon}</span>
                <h3 className="font-bold text-gray-900 group-hover:text-brandGreen transition-colors text-sm md:text-base">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-1">
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="text-gray-600 hover:text-brandGreen cursor-pointer transition-colors text-xs md:text-sm py-1 px-2 -mx-2 rounded hover:bg-gray-50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <div>
              <h4 className="font-medium text-gray-900 text-sm md:text-base">Special Offers</h4>
              <p className="text-xs md:text-sm text-gray-500">Limited time deals on selected tours</p>
            </div>
            <button className="px-3 py-1.5 bg-brandGreen text-white rounded-md hover:bg-green-600 transition-colors text-xs md:text-sm">
              View All Tours →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPlaneMenu;