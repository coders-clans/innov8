import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import axios from 'axios';

const Ask = () => {
  const [inpQuestion, setInpQuestion] = useState(""); // Store user input
  const [ans, setAns] = useState(""); // Store plain text answer

  // Input change handler to store the question
  const onChangeHandler = (e) => {
    setInpQuestion(e.target.value); // Update state with input value
  };

  // Submit handler for asking the question
  const OnAsk = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const prompt = `You are a smart and friendly chatbot. Answer the following question clearly and provide the answer as plain text only donot use * or any other symbols: "${inpQuestion}".`;

    // API call
    axios
      .post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB4FBqXTGcaP_5R2EtWZkLmuF6HdChk43A",
        { contents: [{ parts: [{ text: prompt }] }] }
      )
      .then((response) => {
        console.log(response);
        const plainText = response.data.candidates[0].content.parts[0].text;
        setAns(plainText); // Store the plain text answer
        setInpQuestion(''); // Clear input field
      })
      .catch((error) => {
        console.log("There is some issue with the Bot, please try again later", error);
      });
  };

  return (
    <div className='bg-white p-10 m-6 shadow-lg rounded-lg w-1/4'>
      <div>
        <form onSubmit={OnAsk} className='flex items-center space-x-4'>
          <input
            type='text'
            value={inpQuestion}
            placeholder='Enter Your Question Here'
            onChange={onChangeHandler}
            className='border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300'
          />
          <button
            type='submit'
            className='p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600'
          >
            <IoMdSend size={24} />
          </button>
        </form>
      </div>

      <div className='mt-6'>
        {ans && (
          <div className='p-4 bg-gray-100 rounded shadow-md'>
            <p className='whitespace-pre-wrap'>{ans}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ask;