import { SearchIcon } from "../atoms";
import { FormEvent, LegacyRef, RefObject } from "react";

type SearchBarProps = {
  inputRef: RefObject<HTMLInputElement | undefined>;
  handelSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const SearchInput = ({ inputRef, handelSubmit }: SearchBarProps) => {
  return (
    <div className="mt-2 w-full px-2 flex flex-col justify-center items-center">
      <div className="relative w-full">
        <form onSubmit={(e) => handelSubmit(e)}>
          <input
            ref={inputRef as LegacyRef<HTMLInputElement>}
            className="font-normal rounded-[10px] text-sm border-none py-3 px-5  bg-[#F3F3F3] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full"
            placeholder="pays, ex. burkina"
          />

          <div className="absolute inset-y-0 right-5 flex items-center">
            <SearchIcon />
          </div>
        </form>
      </div>
    </div>
  );
};
