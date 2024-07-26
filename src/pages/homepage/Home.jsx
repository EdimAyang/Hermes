
import"./Home.css"
import Footer from "../../components/Constants/Footer";
import Navbar from "../../components/Constants/Navbar"
export default function Home() {

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
                <a href="#">view more</a>
            </div>

            <div className="categories_cards">
                <div className="cards pizza">

                </div>
                <div className="cards burgar"></div>
                <div className="cards chicken"></div>
                <div className="cards fried_rice"></div>
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
