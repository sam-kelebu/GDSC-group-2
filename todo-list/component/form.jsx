import { useState } from "react";

const Form = () => {
  const [content, setContent] = useState("");
  const [mainTopic, setmainTopic] = useState("");
  const [subTopic, setsubTopic] = useState("");
  return (
    <main>
      <form className="note-form">
        <h1>taking notes</h1>
        <input
          type="text"
          placeholder="make your topic"
          className="main-topic"
          // eslint-disable-next-line no-undef
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="bunch of sub topics"
          className="sub-topic"
          value={mainTopic}
          onChange={(event) => {
            setmainTopic(event.target.value);
          }}
        />
        <textarea
          value={subTopic}
          onChange={(event) => {
            setsubTopic(event.target.value);
          }}
        />

        <button>save</button>
      </form>
    </main>
  );
};
export default Form;
