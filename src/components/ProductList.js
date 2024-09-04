// Styles used in this component.
const styles = {
    List: {
        display: "flex", 
        gap: "16px", 
        marginBottom: "36px"
    }
};

export function ProductList(props) {
    return (
        // This is the syntax of an empty 'Fragment' component. It provides us a parent element 
        // but is not rendered in the HTML.
        <>
            <h2>Products</h2>
            <div style={styles.List}>{props.children}</div>
        </>
    )
}