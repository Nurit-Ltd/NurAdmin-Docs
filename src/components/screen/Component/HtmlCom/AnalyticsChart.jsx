import ReactMarkdown from "react-markdown";
import { analyticChart } from "../../../../data/formInputData";
import CopyToClip from "../../../shared/CopyToClip";

const AnalyticsChart = () => {
  const markdown = `
  \`\`\`html
  <div class="col-span-12 flex flex-wrap items-center justify-between gap-3">
      <!-- Datepicker built with flatpickr -->
      <div class="relative">
        <input
          class="datepicker w-[120%] rounded border border-stroke bg-white py-2 pl-10 pr-4 text-sm font-medium shadow-card-2 focus-visible:outline-none dark:border-strokedark dark:bg-boxdark"
          placeholder="Select dates"
          data-class="flatpickr-right"
        />
        <div
          class="pointer-events-none absolute inset-0 left-4 right-auto flex items-center"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="<http://www.w3.org/2000/svg>"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V15C3 15.4142 3.33579 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V4.5C15 4.08579 14.6642 3.75 14.25 3.75H3.75ZM1.5 4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H14.25C15.4926 2.25 16.5 3.25736 16.5 4.5V15C16.5 16.2426 15.4926 17.25 14.25 17.25H3.75C2.50736 17.25 1.5 16.2426 1.5 15V4.5Z"
              fill="#64748B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0.75C12.4142 0.75 12.75 1.08579 12.75 1.5V4.5C12.75 4.91421 12.4142 5.25 12 5.25C11.5858 5.25 11.25 4.91421 11.25 4.5V1.5C11.25 1.08579 11.5858 0.75 12 0.75Z"
              fill="#64748B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 0.75C6.41421 0.75 6.75 1.08579 6.75 1.5V4.5C6.75 4.91421 6.41421 5.25 6 5.25C5.58579 5.25 5.25 4.91421 5.25 4.5V1.5C5.25 1.08579 5.58579 0.75 6 0.75Z"
              fill="#64748B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.5 7.5C1.5 7.08579 1.83579 6.75 2.25 6.75H15.75C16.1642 6.75 16.5 7.08579 16.5 7.5C16.5 7.91422 16.1642 8.25 15.75 8.25H2.25C1.83579 8.25 1.5 7.91422 1.5 7.5Z"
              fill="#64748B"
            />
          </svg>
        </div>
      </div>
      <div
        class="relative z-20 inline-block rounded bg-white shadow-card-2 dark:bg-boxdark"
      >
        <select
          name=""
          id=""
          class="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 text-sm outline-none dark:border-strokedark"
        >
          <option value="">Yearly</option>
          <option value="">Monthly</option>
        </select>
        <span class="absolute top-1/2 right-3 z-10 -translate-y-1/2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="<http://www.w3.org/2000/svg>"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.96967 6.21967C4.26256 5.92678 4.73744 5.92678 5.03033 6.21967L9 10.1893L12.9697 6.21967C13.2626 5.92678 13.7374 5.92678 14.0303 6.21967C14.3232 6.51256 14.3232 6.98744 14.0303 7.28033L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803L3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967Z"
              fill="#64748B"
            />
          </svg>
        </span>
      </div>
    </div>
    <include src="./partials/chart-04.html" />
  \`\`\`
  `;

  return (
    <div className="pt-20">
      {analyticChart.map((item) => (
        <div key={item.id} className="space-y-8">
          <h3 className="text-xl text-headingText font-bold leading-6">
            {item.title}
          </h3>
          <p className="text-headingText leading-6">
            {item.description.split(" ").map((word, index) =>
              word === "Default" || word === "Active" || word === "Disabled" ? (
                <span className="font-bold" key={index}>
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </p>
          <div>
            <img src={item.formImg} alt="form-input" />
          </div>
        </div>
      ))}
      <div className="py-6">
        <p className="text-grayPrimary leading-5">
          Here’s an example of a visitor analytics chart.
        </p>
      </div>
      <div className="w-full relative">
        <div className="group  px-4 py-2 bg-bgBluer overflow-x-auto">
          <ReactMarkdown>{markdown}</ReactMarkdown>
          <CopyToClip markdown={markdown} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;
