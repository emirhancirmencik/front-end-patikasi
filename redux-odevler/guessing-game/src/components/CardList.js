import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { createCard, flipCard, check } from "../redux/Card/cardSlice";
function CardList() {
  const cardNames = useSelector((state) => state.cards.frameworkNames);
  const cards = useSelector((state) => state.cards.list);
  const opened = useSelector((state) => state.cards.opened);
  const dispatch = useDispatch();
  const [shuffledCards, setShuffledCards] = useState(
    [...cardNames, ...cardNames].sort((a, b) => 0.5 - Math.random())
  );

  useEffect(() => {
    if (cards.length < 16) {
      setShuffledCards(
        [...cardNames, ...cardNames].sort((a, b) => 0.5 - Math.random())
      );
      shuffledCards.map((card) =>
        dispatch(
          createCard({
            id: nanoid(),
            name: card,
            opened: false,
            completed: false,
          })
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  function handleClick(card) {
    if (card.completed === true) {
      return;
    }
    if (opened.length === 2) {
      return false;
    }
    if (card.opened === true) {
      dispatch(flipCard(card));
      return;
    }
    dispatch(flipCard(card));
  }

  if (opened.length === 2) {
    setTimeout(() => dispatch(check([opened[0], opened[1]])), 600);
  }

  return cards ? (
    <div className="container mx-auto pb-1">
      <div className="grid grid-cols-6 gap-3">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className={`bg-slate-900 hover:bg-slate-900 rounded-xl flex h-28 mycard m-auto relative ${
                card.opened && "opened"
              } ${card.completed ? " completed" : ""}`}
              onClick={() => handleClick(card)}
            >
              <div
                className={`front bg-slate-800 hover:bg-slate-900 rounded-xl text-gray-500 text-5xl cursor-pointer`}
              >
                ?
              </div>
              <div className={`back`}>
                <img
                  src={require(`../images/${card.name}.png`)}
                  alt={card}
                  className="w-9/12 m-auto"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
}

export default CardList;
