import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsCopy } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const CopyToClip = ({ markdown }) => {
  const [copied, setCopied] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset message after 2 seconds
  };

  return (
    <>
      <CopyToClipboard
        text={markdown}
        onCopy={handleCopy}
        className="absolute invisible group-hover:visible top-3 right-3 cursor-pointer rounded w-[25px] h-[25px] p-1 bg-white border items-center justify-center hover:flex duration-200"
      >
        <BsCopy className="text-gray-400 hover:text-grayMenu duration-150" />
      </CopyToClipboard>
      {copied && (
        <div
          className="main w-[280px] sm:w-[420px] h-[86px] p-4 border bg-white shadow-md fixed bottom-[20px] right-[20px] flex items-center justify-between"
        >
          <div className="flex  gap-4">
            <BsCopy size={18} className="mt-2" />
            <div>
              <h5 className="text-lg text-headingText font-medium">
                Copied to clipboard
              </h5>
              <p className="text-grayPrimary">Paste it wherever you like.</p>
            </div>
          </div>
          <div>
            <RxCross2 onClick={() => setCopied(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default CopyToClip;
