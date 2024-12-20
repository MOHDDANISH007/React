import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const todosKey = "react_todos";

const Todo = () => {
  const [inputValue, setInputValue] = useState(''); // Input value state

  const [task, setTask] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(todosKey);
      if (savedTasks) {
        console.log("Loaded tasks from localStorage:", savedTasks); // Debug log
        return JSON.parse(savedTasks) || []; // Parse tasks or return empty array
      }
      return []; // Return an empty array if no tasks in localStorage
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error); // Log if error occurs
      return []; // Return an empty array in case of error
    }
  });

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever the tasks list changes
    try {
      console.log("Saving tasks to localStorage:", task); // Debug log
      localStorage.setItem(todosKey, JSON.stringify(task));
    } catch (error) {
      console.error("Error saving tasks to localStorage:", error); // Log any error during saving
    }
  }, [task]);

  const handleInput = (value) => {
    setInputValue(value); // Update input value
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      return; // Prevent empty input submission
    }

    setTask((prevTask) => [...prevTask, { text: inputValue, completed: false }]); // Append the current input to the tasks list
    setInputValue(''); // Clear the input field
  };

  const handleDelete = (index) => {
    setTask((prevTask) => prevTask.filter((_, keyIndex) => keyIndex !== index)); // Remove task by index
  };

  const handleComplete = (index) => {
    setTask((prevTask) =>
      prevTask.map((task, keyIndex) =>
        keyIndex === index ? { ...task, completed: !task.completed } : task
      )
    ); // Toggle task completion status
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white rounded-lg m-8 shadow-lg p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Todo List</h1>
          <div className="mt-4 ">
            <h2 className="text-lg font-medium text-gray-600">
              {dateTime.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </h2>
            <h3 className="text-2xl font-semibold text-indigo-600 mt-2">
              {dateTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
            </h3>
          </div>
        </header>

        <section id="form" className="space-y-6">
          <form onSubmit={handleSubmit}>
            {/* Input */}
            <div>
              <input
                type="text"
                value={inputValue} // Bind the input field to state
                className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-200"
                placeholder="Enter a new task"
                autoComplete="off"
                onChange={(e) => handleInput(e.target.value)} // Handle input change
              />
            </div>

            {/* Add button */}
            <div className="text-center mt-4">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none transition duration-200"
              >
                Add Todo
              </button>
            </div>
          </form>
        </section>

        {/* Display Tasks */}
        {task.length > 0 ? (
          task.map((t, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-3 rounded-md text-gray-800 shadow-sm mt-2 ${
                t.completed ? 'bg-green-100 line-through' : 'bg-gray-100'
              }`} // Conditional styling for completed tasks
            >
              <span className="flex-1">{t.text}</span>
              <div className="flex space-x-2">
                {/* Check button */}
                <button
                  className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                  aria-label="Mark as complete"
                  onClick={() => handleComplete(index)} // Toggle completion
                >
                  <FaCheck />
                </button>

                {/* Delete button */}
                <button
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-200"
                  aria-label="Delete task"
                  onClick={() => handleDelete(index)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 mt-4">No tasks available.</p>
        )}
      </div>
    </section>
  );
};

export default Todo;
