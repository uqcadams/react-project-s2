import React from "react";
import { Link } from "react-router-dom";

export default function CreateSample() {
  return (
    <article>
      <section>
        <ul>
          <Link to={`/create-sample`}>Create Sample</Link>
        </ul>
      </section>
    </article>
  );
}
