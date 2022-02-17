/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";

function Money() {
  const items = useSelector((state) => state.products.items);
  const billMoney = useSelector((state) => state.products.money);
  const [prevMoney, setPrevMoney] = useState(0);

  useEffect(() => {
    let timer1 = setTimeout(() => setPrevMoney(billMoney), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, [items]);
  return (
    <div className="money container">
      <CountUp
        start={prevMoney}
        end={billMoney}
        preserveValue={true}
        duration={2}
        separator=","
        decimals={0}
        decimal=","
        prefix="$"
      />
    </div>
  );
}

export default Money;
