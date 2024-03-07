import ReactMarkdown from "react-markdown";
import { color } from "../../../data/customization";
import CopyToClip from "../../shared/CopyToClip";
const Color = () => {
  const markdown = `
  \`\`\`
  module.exports = {
    theme: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
          100: '#f7fafc',
          // ...
          900: '#1a202c',
        },
  
        // ...
      }
    }
  }
  \`\`\`
  `;
  return (
    <div className="pt-20">
      {color.map((item) => (
        <div key={item.id} className="space-y-8">
          <h3 className="text-xl text-headingText font-bold leading-6">
            {item.title}
          </h3>
          <p className="text-headingText leading-6">{item.description}</p>
        </div>
      ))}
       <div className="mt-8 w-full relative">
        <div className="group  px-4 py-2 bg-bgBluer overflow-x-auto">
          <ReactMarkdown>{markdown}</ReactMarkdown>
          <CopyToClip markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default Color;
