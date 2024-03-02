import { useEffect, useRef, useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const TitleHeading = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModal && modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div>
      <div className="flex pt-10 mb-6">
        <div className="space-y-4 max-w-[750px]">
          <div className="flex justify-between">
            <h2 className="text-heading1 text-headingText font-bold leading-[48px] border border-red-500">
              Introduction
            </h2>
            <div className=" relative border border-red-500" ref={modalRef}>
              <div className={`w-10 h-10 flex items-center bg-white justify-center ${showModal && " bg-blue-200 rounded-full"}`}>
                <PiDotsThreeVerticalBold onClick={toggleModal} />
              </div>
              {showModal && (
                <div className="modal bg-white w-[244px] h-[92px] border border-red-400 absolute top-[50px] left-[0px] ">
                  <div className="modal-content">
                    Copy Link
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="text-grayPrimary">
            Welcome to the documentation for TailAdmin, This documentation
            covers all the essential aspects of using TailAdmin, from
            installation and usage to customization and exploring features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleHeading;
