import React, { useState } from "react";

function CreateArea(props) {
  const [Note, setNote] = useState({
    title: "",
    content: ""
  });

  function submitnote(event) {
    props.onadd(Note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function handlechange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handlechange}
          name="title"
          placeholder="Title"
          value={Note.title}
        />
        <textarea
          onChange={handlechange}
          name="content"
          placeholder="Take a note..."
          value={Note.content}
          rows="3"
        />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
