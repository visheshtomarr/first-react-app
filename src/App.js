import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

function App() {
  // Creating a 'product' prop which will be passed into our components.
  const product = {
    imageSrc: "Images/iphone.png",
    title: "Iphone 15 pro",
    specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x telephoto camera",
        "Up to 29 hours video playback"
    ],
    price: 999,
}
  return (
    <div className="App">
      <ProductList>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </ProductList>
      
    </div>
  );
}

export default App;
