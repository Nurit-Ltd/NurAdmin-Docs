import { GoAlert } from "react-icons/go";
import { Link } from "react-router-dom";
import { useFullLinkData } from "../../../data/useFullLinkData";
const UseFullLInk = () => {
  return (
    <>
      <div className="pt-10">
        <div>
          {useFullLinkData.slice(0, 1).map((data) => (
            <div className="py-4" key={data.id}>
              <div className="w-full h-[52px] flex items-center gap-4 bg-bgPink p-4">
                <GoAlert className="w-[18px] h-[18px] text-redText" />
                <p className="text-sm text-grayPrimary">{data.description}</p>
              </div>
              {data.post.map((posts, index) => (
                <div
                  key={index}
                  className="pt-2 flex items-center justify-center"
                >
                  <div className="flex items-center  gap-2">
                    <div className="text-xs">{posts.emoji}</div>
                    <p className="text-xs text-grayXm">{posts.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          {useFullLinkData.slice(1, 3).map((data) => (
            <div className="py-4" key={data.id}>
              <Link
                to={data.link}
                target="blank"
                className="w-full h-[66px] text-headingText hover:text-blueActive flex items-center gap-4 border p-4 footer_bar duration-200"
              >
                <img src={data.img} alt="" className="w-8 h-8 object-fill" />
                <p className=" font-medium">{data.description}</p>
              </Link>
              {data.post.map((posts, index) => (
                <div
                  key={index}
                  className="pt-2 flex items-center justify-center"
                >
                  <div className="flex items-center  gap-2">
                    <div className="text-xs">{posts.emoji}</div>
                    <p className="text-xs text-grayXm">{posts.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          {useFullLinkData.slice(3).map((data) => (
            <div className="py-4" key={data.id}>
              <Link
                to={data.link}
                target="blank"
                className="w-full h-[80px] flex items-center gap-4 border p-4 text-headingText hover:text-blueActive footer_bar duration-200"
              >
                <img src={data.img} alt="" className="w-8 h-8 object-fill" />
                <div>
                  <p className="font-medium">{data.description}</p>
                  <p className="text-sm text-grayMenu">{data.subDes}</p>
                </div>
              </Link>
              {data.post.map((posts, index) => (
                <div
                  key={index}
                  className="pt-2 flex items-center justify-center"
                >
                  <div className="flex items-center  gap-2">
                    <div className="text-xs">{posts.emoji}</div>
                    <p className="text-xs text-grayXm">{posts.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UseFullLInk;
