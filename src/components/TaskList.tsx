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
import { useTaskContext } from "../context/TaskContext";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";

interface TaskListProps {
  isFormOpen: boolean;
  taskBgColor: string;
  handleIsFormOpen: () => void;
}

function TaskList({
  isFormOpen,
  taskBgColor,
  handleIsFormOpen,
}: TaskListProps) {
  const { state } = useTaskContext();

  return (
    <div className="mt-12 ">
      <ul className="flex flex-wrap items-center justify-center gap-16">
        {isFormOpen ? (
          <TaskInput
            bgColor={taskBgColor}
            handleIsFormOpen={handleIsFormOpen}
          />
        ) : (
          <></>
        )}
        {state.tasks.map((task) => (
          <li key={task.id}>
            <TaskItem taskData={task} bgColor={taskBgColor} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
