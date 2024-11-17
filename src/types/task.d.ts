export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  date: string;
  priority: "Low" | "Medium" | "High";
}
