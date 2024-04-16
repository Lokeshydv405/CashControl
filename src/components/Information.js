import React, { useState } from 'react';
import "../App.css";

// import './Information.css';

function Information() {
    const [showStocks, setShowStocks] = useState(true);

    const toggleInfo = () => {
        setShowStocks(!showStocks);
    };

    return (
        <div className="info"  style={{margin: '80px 0px'}}>
            <button onClick={toggleInfo}>
                {showStocks ? 'Switch to Trading Info' : 'Switch to Stocks Info'}
            </button>

            <div className="info">
                {showStocks ? (
                    <div className='info'>
                        <h1>Stock Market Basics</h1> 
   <p>All companies need money to run their business. Sometimes the profit acquired from selling goods or services is not sufficient to meet the working capital requirements. And so, companies invite normal people like you and me to put some money into their company so that they can run it efficiently and in return, investors get a share of whatever profit they make.</p>
   <p>Understanding this is the first step towards understanding stock market basics. Let’s learn about this in detail.</p>
   <h2>What are Stocks?</h2>
   <p>Stocks are simply an investment method to build wealth. When you invest in the stock of a company, it means you own a share in the company that issued the stock</p>
   <p>Stock investment is a way to invest in some of the most successful companies.</p>
   <p>Also, there are different types of stocks available in the market to invest/trade-in. These stocks are categorised based on the following criteria:</p>
   <ul type="square">
    <li>Market Capitalization</li>
    <li>Ownership</li>
    <li>Fundamentals</li>
    <li>Price Volatility</li>
    <li>Profit Sharing</li>
    <li>Economic trends</li>
   </ul>
   <h2>What is share market?</h2>
   <p>People often wonder what is stock market and share market, and often use it interchangeably.</p>
   <p>A stock market is similar to a share market. A share market is where the shares are issued or traded in. The primary difference between the two is that the stock market lets an individual trade in bonds, mutual funds, derivatives, shares of a company, etc. On the other hand, a share market only allows the trading of shares.</p>
   <h2>How Does The Stock Market?</h2>
   <p>Companies raise money on the stock market by selling ownership stakes to investors. These equity stakes are known as shares of stock. </p>
   <p>By listing shares for sale on the stock exchanges that make up the stock market, companies get access to the capital they need to operate and expand their businesses without having to take on debt. Investors benefit by exchanging their money for shares on the stock market.</p>
   <p>As companies put that money to grow and expand their businesses, it profits the investors as their shares of stock become more valuable over time, leading to capital gains. In addition, companies pay dividends to their shareholders as their profits grow.</p>
   <p>The performances of individual stocks vary widely over time but taken as a whole, the stock market has historically rewarded investors with average annual returns of around 10%, making it one of the most reliable ways of growing your money.</p>
   <h2>Understanding the Stock Market Basics - Important Terms</h2>
   <p>Here is a list of commonly used terms when talking about the stock market. You can use this as a glossary to look for any time you want to learn.
    </p>
    <table>
        <thead>
            <tr>
                <th>Term</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sensex</td>
                <td>Sensex is a collection of the top 30 stocks listed on the BSE by way of market capitalisation. </td>
            </tr>
            <tr>
                <td>SEBI</td>
                <td>The securities and Exchange Board of India (Sebi) is the securities market regulator to oversee any fraudulent transactions and activities made by any of the parties: companies, investors, traders, brokers and the like.</td>
            </tr>
            <tr>
                <td>Demat</td>
                <td>Demat, or dematerialised account, is a form of an online portfolio that holds a customer’s shares and other securities in an electronic (dematerialised) format.</td>
            </tr>
            <tr>
                <td>Trading</td>
                <td>It is the process of buying or selling shares in a company. </td>
            </tr>
            <tr>
                <td>Stock Index</td>
                <td>A stock index or stock market index is a statistical source that measures financial market fluctuations. They are performance indicators that indicate the performance of a certain market segment or the market as a whole.</td>
            </tr>
            <tr>
                <td>Portfolio</td>
                <td>It is a collection of a wide range of assets that are owned by investors. A portfolio can also include valuables ranging from gold, stocks, funds, derivatives, property, cash equivalents, bonds, etc.</td>
            </tr>
            <tr>
                <td>Bull Market</td>
                <td>In a bull market, companies tend to generate more revenue, and as the economy grows, consumers are more likely to spend.</td>
            </tr>
            <tr>
                <td>Bear Market</td>
                <td>Bear markets refer to a slowdown in the economy, which may make consumers less likely to spend and, in turn, lower the GDP.</td>
            </tr>
            <tr>
                <td>Nifty 50</td>
                <td>Nifty 50 is a collection of the top 50 companies listed on the National Stock Exchange (NSE). </td>
            </tr>
            <tr>
                <td>Stock market broker</td>
                <td>A stock broker is an investment advisor who executes transactions such as the buying and selling of stocks on behalf of their clients.</td>
            </tr>
            <tr>
                <td>Bid price</td>
                <td>The bid price is the highest price a buyer will pay to buy a specified number of shares of a stock at any given time.</td>
            </tr>
            <tr>
                <td>Ask price</td>
                <td>The ask price in the stock market refers to the lowest price at which a seller will sell the stock.</td>
            </tr>
            <tr>
                <td>IPO</td>
                <td>Initial Public Offer (IPO) is the selling of securities to the public in the primary market. It is the largest source of funds with long or indefinite maturity for the company.</td>
            </tr>
            <tr>
                <td>Equity</td>
                <td>Equity is the value that would be received by the shareholder if all of the company’s assets were liquidated and all of the company's debts were paid off.</td>
            </tr>
            <tr>
                <td>Dividend</td>
                <td>A dividend refers to cash or reward that a company provides to its shareholders. It can be issued in various forms, such as cash payment, stocks or any other form. </td>
            </tr>
            <tr>
                <td>BSE</td>
                <td>Bombay Stock Exchange (BSE) is the largest and first securities exchange market in India. It was established in 1875 as the Native Share and Stock Brokers' Association. It is also the first stock exchange in India and provides an equities trading platform for small-and-medium enterprises.</td>
            </tr>
            <tr>
                <td>NSE</td>
                <td>National Stock Exchange was the first to implement screen-based or electronic trading in India. It is the fourth largest stock exchange in the world in terms of equity trading volume, as per the World Federation of Exchanges (WFE).</td>
            </tr>
            <tr>
                <td>Call and Put option</td>
                <td>The call option gives the investor the right to purchase the underlying security, while the put option gives the investor the right to sell shares of the underlying security. Both opinions let the investors profit from movements in a stock's price.</td>
            </tr>
            <tr>
                <td>Types of stock market</td>
                <td>There are 2 types of stock markets:

                    <p>Primary Market:  It creates securities and acts as a platform where firms float their new stock options and bonds for the general public to acquire.</p>
                    <p>Secondary Market: Here, investors trade in securities without involving the companies who issued them in the first place with the help of brokers.</p></td>
            </tr>
            <tr>
                <td>Ask and Close</td>
                <td>The term ‘ask’ in the stock market refers to the lowest price at which a seller will sell the stock. ‘Closing price’ generally refers to the last price at which a stock trades during a regular trading session.</td>
            </tr>
            <tr>
                <td>Moving Average</td>
                <td>It is a stock indicator commonly used for technical analysis to smoothen the price data by creating a constantly updated average price. A rising moving average indicates that the security is in an uptrend, while a declining moving average indicates a downtrend.</td>
            </tr>
        </tbody>
    </table>

                    </div>
                ) : (
                    <div className='info'>
                           <h1>STOCK TRADING</h1>
    <h2>Meaning of Trading</h2>
    <p>Trading is essentially the exchange of goods and services between two entities. In this context, the entities are investors/traders who are exchanging stocks of different companies. Stock trading takes place in the stock market. With online trading and investing, stock markets have become accessible to a larger section of people</p>
    <h2>History of Trading</h2>
    <p>Trade has existed for as long as human civilization, i.e., the agricultural revolution. The form of trading, however, has varied across different societies. Primarily due to isolated human communities, which did not allow the unification into a single system. In the past, however, a form of trading that was prevalent across different societies was the barter system, where services and goods were traded in exchange for other services and goods. </p>
    <p>However, the barter system was found inconvenient given the lack of any basic standard for measuring the value of products. This inconvenience forged the way for money, which acted as a standard against which the values of all products are measured. This invention triggered a chain of economic and financial developments such as the introduction of the credit facility, share trading, etc. </p>
    <p><b>Stock trading</b>came into existence with the formation of joint-stock companies in Europe and played an instrumental role in European imperialism. Informal stock markets started mushrooming in various European cities. The first joint-stock company to publically trade its shares was the Dutch East India Company which released its shares through the Amsterdam Stock Exchange. </p>
    <p>After the success of joint-stock companies in fostering economic development along with geographical expansion, those were made a mainstay of the financial world. The first exchange for online trading in India and Asia was the Bombay Stock Exchange which was established in 1875. BSE, along with the National Stock Exchange in India, are the two main houses where stock market trading takes place</p>
    <h2>Types of Trading in Stock Market</h2>
    <p>Primarily, there are five types of share trading. These are – </p>
    <ol type="1">
        <li><b>Day Trading</b>
        <p>This form of trade involves purchasing and selling stocks in a single day. A single day in stock market terms means 9:15 am to 3:30 pm on a weekday (barring market holidays). In the case of day trading, individuals hold stocks for a few minutes or hours</p><p>A trader involved in such trade needs to close his/her transactions prior to the day’s market closure. It is popular for capitalizing on small-scale fluctuations in NAV of stocks. </p><p>Day trading requires proficiency in market matters, a thorough understanding of market volatility, and keen sense regarding the up and down in stock values. Therefore, it is performed mostly by experienced investors or traders. </p></li>
        <li><b>Scalping</b><p>It is also known as micro-trading. Scalping and day-trading are both subsets of intraday trading. Scalping involves reaping small profits repeatedly ranging from a dozen to a hundred profits in a single market day.</p><p>However, every transaction does not yield profits, and in some cases a trader’s gross losses might exceed the gains. The holding period of securities, in this case, is shorter compared to day-trading, i.e. individuals hold stocks spanning a maximum of a few minutes.</p><p>This feature allows for the frequency of transactions. Similar to day-trading, scalping requires market experience, proficiency, awareness of market fluctuations, and prompt transactions.</p></li>
        <li><b>Swing Trading</b><p>This style of stock market trading is used to capitalise on the short-term stock trends and patterns. Swing trading is used to earn gains from stock within a few days of purchasing it; ideally one to seven days. Traders technically analyse the stocks to gauge the movement patterns they are following for proper execution of their investment objectives.</p></li>
        <li><b>Momentum Trading</b><p>In case of momentum trading, a trader exploits a stock’s momentum, i.e. a substantial value movement of stock, either upwards or downwards. A trader tries to capitalise on such momentum by identifying the stocks that are either breaking out or will break out.</p><p>In case of upward momentum, the trader sells the stocks he/she is holding, thus yielding higher than average returns. In case of downward movement, the trader purchases a considerable volume of stocks to sell when its price increases.</p></li>
        <p><em>Example:</em>Mr A holds 7000 shares of S Private Limited at Rs. 50 per share. On 1st April 2019, he sees the NAV of such shares showing upward momentum. He decides to sell 3000 shares at Rs. 60 on the first day. After that, He sells the remaining shares at a uniform rate of Rs. 65.</p><p>Therefore, his overall profit from the transactions is –</p><p>Rs. {(3000 * 60) + (4000 * 65)} – (7000 * 50) or, Rs. 90,000</p>
        <li><b>Position Trading</b><p>Position traders hold securities for months aiming to capitalise on the long-term potential of stocks rather than short-term price movements. This style of trade is ideal for individuals who are not market professionals or regular participants of the market.</p></li>
    </ol>
    <h2>Current Impact of Online Trading</h2>
    <p>The internet has significantly contributed to elevating stock market trading. It has made securities more accessible and convenient to the layman. An individual can now easily trade in the stock market through online trading in India.</p>
    <p>Mutual Funds have also gained significant popularity since the advent of online trading. Individuals can now directly access mutual funds and other securities from a vast reservoir of options available online. Investors can now trade more actively and speculatively, thus, increasing their chances of profitability.</p>

                    </div>
                )}
            </div>
        </div>
    );
}

export default Information;
