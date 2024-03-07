import ReactMarkdown from "react-markdown";
import { spacing } from "../../../data/customization";
import CopyToClip from "../../shared/CopyToClip";

const Spacing = () => {
  const markdown = `
  \`\`\`
  module.exports = {
    theme: {
      spacing: {
        px: '1px',
        px2: '2px',
        0: '0',
        0.5: '0.125rem'
        // ...
      },
    }
  }
  \`\`\`
  `;
  return (
    <div className="pt-20">
      {spacing.map((item) => (
        <div key={item.id} className="space-y-8">
          <h3 className="text-xl text-headingText font-bold leading-6">
            {item.title}
          </h3>
          <p className="text-headingText leading-6">{item.description}</p>
          <p className="text-headingText leading-6">{item.note}</p>
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

export default Spacing;