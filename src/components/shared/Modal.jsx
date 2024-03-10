import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Modal = () => {
  const [windowPaddingTop, setWindowPaddingTop] = useState(80);
  const [windowPaddingLeft, setWindowPaddingLeft] = useState(0);
  const [modalWidth, setModalWidth] = useState(785);

  useEffect(() => {
    const handleResize = () => {
      setWindowPaddingTop(80);
      setWindowPaddingLeft(window.pageXOffset);
      setModalWidth(window.innerWidth * 0.9);
    };

    setWindowPaddingLeft(window.pageXOffset);
    setModalWidth(window.innerWidth * 0.9);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="backdrop bg-black bg-opacity-50 flex justify-center items-start fixed inset-0 z-50 outline-none focus:outline-none"
      style={{ paddingTop: `${windowPaddingTop}px`, paddingLeft: `${windowPaddingLeft}px` }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-[98px] border rounded bg-[#ffffff]"
        style={{ maxWidth: `${modalWidth}px`, width: "785px" }}
      >
        <div className="w-full h-[52px] px-6 flex items-center">
          <IoSearchOutline size={21} className="text-blueSearch mt-1" />
          <input
            type="text"
            className="p-4 mt-1 w-full outline-none overflow-hidden placeholder:text-sm placeholder:text-grayPrimary placeholder:font-medium"
            placeholder="Search content…"
          />
        </div>
        <div className="w-full flex items-center justify-center text-sm text-grayPrimary">
          <p>Type something to search</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
