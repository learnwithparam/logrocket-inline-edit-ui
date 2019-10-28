import React, { useRef, useState } from "react";
import Editable from "./Editable";

import "./App.css";

function App() {
  const inputRef = useRef();
  const textareaRef = useRef();
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800">
      <form className=" bg-white rounded px-8 py-8 pt-8">
        <div className="px-4 pb-4">
          <h1 className="uppercase font-bold text-xl">Asana inline edit UI</h1>
        </div>
        <div className="px-4 pb-4">
          <Editable
            text={task}
            placeholder="Write a task name"
            childRef={inputRef}
          >
            <input
              ref={inputRef}
              type="text"
              name="task"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              placeholder="Write a task name"
              value={task}
              onChange={e => setTask(e.target.value)}
            />
          </Editable>
        </div>
        <div className="px-4 pb-4">
          <Editable
            text={description}
            placeholder="Description for the task"
            childRef={textareaRef}
          >
            <textarea
              ref={textareaRef}
              name="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              placeholder="Description for the task"
              rows="5"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Editable>
        </div>
      </form>
    </div>
  );
}

export default App;
