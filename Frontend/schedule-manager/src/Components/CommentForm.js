import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const CommentForm = ({setActivesection}) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = localStorage.getItem('name');
    console.log(userEmail);
    if (!userEmail || !comment || typeof rating !== 'number') {
      setError('Please fill out all fields correctly.');
      return;
    }

    try {
      // Sending POST request to backend API
      const response = await axios.post('http://localhost:7001/comment/add', {
        userEmail : userEmail,
        comment,
        rating,
      });

      setMessage(response.data.message);
      setError('');
      setComment('');
      setRating(1);
      toast.success('Review Added Succesfully!')
      setActivesection('')

    } catch (err) {
      toast.warning('You can add review only once!')
      setMessage('');
    }
  };

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
  <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Submit Your Reviews</h2>

    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
    {message && <p className="text-green-500 text-sm mb-4">{message}</p>}

    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-700 font-semibold mb-2">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">Rating:</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit Comment
      </button>
    </form>
  </div>
</div>

  );
};

export default CommentForm;