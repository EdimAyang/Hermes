import Navbar from "../../components/Constants/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Constants/Footer";
import { useState } from "react";
import "../menu/Menu.css"

function Menu({menuData}) {
  const sampleData =[...menuData];
  const [val , setVal] = useState("");


  const changeValue = function(e){
    setVal(e.target.value)
  };

  return (
    <div className="Menu_container">
      <Navbar />
        <div className="Menu_Adverts">
            <h1>OUR MENU!!</h1>
        </div>
        <section className="menu_search">
          <input type="text" placeholder="Search..." value={val} onChange={changeValue} />
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
           <Link to={`/cart/${m.id}`} ><button className="btn_menu">ORDER</button></Link>
          </div>
        ))}
        </section>
      <Footer />
    </div>
  )
}

export default Menu
