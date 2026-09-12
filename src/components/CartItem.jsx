import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";

import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Shopping Cart</h1>
        <p>Your cart is currently empty.</p>

        <Link to="/plants" className="continue-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-image"
                />

                <div className="cart-details">
                  <h2>{item.name}</h2>

                  <p>
                    Unit Price: ₹{item.price}
                  </p>

                  <p>
                    Item Total: ₹{itemTotal}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-summary">
          <h2>Cart Summary</h2>

          <p>
            Total Items:{" "}
            {cartItems.reduce(
              (total, item) => total + item.quantity,
              0
            )}
          </p>

          <h2>Total: ₹{totalAmount}</h2>

          <button
            className="checkout-btn"
            onClick={() =>
              alert("Checkout Coming Soon!")
            }
          >
            Checkout
          </button>

          <Link
            to="/plants"
            className="continue-btn"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartItem;