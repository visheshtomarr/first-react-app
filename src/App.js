import { useState } from 'react';
import { Fragment } from 'react';
import styles from './App.module.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import { ProductFilter } from './components/ProductFilter';

function App() {
  // Creating a 'products' prop which will be passed into our children components.
  const products = [
    {
      id: 1,
      imageSrc: "Images/iphone.png",
      title: "Iphone 15 pro",
      specification: [
          "A17 Pro chip with 6-core GPU",
          "3x or 5x telephoto camera",
          "Up to 29 hours video playback"
      ],
      price: 999,
      stockCount: 10,
  },
    {
      id: 2,
      imageSrc: "Images/airpods.png",
      title: "Airpods Pro 2",
      specification: [
          "Active noise cancellation",
          "Dust, sweat and water resistant",
          "Up to 6 hours of listening"
      ],
      price: 249,
      stockCount: 0,
  },
  {
    id: 3,
    imageSrc: "Images/apple-watch.png",
    title: "Apple watch 9",
    specification: [
        "41mm or 45mm case size",
        "Always-on Retina display",
        "Up to 18 hours on normal usage"
    ],
    price: 399,
    stockCount: 8,
  },
  ];

  // State to filter products based on price.
  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 999,
    },
    other: "other value"
  });

  // State to set favourites.
  const [favourites, setFavourites] = useState([]);

  // Function to handle favourite's state.
  function handleFavourite(productId) {
    if (favourites.includes(productId)){
      // This will fetch all the previous favourites and remove the one which has 'productId'.
      setFavourites((prevFavourites) => prevFavourites.filter(id => id !== productId));
    }
    else {
      // This will fetch all the previous favourites and add the one which has 'productId'. 
      setFavourites((prevFavourites) => [...prevFavourites, productId]);
    }
  }

  // Function to handle the nested filter state.
  function handleFilter(key, value) {
    setFilters((prevFilters) => ({
      // Unpacks the filters' object.
      ...prevFilters,
      price: {
        ...prevFilters.price,
        [key]: value
      },
    }));
  }

  // Function to handle click on purchase button.
  // We will pass this event handler as a prop to the children components.
  function handlePurchase(product) {
    alert(`You have clicked on ${product.title} which costs $${product.price}`)
  }

  return (
    <div className={styles.App}>
      <ProductList>
        {/* Using a map to display the 'products' array elements. */}
        {/* Every item in list is required to have a key used for react to uniquely identify a list item.  */}
        {products.map(product => 
          <ProductCard 
            key={product.title} 
            product={product} 
            isFavourite={favourites.includes(product.id)}
            onPurchase={handlePurchase}
            onFavourite={handleFavourite} />
        )}
      </ProductList>
      
      {/* If we need to filter the products which costs less than 500, we will use '.filter' method on products. */}
      <h2>Products filtered by price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter} />
        {/* Filter product based on max/min price. */}
        {products.filter(({ price }) => (price >=  filters.price.min && price <= filters.price.max)).map(({ title, price }) => (
          // Here, we want our elements to have a key prop so, we are using the 'Fragment' syntax.
          <Fragment key={title}>
            <p className={styles.ListTitle}>
              {title} costs ${price}
            </p>
            <hr className={styles.ListDivider} />
          </Fragment>
        ))}
    </div>
  );
}

export default App;
