import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsCopy } from "react-icons/bs";
import ReactMarkdown from "react-markdown";
import { htmlComponents } from "../../../../data/formInputData";

const FormInputField = () => {
  const [copied, setCopied] = useState(false);

  const markdown = `
  \`\`\`html
  <div>
    <label class="mb-3 block text-black dark:text-white">
      Default Input
    </label>
    <input type="text" placeholder="Default Input"
      class="border-stroke dark:border-form-strokedark dark:bg-form-input focus:border-primary dark:focus:border-primary active:border-primary bg-transparent w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter">
  </div>
  
  <div>
    <label class="mb-3 block text-black dark:text-white">
      Active Input
    </label>
    <input type="text" placeholder="Active Input"
      class="border-primary focus:border-primary active:border-primary dark:bg-form-input bg-transparent w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter" />
  </div>
  
  <div>
    <label class="mb-3 block font-medium text-black dark:text-white">
      Disabled label
    </label>
    <input type="text" placeholder="Disabled label" disabled=""
      class="border-stroke dark:border-form-strokedark dark:bg-form-input focus:border-primary dark:focus:border-primary active:border-primary bg-transparent w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter dark:disabled:bg-black" />
  </div>
  \`\`\`
  `;

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset message after 2 seconds
  };

  return (
    <div className="pt-20">
      {htmlComponents.map((item) => (
        <div key={item.id} className="space-y-8">
          <h3 className="text-xl text-headingText font-bold leading-6">
            {item.title}
          </h3>
          <p className="text-headingText leading-6">
            {item.description.split(" ").map((word, index) =>
              word === "Default" || word === "Active" || word === "Disabled" ? (
                <span className="font-bold" key={index}>
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </p>
          <div>
            <img src={item.formImg} alt="form-input" />
          </div>
        </div>
      ))}
      <div className="w-full border px-4 py-2 bg-bgBluer overflow-x-auto">
        <CopyToClipboard
          text={markdown}
          onCopy={handleCopy}
          className="cursor-pointer rounded w-[25px] h-[25px] p-1 bg-white border items-center justify-center hover:flex duration-200"
        >
          <BsCopy className="text-grayMenu" />
        </CopyToClipboard>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      {copied && (
        <div className="w-[420px] h-[86px] border bg-white shadow-md fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <p className="text-green-600 ">
          Copied to clipboard!
        </p>
        </div>
      )}
    </div>
  );
};

export default FormInputField;
