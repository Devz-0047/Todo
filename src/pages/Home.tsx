// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import TaskList from "../components/TaskList";

// function Home() {
//   const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
//   const handleIsFormOpen = () => {
//     setIsFormOpen(!isFormOpen);
//   };
//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-shrink-0">
//         <Navbar />
//       </div>

//       <div className="flex flex-grow">
//         <Sidebar handleIsFormOpen={handleIsFormOpen} />

//         <div className="flex-grow pl-4">
//           <TaskList isFormOpen={isFormOpen} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";

function Home() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [taskBgColor, setTaskBgColor] = useState<string>("");
  const [filter, setFilter] = useState<string>("Time");
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleIsFormOpen = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleBgColorChange = (color: string) => {
    setTaskBgColor(color);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-shrink-0">
        <Navbar filter={filter} handleFilterChange={handleFilterChange} />
      </div>

      <div className="flex flex-grow">
        <Sidebar
          handleIsFormOpen={handleIsFormOpen}
          handleBgColorChange={handleBgColorChange}
        />

        <div className="flex-grow pl-4 bg-gray-100">
          <TaskList
            isFormOpen={isFormOpen}
            taskBgColor={taskBgColor}
            handleIsFormOpen={handleIsFormOpen}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
