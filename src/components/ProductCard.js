import { useState } from "react";
// Styles used in this component.
import styles from "./ProductCard.module.css";

// Creating a react component for our application.
// JSX follows the 'Pascal-case' naming convention.
// JSX -> Syntax extension for JavaScript, is used to write HTML markup inside
// JavaScript functions.
//
// We will export this component to our 'App.js'
// Props acts similarly as attributes in HTML. 
export function ProductCard(
    // We have destructured our 'Prop' and used a default 'background' prop.
    { 
        product, 
        background="slategray",
        // This is the event handler prop that has been passed to this children component.
        onPurchase,
    }) {

    // Functions to display specification of an item when user clicks on show/hide.
    const [showSpecification, setShowSpecification] = useState(false);  
    // Function to reduce the stock count eveytime a user buys an item.
    const [stockCount, setStockCount] = useState(product.stockCount);
    
    function handleClick() {
      setStockCount((prevStockCount) => prevStockCount - 1);
      onPurchase(product)
    }

    function handleBuyTwoItems() {
      setStockCount((prevStockCount) => prevStockCount - 1);  // noOfItems - 1
      setStockCount((prevStockCount) => prevStockCount - 1);  // (noOfItems-1) - 1
      onPurchase(product)
    }

    return (
      <article className={styles.Container} style={ {background} }>
        <h2>{product.title}</h2>
        <img
          src={product.imageSrc}
          alt={product.title}
          width={128}
          height={128}
        />
        <p>Specification: {' '}
          <button onClick={() => setShowSpecification(!showSpecification)}>{showSpecification ? "Hide" : "Show"}</button>
        </p>
        {showSpecification && <ul className={styles.SpecList}>
          {/* It is not recommended to use 'index' as a key prop when we have some elements inside array which 
          can be deleted in the future. But, in our case we won't be deleting any product so here we can use 'index'.*/}
          {product.specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        }
        <Status stockCount={stockCount} />
        {/* if an item's stock count is zero, we do not render 'buy' button for it. */}
        {stockCount > 0 && (
          <>
            <p>Price: ${product.price}</p>
            <button onClick={handleClick}>Buy</button>
          </>
        )}
        {stockCount > 1 && <button onClick={handleBuyTwoItems}>Buy 2</button>} 
      </article>
    );
}

// We will display the stock count of different products using this component.
function Status({ stockCount }) {
  const notAvailableTemplate = (
    <p className={styles.NotAvailableStatus}>Not available</p>
  );

  const availableTemplate = (
    <p className={styles.AvailableStatus}>{stockCount} items available</p>
  );

  return stockCount === 0 ? notAvailableTemplate : availableTemplate ;
}