import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./cart.css"
export default function Cart(props) {
  const {menuData}=props
  const Data = [... menuData]
  const params = useParams()
  //getting the filtered order from database using matching id
  return (
    <div>
              {
               Data.filter((order) => order.id === +params.id).map((ord => {
                return(
                    <section className="OrderContainer">
                      <Link to="/menu"><button className="btn2">Back</button></Link>
                      <div className="order_img">
                        <h2>Your Order</h2>
                        <img src={ord.image} alt="orderimg" />
                      </div>
                        <div className="order_discription">
                            <h3> Details</h3>
                            <ul key={ord.id}>
                              <li>Name: {ord.title}</li>
                              <li>Price: {ord.price}</li>
                              <li>Rating: {ord.rating}</li>
                              <li>Nutrition: {ord.nutrition}</li>
                            </ul>
                            <Link to="/menu"><button className="btn1">Proceed</button></Link>
                        </div>
                    </section>
                )
               }))
              }
     
    </div>
  )
}
