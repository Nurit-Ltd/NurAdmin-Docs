import { useState } from "react";
import { BsCopy } from "react-icons/bs";

const CopyText = ({ textToCopy }) => {
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowModal(true);
        setTimeout(() => setShowModal(false), 2000);
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };

  return (
    <div className="">
      <div
        className={`relative cursor-pointer rounded w-[25px] h-[25px] p-1 flex items-center justify-center  ${
          showModal ? "bg-transparent border-none" : "bg-white border "
        }`}
        onClick={() => copyToClipboard(textToCopy)}
      >
        {!showModal ? (
          <BsCopy className="text-grayMenu" />
        ) : (
          <div className="text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
        {showModal && (
          <div className="absolute top-[-2px] right-[30px] w-[60px] h-[28px] bg-black text-white text-xs flex items-center justify-center rounded-md">
            <div className="">
              <span>Copied!</span>
              <div className=" absolute right-[-3px] top-[9px] w-[10px] h-[10px] bg-black rotate-45 "></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CopyText;
