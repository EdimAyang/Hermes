import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserContext from "../../components/contexts/UserContext";
import AOS from "aos";
import "aos/dist/aos.css";
import "./cart.css"
export default function Cart() {
  const{menuSampleData}=useContext(UserContext)
  const Data = [... menuSampleData]
  const params = useParams()
  useEffect(()=>{
    AOS.init({duration: 1000})
 },[])
  //getting the filtered order from database using matching id
  return (
    <div>
              {
               Data.filter((order) => order.id === +params.id).map((ord => {
                return(
                    <section className="OrderContainer" key={ord.id}>
                      <Link to="/homepage"><button className="btn2">Back</button></Link>
                      <div className="order_img" data-aos="fade-up">
                        <h2>Your Order</h2>
                        <img src={ord.image} alt="orderimg" />
                      </div>
                        <div className="order_discription" data-aos="fade-up">
                            <h3> Details</h3>
                            <ul>
                              <li>Name: {ord.title}</li>
                              <li>Price: {ord.price}</li>
                              <li>Rating: {ord.rating}</li>
                              <li>Nutrition: {ord.nutrition}</li>
                            </ul>
                            <Link to="/homepage"><button className="btn1">Proceed</button></Link>
                        </div>
                    </section>
                )
               }))
              }
     
    </div>
  )
}
