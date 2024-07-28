import { Spinner } from "../components/atoms/Spinner";
import {  useEffect, useState } from "react";
import { API_URL } from "../config";
import Modal from "../components/molecules/Modal.tsx";

type Props= {
    link: string;
    isModalOpen: boolean;
    onClose: () => void;
}

export const DetailsModal = ({link, isModalOpen, onClose}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState<string | undefined>(
    undefined,
  );
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDetails(link);
  }, []);

  const fetchDetails = async (link: string) => {
    setError("");
    setIsLoading(true);
    try {
      if (!link) {
        return;
      }
      const response = await fetch(
        `${API_URL}/query?subject=${link}`,
      );
      if (!response.ok) {
        setError("No result");
        throw new Error("No result");
      }
      const data = await response.text();
      setDetails(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <Modal
          hasCloseBtn={true}
          isOpen={isModalOpen}
          onClose={onClose}
      >
        <div className="w-full">
          {isLoading && !details ? (
              <Spinner className="flex justify-center items-center" />
          ) : error ? (
              <div className="text-center">No result found</div>
          ) : (
              <div>
                {details}
              </div>
          )}
        </div>
      </Modal>
  );
};
