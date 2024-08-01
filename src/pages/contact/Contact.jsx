import "../contact/Contact.css";
import Navbar from "../../components/Constants/Navbar";
import Footer from "../../components/Constants/Footer";
import { useState } from "react";


export default function Contact() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    textArea: "",
  });

const handleChange= (e)=>{
  const name = e.target.name;
  const value = e.target.value;
  setDetails((prevValues)=>{
    return {...prevValues, [name]: value}
  })
};

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(details)
};
  return (
    <form onSubmit={handleSubmit}>
      <Navbar />
          <section className="heading">
              <h2>CONTACT US</h2>
          </section>

          <section className="info_container">
              <h3>CONTACT US</h3>
              <div className=" forms_wrapper">
                <div className="form">

                <div className="names_wrapper">
                  <div className="names">
                    <label>FirstName</label>
                    <input type="text"  name="firstName" className="contacts_inputs" required onChange={handleChange}/>

                    <label>LastName</label>
                    <input type="text" name="lastName" className="contacts_inputs lastName " required onChange={handleChange}/>
                  </div>
                  <div className="number_email">
                    <label>Email</label>
                    <input type="email" name="email" className="contacts_inputs" required onChange={handleChange}/>

                    <label>Phone Number</label>
                    <input type="number" name="number" className="contacts_inputs " required onChange={handleChange}/>
                  </div>
                </div>
                  <textarea className="text_area" name="textArea" onChange={handleChange}>
                      
                  </textarea>
                  <button type="submit" className="submit_form">Send</button>
                </div>

                <div className="info">
                    <div className="info_card">
                      <div>
                        <h4>Email</h4>
                        <p>jackson123@gmail.com</p>
                      </div>
                    </div>
                    <div className="info_card">
                     <div>
                        <h4>Call</h4>
                        <p>09134794977</p>
                      </div>
                    </div>
                </div>
              </div>
          </section>
      <Footer />
    </form>
  )
}
