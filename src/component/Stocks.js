import React from "react";
import '../component/style.css';
import { stockData } from "../component/data";


export const Stocks = () => {
  return (
    <>
      <div className="stock-container">
        <h1>Welcome to Stock Tracker</h1>
      {stockData.map((data, key) => {
          return (
            <div key={key}>
              {data.company + data.ticker+
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
            </div>
          );
        })}

      </div>
    </>
  );
};


const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Your Stock Tracker</h2>
      </header>
    );
  };