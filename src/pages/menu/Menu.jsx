// import Navbar from "../../components/Constants/Navbar";
import { Link } from "react-router-dom";
// import Footer from "../../components/Constants/Footer";
import { useState , useEffect} from "react";
import "../menu/Menu.css"
import AOS from "aos";
import "aos/dist/aos.css";
function Menu({menuData}) {
  const sampleData =[...menuData];
  const [val , setVal] = useState("");
  const [menuperpage]=useState(8);
  const [currentPage,setCurrentPage] =useState(1);
  const lastIndex = currentPage * menuperpage;
  const firstIndex = lastIndex - menuperpage ;
  const totalNumberOfPage = Math.ceil(sampleData.length / menuperpage)
  const pages = [...Array(totalNumberOfPage +1).keys()].slice(1);
  const visibleData=sampleData.slice(firstIndex, lastIndex)
 console.log(visibleData)
  useEffect(()=>{
    AOS.init({duration: 1000})
 },[])
  console.log(pages);
  const handlePrev = ()=>{
      if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
      }
  }
  const handleNext = ()=>{
    if(currentPage !== totalNumberOfPage){
      setCurrentPage(currentPage +1)
    }
    };
  const changeValue = function(e){
    setVal(e.target.value)
  };
  console.log(totalNumberOfPage);
  return (
    <div className="Menu_container" id="menu" data-aos="fade-up">
      {/* <Navbar /> */}
        <div className="Menu_Adverts">
            <h1>OUR MENU!!</h1>
        </div>
        <section className="menu_search">
          <input type="text" placeholder="Search..." value={val} onChange={changeValue} />
        </section>

        <div className="pages_btn pages_btn_mobile" >
            <button onClick={handlePrev}> Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
        <section className="Menu_Lists active">
        {
        visibleData.filter(((item) =>{
           return val.toLowerCase() === "" ? item : item.title.toLowerCase().includes(val)
    
        })).map((m)=> (
          <div key={m.id} className="menu" data-aos="fade-up"> 
           <Link to={`/cart/${m.id}`}><img className="image_effect" src={m.image} alt="food images"/> </Link>
          </div>
        ))}
        </section>
        <div className="pages_btn pages_btn_desktop">
            <button onClick={handlePrev}> Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Menu
