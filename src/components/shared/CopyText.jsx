import { useState } from 'react';
import { BsCopy } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

const CopyText = ({ textToCopy }) => {
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
        setShowModal(true);
        setTimeout(() => setShowModal(false), 2000); 
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };

  return (
    <div className="">
      <div
        className="cursor-pointer rounded w-[25px] h-[25px] p-1 bg-white border items-center justify-center"
        onClick={() => copyToClipboard(textToCopy)}
      >
        <BsCopy className="text-grayMenu" />
      </div>
      {/* Modal */}
      {showModal && (
        <div
          className="main w-[280px] sm:w-[420px] h-[86px] p-4 border bg-white shadow-md fixed bottom-[20px] right-[20px] flex items-center justify-between"
        >
          <div className="flex gap-4">
            <BsCopy size={18} className="mt-2" />
            <div>
              <h5 className="text-lg text-headingText font-medium">
                Copied to clipboard
              </h5>
              <p className="text-grayPrimary">Paste it wherever you like.</p>
            </div>
          </div>
          <div>
            <RxCross2 onClick={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CopyText;
