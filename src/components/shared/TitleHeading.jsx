import { useEffect, useRef, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
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
      <div className="pt-10 mb-6">
        <div className="">
          <div className="flex justify-between pr-10">
            <div className="flex items-center">
            <span className="pr-4">👋</span><h2 className="text-heading1 text-headingText font-bold leading-[48px] ">
              Introduction
            </h2>
            </div>
            
            <div className="relative" ref={modalRef}>
              <div className={`w-10 h-10 cursor-pointer flex items-center bg-white justify-center ${showModal && "bg-blue-300 rounded-full"}`}>
                <PiDotsThreeVerticalBold onClick={toggleModal} />
              </div>
              {showModal && (
                <div className="modal bg-white shadow-md w-[244px] h-[92px] border rounded absolute top-[50px] left-[0px] py-2">
                  <div className="h-[38px] flex items-center mx-2 py-1 hover:bg-gray-100">
                     <div className="pr-3">
                     <AiOutlineLink  className="w-[34px] h-[18px] text-right text-blueIcon" />
                     </div>
                     <p className="font-medium text-grayHead">Copy link</p>
                  </div>
                  <div className="h-[38px] flex items-center mx-2 py-1 hover:bg-gray-100">
                     <div className="pr-3">
                     <BsGithub className="w-[34px] h-[18px] text-blueIcon" />
                     </div>
                     <span className="font-medium text-grayHead">Edit on GitHub</span>
                  </div>
                </div>
              )}
            </div>
          </div>         
        </div>
        <div className="max-w-[828px] pt-4">
        <p className="mx-10 text-grayPrimary">
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
