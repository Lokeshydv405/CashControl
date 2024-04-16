import React, { useState } from 'react';
import axios from 'axios';

const StockPrices = () => {
  const [stockNames, setStockNames] = useState('');
  const [stockData, setStockData] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = 'YOUR_ALPHA_VANTAGE_API_KEY';

  const searchStocks = async () => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${stockNames}&apikey=${apiKey}`
      );

      const data = response.data['Stock Quotes'];
      setStockData(data);
      setError(null);
    } catch (error) {
      setError('Error fetching stock data. Please try again.');
      console.error(error);
    }
  };

  const handleSearch = () => {
    searchStocks();
  };

  const handleStockNamesChange = (e) => {
    setStockNames(e.target.value);
  };

  return (
    <div>
      <h2>Stock Prices</h2>
      <div>
        <label>Stock Names (separated by commas):</label>
        <input type="text" value={stockNames} onChange={handleStockNamesChange} />
      </div>
      <button onClick={handleSearch}>Search</button>
      {error && <div>{error}</div>}
      {stockData.length > 0 && (
        <div>
          <h3>Stock Data</h3>
          <ul>
            {stockData.map((stock, index) => (
              <li key={index}>
                <p>Symbol: {stock['1. symbol']}</p>
                <p>Price: {stock['2. price']}</p>
                <p>Change: {stock['4. change']}</p>
                <p>Change Percent: {stock['10. change percent']}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StockPrices;
