import { spacing } from "../../../data/customization";

const Spacing = () => {
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
    </div>
  );
};

export default Spacing;