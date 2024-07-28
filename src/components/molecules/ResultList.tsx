import { Result } from "../../types";
import { ResultItem } from "./ResultItem.tsx";

type ResultListProps = {
  results: Result[] | undefined;
};

export const ResultList = ({
  results,
}: ResultListProps) => {
  if (!results?.length) {
    return <div className="text-center">No result found</div>;
  }

  return (
    <>
      {results.map((result) => (
        <ResultItem key={result._id} result={result} />
      ))}
    </>
  );
};
