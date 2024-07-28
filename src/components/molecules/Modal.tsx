import React, {useEffect, useRef, useState} from "react";

type Props = {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children?: React.ReactNode
};

const Modal = ({children, isOpen, onClose, hasCloseBtn}: Props) => {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    return (
        <dialog
            ref={modalRef}
            className="fixed inset-0 flex w-[700px] rounded-lg shadow-lg items-center justify-center bg-white"
        >
            <div className="bg-white w-full p-6 max-w-lg overflow-auto">
                {hasCloseBtn && (
                    <button
                        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                        onClick={handleCloseModal}
                    >
                        &#x2715;
                    </button>
                )}

                <div
                    className="whitespace-pre-wrap text-sm font-mono bg-gray-100 p-4 rounded-md border border-gray-300">
                    {children}
                </div>
            </div>
        </dialog>
    );
}

export default Modal;
