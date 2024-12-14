import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  handleIsFormOpen: () => void;
  handleBgColorChange: (color: string) => void;
}

function Sidebar({ handleIsFormOpen, handleBgColorChange }: SidebarProps) {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleAddOpen = () => {
    setIsAddOpen((prevState) => !prevState);
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000); // Reset after 1 second
  };

  const colorOptions = ["#F5972C", "#F3542A", "#7049F0", "#0AA4F6", "#C6D947"];

  return (
    <div className="flex flex-col items-center gap-6 justify-start w-[6rem] h-screen bg-zinc-200 pt-10 px-2">
      <motion.button
        onClick={() => {
          handleAddOpen();
          if (!isClicked) handleClick();
        }}
        animate={isClicked ? { rotate: [0, 360], scale: 1.2 } : {}}
        transition={{ duration: 0.6, ease: "easeIn" }}
        onAnimationComplete={() => setIsClicked(false)}
      >
        <BsPlusCircleFill className="text-4xl" />
      </motion.button>

      <AnimatePresence>
        {isAddOpen && (
          <motion.div
            className="flex flex-col items-center gap-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {colorOptions.map((color, index) => (
              <motion.button
                key={color}
                onClick={() => {
                  handleBgColorChange(color);
                  handleIsFormOpen();
                }}
                className="p-2"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2, // Staggered animation
                  ease: "easeOut",
                }}
              >
                <FaCircle className="text-3xl" style={{ color }} />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;
