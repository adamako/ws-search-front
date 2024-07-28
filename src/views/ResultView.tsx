import {ResultList, SearchInput} from "../components/molecules";
import {Spinner} from "../components/atoms/Spinner";
import {FormEvent, useRef, useState} from "react";
import {Result} from "../types";
import {API_URL} from "../config";

export const ResultView = () => {
    const inputRef = useRef<HTMLInputElement | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<Result[] | undefined>(
        undefined,
    );
    const [error, setError] = useState("");

    const handleSearch = async (keyword: string) => {
        setError("");
        setIsLoading(true);
        try {
            if (!keyword) {
                return;
            }
            const response = await fetch(
                `${API_URL}/search?q=${keyword}`,
            );
            if (!response.ok) {
                setError("No result");
                throw new Error("No result");
            }
            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSearch(inputRef?.current?.value!);
    };

    return (
        <div className="w-full bg-white mt-10 p-5 rounded-[10px] h-full">
            <h1 className="text-xl text-center mb-5">Rechercher un pays</h1>
            <SearchInput inputRef={inputRef} handelSubmit={handleSubmit}/>
            <div className="mt-5">
                {isLoading ? (
                    <Spinner className="flex justify-center items-center"/>
                ) : error ? (
                    <div className="text-center">No result found</div>
                ) : (
                    inputRef.current?.value && (
                        <ResultList
                            results={results}
                        />
                    )
                )}
            </div>
        </div>
    );
};
