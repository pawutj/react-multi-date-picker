import React from "react";
import Layout from "../components/layout/layout";
import doc from "../docs/ref";

export default function Ref({ pageContext }) {
  const language = pageContext.language || "en";

  return <Layout language={language} doc={doc} />;
}
