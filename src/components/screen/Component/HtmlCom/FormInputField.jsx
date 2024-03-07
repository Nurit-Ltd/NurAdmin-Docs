import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsCopy } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
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
    }, 2000);
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
      <div className="mt-8 w-full relative">
        <div className="group  px-4 py-2 bg-bgBluer overflow-x-auto">
          <ReactMarkdown>{markdown}</ReactMarkdown>

          <CopyToClipboard
            text={markdown}
            onCopy={handleCopy}
            className="absolute invisible  group-hover:visible top-3 right-3 cursor-pointer rounded w-[25px] h-[25px] p-1 bg-white border items-center justify-center hover:flex duration-200"
          >
            <BsCopy className="text-gray-400 hover:text-grayMenu duration-150" />
          </CopyToClipboard>
        </div>
      </div>
      {copied && (
        <div className="w-[420px] h-[86px] p-4 border bg-white shadow-md fixed bottom-4 right-[-50px] transform -translate-x-1/2 flex items-center justify-between">
          <div className="flex gap-4">
            <BsCopy />
            <div>
              <h5 className="text-lg text-headingText font-medium">
                Copied to clipboard
              </h5>
              <p className="text-grayPrimary">Paste it wherever you like.</p>
            </div>
          </div>
          <div>
           <RxCross2 onClick={()=>setCopied(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormInputField;
