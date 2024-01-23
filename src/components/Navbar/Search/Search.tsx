import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="relative text-slate-300">
      <input
        className="rounded-full h-12 w-72 px-10 pl-16 bg-slate-700 placeholder-slate-300"
        placeholder="Search here"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-4">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
