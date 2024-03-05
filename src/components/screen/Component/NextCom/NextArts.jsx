import { nextArt } from "../../../../data/nextComData";

const NextArts = () => {
  return (
    <div className="pt-20">
    {nextArt.map((item) => (
        <div key={item.id} className="space-y-8">
          <h3 className="text-xl text-headingText font-bold leading-6">
            {item.title}
          </h3>
          <p className="text-headingText leading-6">
            {item.description}
          </p>
          <div>
            <img src={item.formImg} alt="form-input" />
          </div>
          <p className="text-headingText leading-6">{item.markText}</p>
        </div>
      ))}
    </div>
  );
};

export default NextArts;