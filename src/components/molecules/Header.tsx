import { GithubIcon } from "../atoms";

export const Header = () => {
  return (
    <nav className="border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <a href="#" className="flex items-center">
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-300 rounded-full">
            <span className="font-bold text-gray-600">WS</span>
          </div>
          <span className="self-center ml-4 text-xl font-medium whitespace-nowrap">
            Search Engine
          </span>
        </a>

        <a target="_blank" href="https://github.com/adamako/ws-search-front">
          <GithubIcon />
        </a>
      </div>
    </nav>
  );
};
