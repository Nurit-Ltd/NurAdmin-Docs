import { useState } from 'react';
import { BsCopy } from 'react-icons/bs';

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
        className="cursor-pointer rounded w-[25px] h-[25px] p-1 bg-white border items-center justify-center hover:flex duration-200"
        onClick={() => copyToClipboard(textToCopy)}
      >
        <BsCopy className="text-grayMenu" />
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed  bottom-0 right-0 w-full h-full flex items-center justify-center">
          <div className="bg-white border rounded p-4">
            <p>Text copied to clipboard!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CopyText;
