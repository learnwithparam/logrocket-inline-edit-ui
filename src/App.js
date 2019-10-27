import React from "react";
import "./App.css";

function App() {
  return (
    <div className="w-full max-w-md mx-auto bg-gray-800">
      <form className=" bg-white rounded px-8 py-8 pt-8">
        <div className="px-4 pb-4">
          <h1 className="uppercase font-bold text-xl">Asana inline edit UI</h1>
        </div>
        <div className="px-4 pb-4">
          <input
            type="text"
            name="task"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
            placeholder="Write a task name"
          />
        </div>
        <div className="px-4 pb-4">
          <textarea
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Description"
            rows="5"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
