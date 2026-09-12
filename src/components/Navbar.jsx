import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="nav-logo">
        🌿 Paradise Nursery
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;