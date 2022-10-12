import React from "react";
import { Link } from "react-router-dom";

export default function SampleContainer() {
  let sampleID = 1;
  return (
    <article>
      <section>
        <h2>Sample Name</h2>
        <p>Sample Date Time</p>
      </section>
      <section>
        <ul>
          <Link to={`/edit/${sampleID}`}>Edit</Link>
        </ul>
        <ul>Preview</ul>
        <ul>
          <Link to={`/shared/${sampleID}`}>Share</Link>
        </ul>
      </section>
    </article>
  );
}
