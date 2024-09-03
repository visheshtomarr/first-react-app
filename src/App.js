import './App.css';

// Creating a react component for our application.
// JSX follows the 'Pascal-case' naming convention.
function ProductCard() {
  return (
    <article>
      <h2>Iphone 15 Pro</h2>
      <img
        src='Images/iphone.png'
        alt='iphone 15 pro'
        width='128px'
        height='128px'
      />
      <p>Specification:</p>
      <ul>
        <li>A17 Pro chip with 6-core GPU</li>
        <li>3x or 5x telephoto camera</li>
        <li>Up to 29 hours video playback</li>
      </ul>
      <button>Buy (for $999)</button>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <ProductCard />
    </div>
  );
}

export default App;
