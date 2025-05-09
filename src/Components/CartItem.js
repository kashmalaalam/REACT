function CartItem({ item, index, onRemove }) {
    return (
      <div>
        <p>{item.name} - ${item.price}</p>
        <button onClick={() => onRemove(index)}>Remove</button>
      </div>
    );
  }
  
  export default CartItem;
  