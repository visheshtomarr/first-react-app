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
        {/* Here, we are passing concrete values with the 'background' prop. */}
        <ProductCard 
        width="96px"
        height="96px" 
        product={product} 
        background="darkolivegreen" />

        <ProductCard
        width="64px"
        height="64px"
        product={product} />
        
        <ProductCard 
        width="128px"
        height="128px"
        product={product} 
        background="peru" />
      </ProductList>
      
    </div>
  );
}

export default App;
