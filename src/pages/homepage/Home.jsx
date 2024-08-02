
import"./Home.css"
import Footer from "../../components/Constants/Footer";
import Navbar from "../../components/Constants/Navbar"
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Home({menuData}) {
 const Data = [...menuData]
 const [imagePerPage]=useState(4);
 const [currentPage]=useState(2);
 const lastImageIndex = currentPage * imagePerPage ;
 const firstImageIndex = lastImageIndex - imagePerPage;
 const visibleImages = Data.slice(firstImageIndex, lastImageIndex)
  return (
    <div className="Home_body">
        <Navbar />
        <section className="welcome_section">
        
        </section>

        <section className="Advert_card">
            <div className="Adverts_texts">
                <h3>
                    Experence The Fastest Meal Delivery !!!
                </h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos assumenda provident .</p>
            </div>
            <div className="Advert_img">

            </div>
        </section>
        <div className="seperator"></div>
        <section className="categories">
            <div className="category_texts">
                <h2>Categories</h2>
                <Link to="/menu">view more</Link>
            </div>
            <div  className="category_list" >
            {visibleImages.map(item =>{
              return(
                <>
                    <img src={item.image}  alt="images"/>
                </>
                )
            })}
            </div>
        </section>

        <div className="seperator"></div>

        <section className="popular">
            <div className="popular_text">
                <h2>popular</h2>
            </div>
            <div className="popular1">
                <div className="popular_img1">
                <div className="popular_text1">
                    <h3>Pizza</h3>
                    <p>rating: {1}</p>
                </div>
                </div>
            </div>
            <div className="popular2">
                <div className="popular_img2">
                    <div  className="popular_text2">
                        <h3>Pizza</h3>
                        <p>rating: {2}</p>
                    </div>
                </div>
            </div>
            <div className="popular3">
                <div className="popular_img3">
                <div  className="popular_text3">
                    <h3>Pizza</h3>
                    <p>rating: {3}</p>
                </div>
                </div>
            </div>
        </section>
        <section className="recent-Order">
            <div></div>
        </section>

        <div className="seperator"></div>

        <section className="recent-orders">
            <div className="recent-orders_texts">
                <h2>Recent orders</h2>
                <a href="#">view more</a>
            </div>
            <div className="recent-orders-card">

            </div>
            <div className="recent-orders-card">

            </div>
            <div className="recent-orders-card_img">

            </div>
        </section>
        <Footer />
    </div>
  )
}
