import React from "react";

export default function EditSample() {
  let editingConfigs;
  return (
    <React.Fragment>
      <h2>Editing This Sample:</h2>
      <article id="editPage">
        <section>
          <h3>Title</h3>
        </section>
        <section>
          <ul>
            <button onClick={() => console.log("saved")}> Save </button>
          </ul>
          <ul>
            <button onClick={() => console.log("preview")}> Preview </button>
          </ul>
        </section>
      </article>
      {editingConfigs}
    </React.Fragment>
  );
}
