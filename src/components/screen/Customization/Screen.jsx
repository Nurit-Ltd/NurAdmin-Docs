import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { screen } from "../../../data/customization";
import CopyToClip from "../../shared/CopyToClip";
const Screen = () => {
  const markdown = `
  \`\`\`
  module.exports = {
    theme: {
      screens: {
          '3xl': '1600px',
          '4xl': '2000px',
           // ...
       }
    },
  };
  \`\`\`
  `;

  return (
    <div className="pt-20">
      {screen.map((item) => (
        <div key={item.id} className="space-y-8">
          <h3 className="text-xl text-headingText font-bold leading-6">
            {item.title}
          </h3>
          <p className="text-headingText leading-6">{item.description}</p>
          <div className="mt-8 w-full relative">
            <div className="group  px-4 py-2 bg-bgBluer overflow-x-auto">
              <ReactMarkdown>{markdown}</ReactMarkdown>
              <CopyToClip markdown={markdown} />
            </div>
          </div>
          <p className="text-headingText leading-6">
            {item.documents}{" "}
            <span className=" text-activeBar">
              <Link to={item.link}>Tailwind CSS documentation.</Link>
            </span>{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Screen;
