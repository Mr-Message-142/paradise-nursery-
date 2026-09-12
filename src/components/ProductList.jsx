import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import plants from "../data/plants";
import { Link } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <div>
          <h1>Our Plants</h1>
          <p>
            Discover beautiful plants for your home, office and garden.
          </p>
        </div>

        <Link to="/cart" className="view-cart-btn">
          View Cart
        </Link>
      </div>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section className="category-section" key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {categoryPlants.map((plant) => (
                <div className="product-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />

                  <div className="product-info">
                    <h3>{plant.name}</h3>

                    <p className="description">
                      {plant.description}
                    </p>

                    <p className="price">
                      ₹{plant.price}
                    </p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                      className={
                        isInCart(plant.id)
                          ? "add-btn added"
                          : "add-btn"
                      }
                    >
                      {isInCart(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ProductList;