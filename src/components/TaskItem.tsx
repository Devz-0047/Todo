import { Task } from "../types/task";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useTaskContext } from "../context/TaskContext";
interface TaskItemProps {
  taskData: Task;
}
function TaskItem({ taskData }: TaskItemProps) {
  const { dispatch } = useTaskContext();
  function renderPriority(): JSX.Element {
    if (taskData.priority == "Low") {
      return (
        <div className="absolute top-0 right-0 px-1 text-xs bg-green-500 ">
          {taskData.priority}
        </div>
      );
    } else if (taskData.priority == "Medium") {
      return (
        <div className="absolute top-0 right-0 px-1 text-xs bg-yellow-500 ">
          {taskData.priority}
        </div>
      );
    } else {
      return (
        <div className="absolute top-0 right-0 px-1 text-xs bg-red-500 ">
          {taskData.priority}
        </div>
      );
    }
  }
  return (
    <div
      className="min-w-[16rem] max-w-[16rem] min-h-[17rem] rounded-md relative"
      style={{ backgroundColor: taskData.bgColor }}
    >
      {renderPriority()}
      <div className="pt-2 text-xl font-semibold text-center">
        {taskData.title}
      </div>
      <div className="pl-2 text-md text-wrap">{taskData.description}</div>
      <div className="absolute bottom-2 left-2">{taskData.date}</div>

      <div className="absolute bottom-2 right-2">
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_TASK", payload: taskData.id })
          }
        >
          <MdDelete className="text-2xl" />
        </button>
      </div>
      <div className="absolute bottom-2 right-8">
        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_TASK_COMPLETION", payload: taskData.id })
          }
        >
          <IoCheckmarkDoneCircle
            className={
              taskData.completed ? "text-2xl text-green-600" : "text-2xl"
            }
          />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
/* For Desgining purpose*/
//   const taskExample: Task = {
//     id: crypto.randomUUID(),
//     title: "Learn react with ts",
//     description:
//       "Learn react and get a job, react is javascript library to build user interface, its has features to make web application, interative and super fast",
//     completed: false,
//     date: "Nov 17, 2024",
//     priority: "Low",
//   };
