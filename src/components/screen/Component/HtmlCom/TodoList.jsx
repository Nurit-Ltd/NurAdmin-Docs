
import { todoList } from "../../../../data/formInputData";

// todoList
const TodoList = () => {
  return (
    <div className="pt-20">
      {todoList.map((item) => (
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
      
    </div>
  );
};

export default TodoList;