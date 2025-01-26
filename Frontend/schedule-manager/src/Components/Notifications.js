// import React, { useState, useEffect } from 'react';

// // Utility function to get a random delay between 2 to 3 hours (in milliseconds)
// const getRandomDelay = () => {
//   const min = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
//   const max = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
//   return Math.random() * (max - min) + min;
// };

// // Predefined notifications list (you can change or add more)
// const notificationsList = [
//   "Reminder: Complete your daily task!",
//   "Tip: Take regular breaks while working.",
//   "Stay focused! Remember why you started",
//   "Reminder: Review your journey in graphs",
//   "Alert: Time is running out! Finish your task soon."
// ];

// // Notification component
// const Notification = ({ message }) => {
//   return (
//     <div className="bg-blue-500 text-white p-3 rounded mb-2 shadow-lg">
//       {message}
//     </div>
//   );
// };

// // Notification system
// const NotificationSystem = () => {
//   const [visibleNotifications, setVisibleNotifications] = useState([]); // State to track visible notifications

//   useEffect(() => {
//     const showRandomNotification = () => {
//       // Select a random notification from the list
//       const randomIndex = Math.floor(Math.random() * notificationsList.length);
//       const randomNotification = notificationsList[randomIndex];

//       // Add the new notification to the state (limit max notifications to 5)
//       setVisibleNotifications((prev) => {
//         const newNotifications = [...prev, { id: Date.now(), message: randomNotification }];
//         return newNotifications.length > 5 ? newNotifications.slice(1) : newNotifications;
//       });

//       // Schedule the next notification after a random delay (2-3 hours)
//       const randomDelay = getRandomDelay();
//       setTimeout(showRandomNotification, randomDelay);
//     };

//     // Trigger the first notification immediately (without waiting 2-3 hours)
//     showRandomNotification();

//     // Clean up the timeout on unmount
//     return () => {
//       clearTimeout(showRandomNotification);
//     };
//   }, []);

//   return (
//     <div className="fixed top-4 pt-12   z-50 space-y-2">
//       {visibleNotifications.map((notification) => (
//         <Notification key={notification.id} message={notification.message} />
//       ))}
//     </div>
//   );
// };



// export default NotificationSystem;