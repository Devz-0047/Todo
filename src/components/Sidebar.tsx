import { BsPlusCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
function Sidebar() {
  return (
    <div className="flex flex-col items-center gap-6 justify-start w-[6rem] h-screen bg-zinc-200 pt-10">
      <BsPlusCircleFill className="text-4xl" />
      <FaCircle className="text-3xl text-[#F5972C]" />
      <FaCircle className="text-3xl text-[#F3542A]" />
      <FaCircle className="text-3xl text-[#7049F0]" />
      <FaCircle className="text-3xl text-[#0AA4F6]" />
      <FaCircle className="text-3xl text-[#C6D947]" />
    </div>
  );
}

export default Sidebar;
