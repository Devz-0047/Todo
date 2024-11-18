import { TaskProvider } from "./context/TaskContext";
import Home from "./pages/Home";

function App(): React.ReactElement {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}

export default App;
