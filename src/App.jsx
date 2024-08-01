import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/homepage/Home";
import Contact from "../src/pages/contact/Contact";
import Cart from "../src/pages/cart/Cart";
import Menu from "../src/pages/menu/Menu";
import Login from "../src/pages/login/Login";
import './App.css';
function App() {
const menuSampleData =[

  {
		"id":0,
		"title":"Pizza",
		"image":"/assets/fried-chicken-6550521_640.jpg",
		"price":"1,500$",
		"rating":"2",
		"nutrition":"carbohydrate and fat"
	},
	{
		"id":1,
		"title":"Rice", 
		"image":"/assets/fried-rice-6297406_640.jpg",
		"price":"2000$",
		"rating":"8",
		"nutrition":["carbohydrate"]
	},
	{
		"id":2,
		"title":"burger", 
		"image":"/assets/pizza-3203417_640.jpg",
		"rating":"6",
		"price":"120$",
		"nutrition":"fat and protain"
	},
	{
		"id":3,
		"title":"burger", 
		"image":"/assets/pizza-3203417_640.jpg",
		"rating":"6",
		"price":"120$",
		"nutrition":["fat", "protain"]
	},
	{
		"id":4,
		"title":"burger", 
		"image":"/assets/pizza-3203417_640.jpg",
		"rating":"6",
		"price":"120$",
		"nutrition":["fat", "protain"]
	},
	{
		"id":5,
		"title":"Salads", 
		"image":"/assets/burger-8869971_640.jpg",
		"rating":"3",
		"price":"300$",
		"nutrition":"vitamin A and protain and vitamin C"
	},
	{
		"id":6,
		"title":"Chicken and yamchips", 
		"image":"/assets/food-8114889_640.jpg",
		"rating":"8",
		"price":"500$",
		"nutrition":["protain", "carbohydrate"]
	},
	{
		"id":7,
		"title":"barbeque beef", 
		"image":"/assets/fried-chicken-6550521_640.jpg",
		"rating":"4",
		"price":"90$",
		"nutrition":["Protain"]
	}

];

  return(
    <div className="App">
		<Router>
				<Routes>
					<Route path="/"  element={<Login/>} />
					<Route path="/homepage"  element={<Home menuData={menuSampleData}/>} />
					<Route path="/menu"  element={<Menu menuData={menuSampleData} />} />
					<Route path="/cart/:id"  element={<Cart menuData={menuSampleData}/>} />
					<Route path="/contact"  element={<Contact />} />
				</Routes>
		</Router>
    </div>
  )
}

export default App
