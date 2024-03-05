import { color } from "../../../data/customization";
const Color = () => {
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
    </div>
  );
};

export default Color;
