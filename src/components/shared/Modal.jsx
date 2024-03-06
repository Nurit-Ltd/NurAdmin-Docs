import { IoSearchOutline } from "react-icons/io5";

const Modal = () => {
  return (
    <div
      className="backdrop pt-[80px] md:pl-[160px] xl:pl-[250px] 2xl:pl-[360px] bg-black bg-opacity-50 overflow-x-hidden 
                overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[785px] h-[98px] border rounded bg-[#ffffff]"
      >
        <div className="w-full h-[52px] px-6 flex items-center">
          <IoSearchOutline />
          <input
            type="text"
            className="p-4 mt-1 w-full outline-none overflow-hidden placeholder:text-grayPrimary"
            placeholder="Search content…"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <p>Type something to search</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
