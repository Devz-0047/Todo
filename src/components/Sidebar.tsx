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
// import { useState } from "react";
// import { BsPlusCircleFill } from "react-icons/bs";
// import { FaCircle } from "react-icons/fa";
// import { motion } from "motion/react";

// interface SidebarProps {
//   handleIsFormOpen: () => void;
//   handleBgColorChange: (color: string) => void;
// }

// function Sidebar({ handleIsFormOpen, handleBgColorChange }: SidebarProps) {
//   const [isAddOpen, setIsAddOpen] = useState<boolean>(false);

//   const handleAddOpen = () => {
//     setIsAddOpen((prevState) => !prevState);
//   };

//   const colorOptions = ["#F5972C", "#F3542A", "#7049F0", "#0AA4F6", "#C6D947"];
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(true);
//     setTimeout(() => setIsClicked(false), 1000); // Reset after 1 second
//   };

//   return (
//     <div className="flex flex-col items-center gap-6 justify-start w-[6rem] h-screen bg-zinc-200 pt-10">
//       <motion.button
//         onClick={() => {
//           handleAddOpen();
//           handleClick();
//         }}
//         animate={isClicked ? { rotate: 360, scale: 1.1 } : {}}
//         transition={{ duration: 0.6, ease: "easeIn" }}
//       >
//         <BsPlusCircleFill className="text-4xl" />
//       </motion.button>

//       {!isAddOpen ? (
//         <></>
//       ) : (
//         <>
//           {colorOptions.map((color) => (
//             <button
//               key={color}
//               onClick={() => {
//                 handleBgColorChange(color);
//                 handleIsFormOpen();
//               }}
//               className="p-2"
//             >
//               <FaCircle className="text-3xl" style={{ color }} />
//             </button>
//           ))}
//         </>
//       )}
//     </div>
//   );
// }

// export default Sidebar;
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { BsPlusCircleFill } from "react-icons/bs";
// import { FaCircle } from "react-icons/fa";

// const colorsMap = ["#FF6347", "#FFD700", "#32CD32", "#1E90FF", "#8A2BE2"];

// const DropletEffect = () => {
//   const [isClicked, setIsClicked] = useState(false);
//   const [isAddOpen, setIsAddOpen] = useState(false);

//   const handleAddOpen = () => setIsAddOpen(!isAddOpen);
//   const handleClick = () => setIsClicked(!isClicked);
//   const handleBgColorChange = (color) =>
//     console.log("Changed background to", color);
//   const handleIsFormOpen = () => console.log("Form opened");

//   return (
//     <div className="flex flex-col items-center gap-6 justify-start w-[6rem] h-screen bg-zinc-200 pt-10">
//       {/* Main Button (BsPlusCircleFill) */}
//       <motion.button
//         onClick={() => {
//           handleAddOpen();
//           handleClick();
//         }}
//         animate={isClicked ? { rotate: 360, scale: 1.1 } : {}}
//         transition={{ duration: 0.6, ease: "easeIn" }}
//       >
//         <BsPlusCircleFill className="text-4xl" />
//       </motion.button>

//       {/* Droplet Buttons */}
//       {isAddOpen && (
//         <motion.div
//           className="flex flex-col items-center gap-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           {colorsMap.map((color, index) => (
//             <motion.button
//               key={color}
//               onClick={() => {
//                 handleBgColorChange(color);
//                 handleIsFormOpen();
//               }}
//               className="p-2"
//               initial={{ y: -50, opacity: 0 }} // Start above the screen
//               animate={{ y: 0, opacity: 1 }} // Move to its final position
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.2, // Stagger the animations
//                 ease: "easeOut",
//               }}
//             >
//               <FaCircle className="text-3xl" style={{ color }} />
//             </motion.button>
//           ))}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default DropletEffect;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

const colorsMap = ["#FF6347", "#FFD700", "#32CD32", "#1E90FF", "#8A2BE2"];

const DropletEffect = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const handleAddOpen = () => setIsAddOpen(!isAddOpen);
  const handleClick = () => setIsClicked(!isClicked);
  const handleBgColorChange = (color) =>
    console.log("Changed background to", color);
  const handleIsFormOpen = () => console.log("Form opened");

  return (
    <div className="flex flex-col items-center gap-6 justify-start w-[6rem] h-screen bg-zinc-200 pt-10">
      {/* Main Button (BsPlusCircleFill) */}
      <motion.button
        onClick={() => {
          handleAddOpen();
          handleClick();
        }}
        animate={isClicked ? { rotate: 360, scale: 1.1 } : {}}
        transition={{ duration: 0.6, ease: "easeIn" }}
      >
        <BsPlusCircleFill className="text-4xl" />
      </motion.button>

      {/* Droplet Buttons */}
      {isAddOpen && (
        <AnimatePresence>
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Make the buttons fade out when isAddOpen is false
            transition={{ duration: 0.6 }}
          >
            {colorsMap.map((color, index) => (
              <motion.button
                key={color}
                onClick={() => {
                  handleBgColorChange(color);
                  handleIsFormOpen();
                }}
                className="p-2"
                initial={{ y: -50, opacity: 0 }} // Start above the screen
                animate={{ y: 0, opacity: 1 }} // Move to its final position
                exit={{ y: 50, opacity: 0 }} // Move out of view and fade out when isAddOpen is false
                transition={{
                  duration: 0.6,
                  delay: index * 0.2, // Stagger the animations on entrance
                  ease: "easeOut",
                }}
              >
                <FaCircle className="text-3xl" style={{ color }} />
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default DropletEffect;
