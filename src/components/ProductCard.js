// Creating a react component for our application.
// JSX follows the 'Pascal-case' naming convention.
// JSX -> Syntax extension for JavaScript, is used to write HTML markup inside
// JavaScript functions.
//
// We will export this component to our 'App.js'
export function ProductCard() {
    // Creating a 'product' object.
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
      <article style={{
        border: "1px solid white",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center"
      }}>
        <h2>{product.title}</h2>
        <img
          src={product.imageSrc}
          alt={product.title}
          width="128px"
          height="128px"
        />
        <p>Specification:</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>{product.specification[0]}</li>
          <li>{product.specification[1]}</li>
          <li>{product.specification[2]}</li>
        </ul>
        <button>Buy (for ${product.price})</button>
      </article>
    );
}