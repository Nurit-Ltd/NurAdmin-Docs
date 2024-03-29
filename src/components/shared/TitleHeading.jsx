import { useEffect, useRef, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const TitleHeading = ({ emoji, title, description }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showModal &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setShowModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="relative w-auto lg:w-[723px] xl:w-[979px] xl1:w-[919px] 2xl:w-[1015px] 3xl:w-[1079px] 4xl:w-[1200px]">
      <div className="container_fluid">
        <div className="pt-10">
          <div className="">
            <div className="flex items-center justify-between pr-5 relative">
              <div className="flex items-center">
                <span className="absolute hidden md:block left-[-30px] lg:left-[-40px] text-xl">
                  {emoji}
                </span>
                <h2 className="text-[32px] lg:text-heading1 text-headingText font-bold leading-[48px] flex items-center">
                  <span className="text-xl pr-2 md:hidden">{emoji}</span>
                  {title}
                </h2>
              </div>

              <div className="relative" ref={modalRef}>
                <div
                  onClick={toggleModal}
                  className={`w-10 h-10 cursor-pointer flex items-center justify-center  rounded-full hover:bg-blue-100 duration-200 ${
                    showModal ? "bg-blue-200" : "bg-white"
                  }`}
                >
                  <PiDotsThreeVerticalBold />
                </div>
                {showModal && (
                  <div className="modal bg-white shadow-md w-[244px] h-[92px] border rounded absolute top-[60px] xl1:left-0 right-0  py-2 z-[999]">
                    <div className="h-[38px] flex items-center mx-2 py-1 hover:bg-gray-100  cursor-pointer">
                      <div className="pr-3">
                        <AiOutlineLink className="w-[34px] h-[18px] text-right text-blueIcon" />
                      </div>
                      <p className="font-medium text-grayHead">Copy link</p>
                    </div>
                    <div className="h-[38px] flex items-center mx-2 py-1 hover:bg-gray-100  cursor-pointer">
                      <div className="pr-3">
                        <BsGithub className="w-[34px] h-[18px] text-blueIcon" />
                      </div>
                      <span className="font-medium text-grayHead">
                        Edit on GitHub
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="pt-4 text-grayPrimary">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleHeading;
