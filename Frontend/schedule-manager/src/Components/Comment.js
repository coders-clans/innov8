import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import CSS
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'; // Import axios to make API requests
import { IoIosAddCircle } from "react-icons/io";
const Testimonials = () => {
  const [comments, setComments] = useState([]); // State to store comments
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to track any errors

  // Fetch comments when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:7001/comment/show'); // Fetch data from the backend
        setComments(response.data); // Set comments in state
        setLoading(false); // Set loading to false after fetching
      } catch (err) {
        setError('Error fetching comments'); // Handle error
        setLoading(false); // Set loading to false after error
      }
    };

    fetchComments();
  }, []);

  const settings = {
    dots: true,  // Show navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 testimonials at a time
    slidesToScroll: 1, // Scroll one testimonial at a time
    autoplay: true, // Auto-slide testimonials
    autoplaySpeed: 3000, // Speed for autoplay (in ms)
    responsive: [
      {
        breakpoint: 1024, // For tablets and small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For phones
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching
  }

  if (error) {
    return <div>{error}</div>; // Display error message if there was an error fetching data
  }

  return (
    <section className="bg-[#080b16] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-1 flex justify-center items-center text-white">
          What Our Users Say
        </h2>

      
        <Slider {...settings}>
          {comments.map((comment, index) => (
            <div key={index} className="p-4">
              <div className="bg-customBlue p-6 rounded-lg shadow-md flex flex-col items-center text-center h-[300px] border
               border-white">
                <h3 className="text-xl font-semibold text-white">
                  {comment.name}
                </h3>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  "{comment.comment}"
                </p>
                <div className="flex mt-4">
                  {Array.from({ length: Math.floor(comment.rating) }, (_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                  {comment.rating % 1 !== 0 && (
                    <span className="text-yellow-500 text-lg">☆</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
