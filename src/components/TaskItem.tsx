import { Task } from "../types/task";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
function TaskItem() {
  const exampleTask: Task = {
    id: crypto.randomUUID(),
    title: "Learn react with ts",
    description:
      "Learn react and get a job, react is javascript library to build user interface, its has features to make web application, interative and super fast",
    completed: false,
    date: "Nov 17, 2024",
    priority: "Low",
  };
  return (
    <div className="min-w-[16rem] max-w-[16rem] min-h-[17rem] bg-[#F5972C] rounded-md relative">
      <div className="pt-2 text-xl font-semibold text-center">
        {exampleTask.title}
      </div>
      <div className="pl-2 text-md text-wrap">{exampleTask.description}</div>
      <div className="absolute bottom-2 left-2">{exampleTask.date}</div>
      <div className="absolute bottom-2 right-2">
        <BiSolidMessageSquareEdit className="text-2xl" />
      </div>
      <div className="absolute top-0 right-0 px-1 text-sm bg-green-500 ">
        {exampleTask.priority}
      </div>
    </div>
  );
}

export default TaskItem;
