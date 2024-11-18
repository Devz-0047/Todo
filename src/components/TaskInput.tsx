import { useState, useRef } from "react";
import { useTaskContext } from "../context/TaskContext";
import { Task } from "../types/task";
import { format } from "date-fns";

interface TaskInputProps {
  bgColor: string;
  handleIsFormOpen: () => void;
}

function TaskInput({ bgColor, handleIsFormOpen }: TaskInputProps) {
  const { state, dispatch } = useTaskContext();
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");
  const [newTaskPriority, setNewTaskPriority] = useState<string>("Low");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: newTaskTitle,
      description: newTaskDescription,
      completed: false,
      priority: newTaskPriority,
      date: format(new Date(), "MMM dd yyyy"), //format(date, "MMM dd yyyy");
      bgColor,
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
    setNewTaskTitle("");
    setNewTaskDescription("");
    handleIsFormOpen();
  };
  const resizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to content height
    }
  };
  return (
    <div
      className={`min-w-[16rem] max-w-[16rem] min-h-[17rem] rounded-md relative `}
      style={{ backgroundColor: bgColor }}
    >
      <button
        onClick={() => {
          handleIsFormOpen();
        }}
        className="absolute top-1 right-1"
      >
        &#x274c;
      </button>
      <form
        onSubmit={handleAddTask}
        className="flex flex-col items-center justify-center gap-4 pt-8"
      >
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add Task Title"
          className="px-1 py-1 text-lg font-semibold rounded-md outline-none"
        />
        <textarea
          ref={textareaRef}
          value={newTaskDescription}
          onChange={(e) => {
            setNewTaskDescription(e.target.value);
            resizeTextarea();
          }}
          placeholder="Add Task Description"
          className="pr-8  pl-2 py-[0.12rem] rounded-md outline-none resize-none "
          style={{ overflow: "hidden" }}
        />
        <div className="flex items-center justify-center gap-4 pt-4">
          <button
            type="submit"
            className="px-2 py-1 font-semibold bg-green-500 rounded-md"
          >
            Add Task
          </button>
          <select
            className="px-2 py-1 rounded-md"
            onChange={(e) => setNewTaskPriority(e.target.value)}
            value={newTaskPriority}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default TaskInput;
// import { useState, useRef } from "react";
// import { useTaskContext } from "../context/TaskContext";
// import { Task } from "../types/task";
// import { format } from "date-fns";

// interface TaskInputProps {
//   bgColor: string;
// }

// function TaskInput({ bgColor }: TaskInputProps) {
//   const { state, dispatch } = useTaskContext();
//   const [newTaskTitle, setNewTaskTitle] = useState<string>("");
//   const [newTaskDescription, setNewTaskDescription] = useState<string>("");
//   const textareaRef = useRef<HTMLTextAreaElement | null>(null);

//   const resizeTextarea = () => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto"; // Reset height
//       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to content height
//     }
//   };

//   const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const newTask: Task = {
//       id: crypto.randomUUID(),
//       title: newTaskTitle,
//       description: newTaskDescription,
//       completed: false,
//       priority: "Medium",
//       date: format(new Date(), "MMM dd yyyy"), //format(date, "MMM dd yyyy");
//       bgColor,
//     };
//     dispatch({ type: "ADD_TASK", payload: newTask });
//     setNewTaskTitle("");
//     setNewTaskDescription("");
//   };

//   return (
//     <div
//       className={`min-w-[16rem] max-w-[16rem] min-h-[17rem] rounded-md relative `}
//       style={{ backgroundColor: bgColor }}
//     >
//       <form
//         onSubmit={handleAddTask}
//         className="flex flex-col items-center justify-center gap-2 pt-2"
//       >
//         <input
//           type="text"
//           value={newTaskTitle}
//           onChange={(e) => setNewTaskTitle(e.target.value)}
//           placeholder="Add Task Title"
//           className="px-1 py-1 text-lg font-semibold rounded-md outline-none"
//         />
//         <textarea
//           ref={textareaRef}
//           value={newTaskDescription}
//           onChange={(e) => {
//             setNewTaskDescription(e.target.value);
//             resizeTextarea();
//           }}
//           placeholder="Add Task Description"
//           className="px-2 py-[0.12rem] rounded-md outline-none resize-none" // Prevent manual resizing with "resize-none"
//           style={{ overflow: "hidden" }} // Prevent scrollbars
//         />
//         <button
//           type="submit"
//           className="px-2 py-1 font-semibold bg-green-500 rounded-md"
//         >
//           Add Task
//         </button>
//       </form>
//     </div>
//   );
// }

// export default TaskInput;
