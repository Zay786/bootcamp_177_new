import React, { useState, useEffect, useCallback } from 'react';
// The import for './App.css' is removed as we are making the file self-contained.

// Data structure for the carousel items
const carouselData = [
  {
    city: "Hong Kong",
    url: "https://i.ibb.co/30bK76m/jrfyzvgzvhs1iylduuhj.jpg",
    alt: "Hong Kong skyline with traditional boat"
  },
  {
    city: "Macao",
    url: "https://i.ibb.co/6P0yV6t/c1cklkyp6ms02tougufx.webp",
    alt: "Ruins of St. Paul's in Macao"
  },
  {
    city: "Japan",
    url: "https://i.ibb.co/F6P4hFk/e8fnw35p6zgusq218foj.webp",
    alt: "A scenic lighthouse in Japan"
  },
  {
    city: "Las Vegas",
    url: "https://i.ibb.co/7jG9F8M/liw377az16sxmp9a6ylg.webp",
    alt: "The Las Vegas strip at sunset"
  }
];

// Main component, must be named App and exported by default
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = carouselData.length;

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Autoplay functionality using useEffect
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // 5000ms interval
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden">
        
        <header className="p-4 bg-indigo-600 text-white text-center rounded-t-xl">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Global Destinations Carousel
          </h1>
          <p className="text-indigo-200 mt-1">
            Pure React Implementation (Responsive)
          </p>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            
            {/* Main Image Container */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                // Ensure the flex container itself takes up enough space to hold all slides side-by-side
                width: `${totalSlides * 100}%` 
              }}
            >
              {carouselData.map((item, index) => (
                <div 
                  key={index} 
                  // Each slide takes 1/Nth of the total width
                  className="flex-shrink-0 relative h-80 sm:h-[450px] md:h-[550px]"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src="https://placehold.co/800x600/CCCCCC/333333?text=Image+Not+Found";
                    }}
                  />
                  {/* Legend/City Name Display */}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-xl font-semibold text-center">
                    {item.city}
                  </div>
                  {/* Status Indicator (e.g., 1 of 4) */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {currentIndex + 1} of {totalSlides}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-70 p-3 rounded-full text-white transition duration-300 z-10"
              aria-label="Previous Slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-70 p-3 rounded-full text-white transition duration-300 z-10"
              aria-label="Next Slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators (Dots) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-white scale-110 shadow-lg' : 'bg-gray-400 bg-opacity-70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Thumbnail Section */}
          <div className="mt-6 flex justify-center space-x-2 sm:space-x-4">
            {carouselData.map((item, index) => (
              <div 
                key={`thumb-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-12 sm:w-20 sm:h-16 cursor-pointer border-2 transition-all duration-300 rounded-md overflow-hidden ${
                  index === currentIndex ? 'border-indigo-600 shadow-md transform scale-105' : 'border-gray-300 opacity-70'
                }`}
              >
                <img
                  src={item.url}
                  alt={item.city + " thumbnail"}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;