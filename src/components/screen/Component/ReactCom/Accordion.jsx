import { reactAccordion } from "../../../../data/reactComData";

const Accordion = () => {
  return (
    <div className="pt-20">
      {reactAccordion.map((item) => (
        <div key={item.id} className="space-y-8">
          <h3 className="text-xl text-headingText font-bold leading-6">
            {item.title}
          </h3>
          <p className="text-headingText leading-6">{item.description}</p>
          <div>
            <img src={item.formImg} alt="form-input" />
          </div>
          <div>
            <ul className="space-y-3">
              {item.markText.map((mark, index) => (
                <li key={index} className="text-headingText leading-6">
                  {mark}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
