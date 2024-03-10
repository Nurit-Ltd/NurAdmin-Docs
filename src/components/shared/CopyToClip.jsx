import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsCopy } from "react-icons/bs";

const CopyToClip = ({ markdown }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); // Reset message after 2 seconds
  };

  return (
    <>
      <CopyToClipboard
        text={markdown}
        onCopy={handleCopy}
        className={`absolute  top-3 right-3 cursor-pointer rounded w-[25px] h-[25px] p-1 flex items-center justify-center   ${
          copied
            ? "bg-transparent border-none duration-300"
            : "bg-white border duration-300"
        }`}
      >
        <div className="relative">
          {!copied ? (
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
          {copied && (
            <div className="absolute top-[-2px] right-[30px] w-[60px] h-[28px] bg-black text-white text-xs flex items-center justify-center rounded-md">
              <div className="">
                <span>Copied!</span>
                <div className=" absolute right-[-3px] top-[9px] w-[10px] h-[10px] bg-black rotate-45 "></div>
              </div>
            </div>
          )}
        </div>
      </CopyToClipboard>
    </>
  );
};

export default CopyToClip;
