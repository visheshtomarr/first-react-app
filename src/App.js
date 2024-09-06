import { useState } from 'react';
import { Fragment } from 'react';
import styles from './App.module.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import { ProductFilter } from './components/ProductFilter';
import { products as productsData } from './data/Products';

function App() {
  // State to access and change products stock count.
  const [products, setProducts] = useState(productsData);

  // State to filter products based on price.
  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 999,
    },
    other: "other value",
  });

  // State to set favourites.
  const [favourites, setFavourites] = useState([]);

  // Function to handle click on purchase button.
  // We will pass this event handler as a prop to the children components.
  function handlePurchase(productId, stockCount) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, stockCount } : product
      )
    );
  }

  // Function to handle the nested filter state.
  function handleFilter(key, value) {
    setFilters((prevFilters) => ({
      // Unpacks the filters' object.
      ...prevFilters,
      price: {
        ...prevFilters.price,
        [key]: value,
      },
    }));
  }

  // Function to handle favourite's state.
  function handleFavourite(productId) {
    if (favourites.includes(productId)) {
      // This will fetch all the previous favourites and remove the one which has 'productId'.
      setFavourites((prevFavourites) =>
        prevFavourites.filter((id) => id !== productId)
      );
    } else {
      // This will fetch all the previous favourites and add the one which has 'productId'.
      setFavourites((prevFavourites) => [...prevFavourites, productId]);
    }
  }

  return (
    <div className={styles.App}>
      <ProductList>
        {/* Using a map to display the 'products' array elements. */}
        {/* Every item in list is required to have a key used for react to uniquely identify a list item.  */}
        {products.map((product) => (
          <ProductCard
            key={product.title}
            product={product}
            isFavourite={favourites.includes(product.id)}
            onPurchase={handlePurchase}
            onFavourite={handleFavourite}
          />
        ))}
      </ProductList>

      {/* If we need to filter the products which costs less than 500, we will use '.filter' method on products. */}
      <h2>Products filtered by price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter} />
      {/* Filter product based on max/min price. */}
      {products
        .filter(
          ({ price }) =>
            price >= filters.price.min && price <= filters.price.max
        )
        .map(({ title, price }) => (
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
