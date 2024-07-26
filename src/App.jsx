import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "..//src//pages//homepage//Home";
import Contact from "..//src/pages//contact/Contact";
import Cart from "..//src/pages//cart//Cart";
import Menu from "..//src//pages//menu//Menu";
import './App.css';

function App() {
const menuSampleData =[

  {
		"id":1,
		"title":"Pizza",
		"image":"../src/assets/burger-7419420_640.jpg",
		"price":"1,500$",
		"rating":"2",
		"nutrition":"carbohydrate and fat"
	},
	{
		"id":2,
		"title":"Rice", 
		"image":"..//dist//assets//fried-rice-6297406_640.jpg",
		"price":"2000$",
		"rating":"8",
		"nutrition":["carbohydrate"]
	},
	{
		"id":3,
		"title":"burger", 
		"image":"..//dist/assets//pizza-3203417_640.jpg",
		"rating":"6",
		"price":"120$",
		"nutrition":"fat and protain"
	},
	{
		"id":4,
		"title":"burger", 
		"image":"..//src//assets//pizza-3203417_640.jpg",
		"rating":"6",
		"price":"120$",
		"nutrition":["fat", "protain"]
	},
	{
		"id":5,
		"title":"burger", 
		"image":"..//dist//assets//pizza-3203417_640-DbB0fULN.jpg",
		"rating":"6",
		"price":"120$",
		"nutrition":["fat", "protain"]
	},
	{
		"id":6,
		"title":"Salads", 
		"image":"..//src/assets//burger-8869971_640.jpg",
		"rating":"3",
		"price":"300$",
		"nutrition":"vitamin A and protain and vitamin C"
	},
	{
		"id":7,
		"title":"Chicken and yamchips", 
		"image":"..//src/assets//food-8114889_640.jpg",
		"rating":"8",
		"price":"500$",
		"nutrition":["protain", "carbohydrate"]
	},
	{
		"id":8,
		"title":"barbeque beef", 
		"image":"..//src/assets//fried-chicken-6550521_640.jpg",
		"rating":"4",
		"price":"90$",
		"nutrition":["Protain"]
	}

];

  return(
    <div className="App">
		<Router>
				<Routes>
					<Route path="/"  element={<Home menuData={menuSampleData} />} />
					<Route path="/menu"  element={<Menu menuData={menuSampleData} />} />
					<Route path="/cart"  element={<Cart />} />
					<Route path="/contact"  element={<Contact />} />
				</Routes>
		</Router>
    </div>
  )
}

export default App
