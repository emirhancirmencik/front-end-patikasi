import React from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

function MarkdownPreviewer() {
  const text = useSelector((state) => state.markdown.text);

  return (
    <div className="panel h-100 w-100 viewer">
      <ReactMarkdown children={text}>{text}</ReactMarkdown>
    </div>
  );
}

export default MarkdownPreviewer;
