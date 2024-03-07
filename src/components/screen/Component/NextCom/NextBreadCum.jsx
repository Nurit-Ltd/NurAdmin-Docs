import ReactMarkdown from "react-markdown";
import { nextBreadCrumb } from '../../../../data/nextComData';
import CopyToClip from '../../../shared/CopyToClip';

const NextBreadCum = () => {
  const markdown = `
  \`\`\`
  import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
  \`\`\`
  `;
  return (
    <div className="pt-20">
    {nextBreadCrumb.map((item) => (
      <div key={item.id} className="space-y-8">
        <h3 className="text-xl text-headingText font-bold leading-6">
          {item.title}
        </h3>
        <p className="text-headingText leading-6">{item.description}</p>
        <div>
          <img src={item.formImg} alt="form-input" />
        </div>
        <p className="text-headingText leading-6">{item.markText}</p>
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

export default NextBreadCum;