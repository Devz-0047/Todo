import { ReactElement, useState } from "react";
import todo from "../assets/todo.png";
import { FiSearch } from "react-icons/fi";
function Navbar(): ReactElement {
  const [query, setQuery] = useState<string>("");
  const [filter, setFilter] = useState<string>("Time");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(query);
  };
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className="flex items-center justify-between h-[5rem] w-screen bg-zinc-200">
      <img src={todo} alt="ToDo" className="h-12 pl-6 w-22" />
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
            className="flex-grow py-2 pl-3 pr-8 text-xl rounded-sm outline-none bg-zinc-50 "
          />
        </form>
        <form className="pl-4 mr-8 pr-4 bg-[#31291D] py-2 text-slate-50 flex items-center justify-between gap-2">
          <div>
            <label className="text-lg font-semibold">Sort By </label>
          </div>
          <div>
            <select
              className="px-2 py-[0.12rem] bg-[#c1bfbb] text-mg font-semibold text-slate-950"
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
