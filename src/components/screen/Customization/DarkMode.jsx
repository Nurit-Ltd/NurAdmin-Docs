
import { Link } from "react-router-dom";
import { dark } from "../../../data/customization";
const DarkMode = () => {
  return (
    <div className="pt-20">
      {dark.map((item) => (
        <div key={item.id} className="space-y-8">
          <h3 className="text-xl text-headingText font-bold leading-6">
            {item.title}
          </h3>
          <p className="text-headingText leading-6">{item.description}</p>
          <span className="text-activeBar"><Link to={item.link}>documentation with examples here</Link></span>
        </div>
      ))}
    </div>
  );
};

export default DarkMode;
