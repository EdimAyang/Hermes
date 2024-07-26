
import "./cart.css"
export default function Cart() {
  return (
    <div>
      <section className="OrderContainer">
              <button className="btn2">Back</button>
              <div className="order_img">
                  <h2>Your Order</h2>
                  <img src="/src/assets/food-8114889_640.jpg" alt="orderimg" />
              </div>
              <div className="order_discription">
                  <h3>Order Details</h3>
                  <ul>
                    <li>Name: {}</li>
                    <li>Price: {}</li>
                    <li>Rating: {}</li>
                    <li>Nutrition: {}</li>
                  </ul>
                  <button className="btn1">Proceed</button>
          </div>
      </section>
    </div>
  )
}
