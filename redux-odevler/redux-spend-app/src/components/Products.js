/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Dinero from "dinero.js";
import { useDispatch } from "react-redux";
import { changeAmount } from "../redux/products/productsSlice";
import millify from "millify";
import { nanoid } from "@reduxjs/toolkit";

function Products() {
  const items = useSelector((state) => state.products.items);
  const money = useSelector((state) => state.products.money);
  const loading = useSelector((state) => state.products.loading);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(items.map((e) => e.amount));

  useEffect(() => {
    let _total = 0;
    items.forEach((e) => {
      _total += parseInt(e.amount) * e.price;
    });
    window.localStorage.setItem("products", JSON.stringify(items));
    window.localStorage.setItem("money", money);
    setTotal(_total);
  }, [items]);

  function handleChange(quant, item) {
    const _temp = [...amount];
    const id = item.id;
    _temp[id - 1] = quant;
    quant = quant[0] === "0" ? (quant.length > 1 ? quant[1] : 0) : quant;
    quant =
      money < item.price * quant
        ? quant > item.amount
          ? String(Math.floor(money / item.price) + item.amount)
          : quant
        : quant;
    quant = quant === "" ? 0 : quant;

    quant = quant >= 0 ? quant : 0;
    _temp[id - 1] = quant;
    quant = parseInt(quant);

    setAmount(_temp);
    dispatch(changeAmount({ id: id, amount: quant }));
  }

  function handleBuy(item) {
    const _temp = [...amount];
    const id = item.id;
    _temp[id - 1] = item.amount + 1;
    setAmount(_temp);
    dispatch(changeAmount({ id: item.id, amount: item.amount + 1 }));
  }
  function handleSell(item) {
    const _temp = [...amount];
    const id = item.id;
    _temp[id - 1] = item.amount - 1;
    setAmount(_temp);
    dispatch(changeAmount({ id: item.id, amount: item.amount - 1 }));
  }
  return (
    <div className="container p-0 products">
      {
        <div className="items">
          {items.map((item) => {
            return (
              <div className="mycard bg-color" key={item.id}>
                <div className="">
                  <div className="p-0">
                    <img
                      className="img pt-3"
                      src={require(`../images/${item.name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}.jpg`)}
                      alt="Product"
                    />
                  </div>
                  <div className="text-center name">{item.name}</div>
                  <div className="text-center price pb-3">
                    {Dinero({ amount: parseInt(item.price * 100) }).toFormat(
                      "$0,0"
                    )}
                  </div>
                  <div className="inputs">
                    <input
                      type="button"
                      className="button btn-sell"
                      value="SELL"
                      onClick={() => handleSell(item)}
                      disabled={loading || item.amount === 0}
                    />

                    <input
                      type="number"
                      className="mw-100 p-2 input"
                      value={amount[item.id - 1]}
                      onChange={(e) => handleChange(e.target.value, item)}
                      min="0"
                      disabled={loading}
                    />

                    <input
                      type="button"
                      className="button btn-buy"
                      value="BUY"
                      onClick={() => handleBuy(item)}
                      disabled={loading || money < item.price}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      }
      {money === 100000000000 ? (
        ""
      ) : (
        <div className="container bg-color mt-2 mb-2">
          <div className="col-12 text-center mt-3 receipt">Your Receipt</div>
          {items.map((item) => {
            return item.amount > 0 ? (
              <div className="receipt-items" key={nanoid()}>
                <div className="receipt-name">{item.name}</div>
                <div className="receipt-amount">x{millify(item.amount)}</div>
                <div className="receipt-cost">
                  ${millify(item.price * item.amount)}
                </div>
              </div>
            ) : (
              ""
            );
          })}
          <div className="receipt-total name">
            <span>TOTAL</span>{" "}
            <div className="total-money">
              {Dinero({ amount: parseInt(total * 100) }).toFormat("$0,0")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
