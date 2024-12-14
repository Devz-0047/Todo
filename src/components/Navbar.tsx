import { ReactElement, useState } from "react";
import todo from "../assets/todo.png";
import { FiSearch } from "react-icons/fi";
interface NavProps {
  filter: string;
  handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
function Navbar({ filter, handleFilterChange }: NavProps): ReactElement {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(query);
  };

  return (
    <div className="flex items-center justify-between h-[5rem] w-screen bg-zinc-200">
      <img
        src={todo}
        alt="ToDo"
        className="w-20 h-8 md:h-[4rem] md:w-[10rem] md:pl-6 sm:h-[3rem] sm:w-[8rem] sm:pl-4 "
      />
      <div className="flex items-center gap-4">
        <form
          onSubmit={handleSubmitForm}
          className="flex items-center justify-evenly group bg-zinc-50 focus-within:shadow-md"
        >
          <FiSearch className="pl-2 text-4xl rounded-l-sm " />
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
            className="flex-grow w-[8rem] pr-3 py-2 sm:w-[16rem] md:w-[20rem] text-lg rounded-sm outline-none md:py-2 md:pl-3 md:pr-8 md:text-xl bg-zinc-50 "
          />
        </form>
        <form className="sm:pl-1 md:mr-8 sm:pr-1 bg-[#31291D] sm:py-2 md:text-lg text-base text-slate-50 flex items-center justify-between md:gap-2 py-2  px-1 md:pl-1 lg:px-3">
          <div>
            <label className="pr-1 text-base font-semibold md:text-lg md:text-md md-font-normal">
              Sort By{" "}
            </label>
          </div>
          <div>
            <select
              className="sm:px-1  py-[0.12rem] bg-[#c1bfbb] text-mg text-center font-semibold text-slate-950 px-0"
              value={filter}
              onChange={handleFilterChange}
            >
              <option>Priority</option>
              <option>Time</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Navbar;
