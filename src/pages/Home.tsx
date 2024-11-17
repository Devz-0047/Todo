import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-shrink-0">
        <Navbar />
      </div>

      <div className="flex flex-grow">
        <Sidebar />

        <div className="flex-grow pl-4">
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default Home;
