import React, { useState } from "react";
import { samplesData } from "../data/samplesData";
import { Link } from "react-router-dom";
import CreateSample from "./CreateSample";

export default function Samples() {
  const [data, setData] = useState(samplesData);

  let samples;

  if (data.length) {
    samples = data.map((sample, index) => (
      // sets unique key prop for each sample
      <article key={index}>
        <section>
          <h2>{sample.title}</h2>
          <p>{sample.time}</p>
        </section>
        <section>
          <ul>
            <Link to={`/edit/${sample.id}`}>Edit</Link>
          </ul>
          <ul>Preview</ul>
          <ul>
            <Link to={`/shared/${sample.id}`}>Share</Link>
          </ul>
        </section>
      </article>
    ));
  }

  return (
    <React.Fragment>
      <main>
        <h2>Samples You've Created</h2>
        {samples}
        <CreateSample />
      </main>
    </React.Fragment>
  );
}
