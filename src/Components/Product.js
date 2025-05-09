//Use Event Handling
function Product({ product, onAdd }) {
    return (
      <div>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </div>
    );
  }
  export default Product;
