import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { htmlComponents } from "../../../data/formInputData";
const FormInputField = () => {
  
  const [postContent, setPostContent] = useState("");
  const fileName ='artical.md'

  useEffect(() => {
    import(`../../../markdown/${fileName}`)
      .then(res => {
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostContent(response))
          .catch(err => console.log(err))
      })
  }, []); 
  return (
    <div className="pt-10">
      {htmlComponents.map((item) => (
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
      <div className="w-full border">
      <Markdown>{postContent}</Markdown>
      </div>
    </div>
  );
};

export default FormInputField;
