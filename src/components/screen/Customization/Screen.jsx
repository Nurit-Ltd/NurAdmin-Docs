
import { Link } from "react-router-dom";
import { screen } from "../../../data/customization";
const Screen = () => {
  return (
    <div className="pt-20">
      {screen.map((item) => (
        <div key={item.id} className="space-y-8">
          <h3 className="text-xl text-headingText font-bold leading-6">
            {item.title}
          </h3>
          <p className="text-headingText leading-6">{item.description}</p>
          <div className="w-full h-[214px] bg-bgBluer">

          </div>
          <p className="text-headingText leading-6">{item.documents} <span className=" text-activeBar"><Link to={item.link}>Tailwind CSS documentation.</Link></span> </p>
        </div>
      ))}
    </div>
  );
};

export default Screen;