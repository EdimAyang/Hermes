import Navbar from "../../components/Constants/Navbar";
import Footer from "../../components/Constants/Footer";
import { useState } from "react";
// import Cart from "../../pages/cart/Cart"
import "../menu/Menu.css"

// export  function data(items) {
  // console.log(items)
  // return (
    // <div>
        {/* <Cart Orders={items}/> */}
    {/* </div> */}
  // )
// }



function Menu(props) {
  const {menuData}=props;
  const sampleData =[...menuData];
  const [val , setVal] = useState("");
  const [items , setItems] = useState([ ])

  const buttonClick = function(){
    
   setVal("")
  };

  const changeValue = function(e){
    setVal(e.target.value)
  };

  // const orderBtn = function(){
    // sampleData.filter((items, index )=>{
      // console.log("item",items);
      //  return items.id == index ? items : null
    // })
  // };
  // console.log(orderBtn);

  const orderBtn = (m)=>{
    
  setItems(m)

  return items
  }

  return (
    <div className="Menu_container">
      <Navbar />
        <div className="Menu_Adverts">
            <h1>OUR MENU!!</h1>
        </div>
        <section className="menu_search">
          <input type="text" placeholder="Search..." value={val} onChange={changeValue} />
          <button className="btn_search" onClick={buttonClick}>search</button>
        </section>
        <section className="Menu_Lists active">
        {
        sampleData.filter(((item) =>{
           return val.toLowerCase() === "" ? item : item.title.toLowerCase().includes(val)
    
        })).map((m)=> (
          <div key={m.id} className="menu">
          <div className="menu_img">
          <img src={m.image} alt="food images"/>
          </div>
            <button className="btn" onClick={()=>orderBtn(m)}>
              ORDER
            </button>
          </div>
        ))}
        </section>
        <section className="OrderContainer">
        <button className="btn2">Back</button>
        <div className="order_img">
            <h2>Your Order</h2>
            <img src={items.image} alt="orderimg" />
        </div>
        <div className="order_discription">
            <h3>Order Details</h3>
            <ul>
              <li>Name: {items.title}</li>
              <li>Price: {items.price}</li>
              <li>Rating: {items.rating}</li>
              <li>Nutrition: {items.nutrition}</li>
            </ul>
            <button className="btn1">Proceed</button>
    </div>
    </section>
      <Footer />
    </div>
  )
}

export default Menu
