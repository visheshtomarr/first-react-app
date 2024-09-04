// Styles used in this component.
import styles from "./ProductList.module.css"

export function ProductList(props) {
    return (
        // This is the syntax of an empty 'Fragment' component. It provides us a parent element 
        // but is not rendered in the HTML.
        <>
            <h2>Products</h2>
            <div className={styles.List}>{props.children}</div>
        </>
    )
}