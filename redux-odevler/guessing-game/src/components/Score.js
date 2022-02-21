import React from "react";
import { useSelector } from "react-redux";

function Score() {
  const score = useSelector((state) => state.cards.score);
  if (score === 30) {
    window.scrollTo(0, 0);
  }
  return (
    <div className="container mx-auto my-1">
      <div className="mb-3 flex">
        <div className="mx-auto px-3 py-1 text-white bg-slate-800 rounded-xl my-auto text-lg font-medium">
          Score: {score}
        </div>
      </div>
    </div>
  );
}

export default Score;
