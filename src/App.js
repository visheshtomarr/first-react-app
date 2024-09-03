import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

function App() {
  // Creating a 'products' prop which will be passed into our children components.
  const products = [
    {
      imageSrc: "Images/iphone.png",
      title: "Iphone 15 pro",
      specification: [
          "A17 Pro chip with 6-core GPU",
          "3x or 5x telephoto camera",
          "Up to 29 hours video playback"
      ],
      price: 999,
  },
    {
      imageSrc: "Images/airpods.png",
      title: "Airpods Pro 2",
      specification: [
          "Active noise cancellation",
          "Dust, sweat and water resistant",
          "Up to 6 hours of listening"
      ],
      price: 249,
  },
  {
    imageSrc: "Images/apple-watch.png",
    title: "Apple watch 9",
    specification: [
        "41mm or 45mm case size",
        "Always-on Retina display",
        "Up to 18 hours of battery life on normal usage"
    ],
    price: 399,
  },
  ]

  // Function to handle click on purchase button.
  // We will pass this event handler as a prop to the children components.
  function handlePurchase(product) {
    alert(`You have clicked on ${product.title} which costs $${product.price}`)
  }

  return (
    <div className="App">
      <ProductList>
        {/* Here, we are passing concrete values with the 'background' prop. */}
        <ProductCard 
        width="96px"
        height="96px" 
        product={products[0]} 
        background="darkolivegreen"
        onPurchase={handlePurchase} />

        <ProductCard
        width="64px"
        height="64px"
        product={products[1]}
        onPurchase={handlePurchase} />
        
        <ProductCard 
        width="128px"
        height="128px"
        product={products[2]} 
        background="peru"
        onPurchase={handlePurchase} />
      </ProductList>
      
    </div>
  );
}

export default App;
