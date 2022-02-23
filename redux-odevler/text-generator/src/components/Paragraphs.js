import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

function Paragraphs() {
  const paragraphs = useSelector((state) => state.lorem.paragraphs);

  return (
    <div className="container my-auto">
      <div className="row w-50 mx-auto">
        {paragraphs.map((paragraph) => {
          return paragraph.length !== 0 ? (
            <div key={nanoid()} className="col-12 mt-4">
              {paragraph}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default Paragraphs;
