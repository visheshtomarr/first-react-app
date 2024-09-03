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
        // This '...restProps' unpack all the non-mentioned props.
        ...restProps 
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
          {...restProps}
        />
        <p>Specification:</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>{product.specification[0]}</li>
          <li>{product.specification[1]}</li>
          <li>{product.specification[2]}</li>
        </ul>
        <button onClick={() => onPurchase(product)}>Buy (for ${product.price})</button>
      </article>
    );
}