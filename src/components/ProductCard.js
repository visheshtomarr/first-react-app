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

    return (
      <article style={{
        background,
        width: "100%",
        border: "1px solid white",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center"
      }}>
        <h2>{product.title}</h2>
        <img
          src={product.imageSrc}
          alt={product.title}
          width={128}
          height={128}
        />
        <p>Specification:</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {/* It is not recommended to use 'index' as a key prop when we have some elements inside array which 
          can be deleted in the future. But, in our case we won't be deleting any product so here we can use 'index'.*/}
          {product.specification.map((spec, index) => 
            <li key={index}>{spec}</li>
          )}
        </ul>
        <button onClick={() => onPurchase(product)}>Buy (for ${product.price})</button>
      </article>
    );
}