
import"./Home.css"
import Footer from "../../components/Constants/Footer";
import Navbar from "../../components/Constants/Navbar"
import {  useEffect } from "react";
import Contact from "../contact/Contact";
import Menu from "../menu/Menu";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
 useEffect(()=>{
    AOS.init({duration: 1000})
 },[])
  return (
    <>
    <div id="home">
        <Navbar />
        <section className="Advert_card" data-aos="fade-up">
            <h2>Super Fast Food Delivery</h2>
        </section>
         < Menu/>
        < Contact/>
        <Footer />
    </div>
    </>
  )
}
