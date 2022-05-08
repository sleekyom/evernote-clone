import React from "react";
import useInput from "../../customhook/useInput";

const Form = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContnet, resetContent] = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content);
    resetTitle();
    resetContent();
  };

  return (
    <div className="section">
      <form action="">
        <h5 className="grey-text">New note</h5>
        <div className="input-field">
          <input
            value="Alvin"
            id="note_title"
            type="text"
            className="validate"
            {...bindTitle}
          />
          <label className="active" for="note_title">
            Note title
          </label>
        </div>
        <div className="input-field">
          <textarea
            id="note_content"
            className="materialize-textarea"
            {...bindContnet}
          ></textarea>
          <label for="note_content">Note Content</label>
        </div>
        <button className="btn green" onClick={handleSubmit}>
          Add note
        </button>
      </form>
    </div>
  );
};

export default Form;
