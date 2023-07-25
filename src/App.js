import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="btc-price">
          <p>Bitcoin</p>
          <symbol>BTC</symbol>
          <div>$30,134.72</div>
        </div>
        <div className="eth-price">
          <p>Ethereum</p>
          <symbol>ETH</symbol>
          <div>$1985.69</div>
        </div>
        <div className="sol-price">
          <p>Solana</p>
          <symbol>SOL</symbol>
          <div>$29.42</div>
        </div>
        <div className="rightside">
          <div className="quote">
            <blockquote>
              “Bull Markets Make You Money. Bear Markets Make You Rich.”
            </blockquote>
            <p className="quote-description">
              Take profits in bull markets. Accumulate aggressively in bear
              markets.
            </p>
          </div>
          <div className="pfp">
            <img src="blockron033.png" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
