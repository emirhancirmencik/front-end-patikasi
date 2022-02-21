import React from "react";
import { useSelector } from "react-redux";

function CardList() {
  const cards = useSelector((state) => state.cards.frameworks);
  const shuffledCards = [...cards, ...cards].sort(
    (a, b) => 0.5 - Math.random()
  );
  return (
    <div className="container mx-auto my-auto w-2/5 ">
      <div className="grid grid-cols-6 gap-3 p-10 pt-2 pb-0">
        {shuffledCards.map((card) => {
          return (
            <div className="bg-slate-100 rounded-xl flex h-28">
              <div class="back text-gray-500 hidden">?</div>
              <div className="front my-auto">
                <img
                  src={require(`../images/${card.name}.png`)}
                  alt={card}
                  className="w-9/12 mx-auto "
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardList;
