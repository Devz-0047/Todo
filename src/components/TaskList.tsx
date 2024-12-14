// import { useTaskContext } from "../context/TaskContext";
// import TaskInput from "./TaskInput";
// import TaskItem from "./TaskItem";

// function TaskList({ isFormOpen }: boolean) {
//   const { state, dispatch } = useTaskContext();
//   return (
//     <div className="mt-2">
//       {isFormOpen ? <TaskInput /> : <></>}
//       <ul>
//         {state.tasks.map((task) => (
//           <li key={task.id}>
//             <TaskItem taskData={task} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TaskList;
// import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import { Task } from "../types/task";

interface TaskListProps {
  isFormOpen: boolean;
  taskBgColor: string;
  filter: string;
  handleIsFormOpen: () => void;
}

function TaskList({
  isFormOpen,
  taskBgColor,
  filter,
  handleIsFormOpen,
}: TaskListProps) {
  const { state } = useTaskContext();

  const sortedTasks = [...state.tasks].sort((a, b) => {
    if (filter === "Priority") {
      const priorityOrder: Record<Task["priority"], number> = {
        High: 1,
        Medium: 2,
        Low: 3,
      };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    if (filter === "Time") {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    }
    return 0;
  });
  return (
    <div className="mt-12 ">
      <ul className="flex flex-wrap items-center justify-center gap-16">
        <TaskInput
          bgColor={taskBgColor}
          handleIsFormOpen={handleIsFormOpen}
          isFormOpen={isFormOpen}
        />

        {sortedTasks.map((task) => (
          <li key={task.id}>
            <TaskItem taskData={task} bgColor={taskBgColor} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
