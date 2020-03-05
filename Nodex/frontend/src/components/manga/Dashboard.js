import React, { Fragment } from "react";
import Form from "./Form";
import Manga from "./Manga";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Manga />
    </Fragment>
  );
}
