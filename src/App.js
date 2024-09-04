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
        {/* Using a map to display the 'products' array elements. */}
        {/* Every item in list is required to have a key used for react to uniquely identify a list item.  */}
        {products.map(product => 
          <ProductCard key={product.title} product={product} onPurchase={handlePurchase} />
        )}
      </ProductList>
      
      {/* If we need to filter the products which costs less than 500, we will use '.filter' method on products. */}
      <h2>Products which costs up to $500</h2>
      <ul>
        {products.filter(({ price }) => price < 500).map(({ title, price }) => (
          <li>
            {title} costs ${price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
