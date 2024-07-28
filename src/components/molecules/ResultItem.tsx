import {Result} from "../../types";
import {DetailsModal} from "../../views/DetailsModal.tsx";
import {useState} from "react";

type ResultItemProps = {
    result: Result;
};

export const ResultItem = ({result}: ResultItemProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            {
                isModalOpen && (
                    <DetailsModal
                        link={result._source.subject}
                        isModalOpen={isModalOpen}
                        onClose={handleModalClose}
                    />
                )
            }
            <div key={result._id} className="bg-gray-100 mb-3 rounded-[10px] p-5">
                <div className="flex items-center justify-between">
                    <h1 className="text-lg font-medium">{result._source.object}</h1>
                    <button onClick={handleModalOpen}
                            className="text-xs bg-white py-2 px-4 rounded-md text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">Consulter
                    </button>
                </div>
                <div className="flex mt-2 flex-col gap-2">
                    <div className="flex gap-2">
                        <span className="text-gray-500 font-xs">Prédicat: </span>
                        <a
                            href={result._source.predicate}
                            target="_blank"
                            className="text-blue-500 font-xs text-base underline"
                        >
                            {result._source.predicate}
                        </a>
                    </div>
                    <div>
                        <span className="text-gray-500 font-xs">Sujet: </span>
                        <a
                            href={result._source.subject}
                            target="_blank"
                            className="text-blue-500 font-xs text-base underline"
                        >
                            {result._source.subject}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
