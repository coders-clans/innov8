import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import CSS
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    name: "Anjali Sharma",
    role: "Student, IIT Delhi",
    feedback:
      "This schedule manager helped me stay on track with my studies and complete tasks without procrastination. Streaks and reminders are super motivating!",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    role: "Software Engineer, Infosys",
    feedback:
      "The dashboard and goal tracking features are game-changers! I love how it breaks down big goals into small tasks. The leaderboard keeps me competitive.",
    image: "https://i.pravatar.cc/150?img=8",
    rating: 4.5,
  },
  {
    name: "Priya Mehta",
    role: "Freelance Designer",
    feedback:
      "This platform has changed my productivity levels completely. Setting goals and tracking daily progress made my workflow much more efficient.",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 4,
  },
  {
    name: "Arjun Verma",
    role: "Marketing Manager, Zomato",
    feedback:
      "The notifications feature keeps me accountable, and the progress tracker has made it easier to align my daily tasks with long-term business goals.",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 4.5,
  },
  {
    name: "Vikram Singh",
    role: "Fitness Coach, Jaipur",
    feedback:
      "Being disciplined is key to fitness, and this app helps me manage my time effectively. I track my client sessions and personal tasks effortlessly.",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 4,
  },
  {
    name: "Nidhi Kapoor",
    role: "Entrepreneur, Startup Founder",
    feedback:
      "I love the simplicity and effectiveness of this tool. Managing tasks daily has become much easier, and streaks keep me going. I highly recommend it!",
    image: "https://i.pravatar.cc/150?img=21",
    rating: 5,
  },
  
];

const Testimonials = () => {
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

  return (
    <section className="bg-[#080b16] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8">
          What Our Users Say
        </h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-customBlue p-6 rounded-lg shadow-md flex flex-col items-center text-center h-[400px]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-teal-600">{testimonial.role}</p>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                <div className="flex mt-4">
                  {Array.from({ length: Math.floor(testimonial.rating) }, (_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
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
