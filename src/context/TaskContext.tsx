import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react";
import { Task } from "../types/task";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";

interface TaskState {
  tasks: Task[];
}
const LOCAL_STORAGE_KEY = "tasks";
type TaskAction =
  | { type: "ADD_TASK"; payload: Task }
  | { type: "REMOVE_TASK"; payload: string }
  | { type: "TOGGLE_TASK_COMPLETION"; payload: string }
  | {
      type: "SET_PRIORITY";
      payload: { id: string; priority: Task["priority"] };
    };

const initialState: TaskState = {
  tasks: loadFromLocalStorage<Task[]>(LOCAL_STORAGE_KEY) || [],
};

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case "ADD_TASK":
      return { tasks: [action.payload, ...state.tasks] };

    case "REMOVE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "TOGGLE_TASK_COMPLETION":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case "SET_PRIORITY":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, priority: action.payload.priority }
            : task
        ),
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TaskContext = createContext<{
  state: TaskState;
  dispatch: React.Dispatch<TaskAction>;
} | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  useEffect(() => {
    saveToLocalStorage(LOCAL_STORAGE_KEY, state.tasks);
  }, [state.tasks]);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
