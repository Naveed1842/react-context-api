const Cart = (props) => {
    return (
        <div className="customDiv">
            <h3>Cart Component</h3>
            <hr />
            <ul>
                {props.cart.map((product, index) => {
                    return <li key={index}>{product.pName} </li>
                })}
            </ul>
        </div>
    )
}
export default Cart

const CartList = (props) => {
  console.log(props);
    return (
        <div className="customDiv">
            <h2>Cart Demo</h2>
            <hr />
            <ul>
                {props.cart.map((product, index) => {
                    return <li key={index}>{product.pName}</li>
                })}
            </ul>
        </div>
    )
}
