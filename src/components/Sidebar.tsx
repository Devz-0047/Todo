// import { useState } from "react";
// import { BsPlusCircleFill } from "react-icons/bs";
// import { FaCircle } from "react-icons/fa";
// function Sidebar({ handleIsFormOpen }: () => void) {
//   const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
//   const handleAddOpen: () => void = () => {
//     setIsAddOpen(!isAddOpen);
//     console.log(isAddOpen);
//   };
//   return (
//     <div className="flex flex-col items-center gap-6 justify-start w-[6rem] h-screen bg-zinc-200 pt-10">
//       <button>
//         <BsPlusCircleFill className="text-4xl" onClick={handleAddOpen} />
//       </button>

//       {isAddOpen ? (
//         <></>
//       ) : (
//         <>
//           <button onClick={handleIsFormOpen}>
//             <FaCircle className="text-3xl text-[#F5972C]" />
//           </button>
//           <button>
//             <FaCircle className="text-3xl text-[#F3542A]" />
//           </button>
//           <button>
//             <FaCircle className="text-3xl text-[#7049F0]" />
//           </button>
//           <button>
//             <FaCircle className="text-3xl text-[#0AA4F6]" />
//           </button>
//           <button>
//             <FaCircle className="text-3xl text-[#C6D947]" />
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default Sidebar;
import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

interface SidebarProps {
  handleIsFormOpen: () => void;
  handleBgColorChange: (color: string) => void;
}

function Sidebar({ handleIsFormOpen, handleBgColorChange }: SidebarProps) {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);

  const handleAddOpen = () => {
    setIsAddOpen((prevState) => !prevState);
  };

  const colorOptions = ["#F5972C", "#F3542A", "#7049F0", "#0AA4F6", "#C6D947"];

  return (
    <div className="flex flex-col items-center gap-6 justify-start w-[6rem] h-screen bg-zinc-200 pt-10">
      <button onClick={handleAddOpen}>
        <BsPlusCircleFill className="text-4xl" />
      </button>

      {isAddOpen ? (
        <></>
      ) : (
        <>
          {colorOptions.map((color) => (
            <button
              key={color}
              onClick={() => {
                handleBgColorChange(color);
                handleIsFormOpen((previous) => !previous);
              }}
              className="p-2"
            >
              <FaCircle className="text-3xl" style={{ color }} />
            </button>
          ))}
        </>
      )}
    </div>
  );
}

export default Sidebar;
