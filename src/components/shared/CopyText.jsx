import { BsCopy } from "react-icons/bs";

const CopyText = ({ textToCopy }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };

  return (
    <div
      className="cursor-pointer rounded w-[25px] h-[25px] p-1 bg-white border items-center justify-center  hover:flex  duration-200"
      onClick={() => copyToClipboard(textToCopy)}
    >
      <BsCopy className=" text-grayMenu" />
    </div>
  );
};

export default CopyText;
