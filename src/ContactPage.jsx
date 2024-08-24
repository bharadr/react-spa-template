import './ContactPage.css'
import { Link } from "react-router-dom";


function ContactPage() {
  return (
    <div className="contactPage">
        <p>Organization Name</p>
        <p>Click <Link to='/'>here</Link> to return to the home page</p>
    </div>
  );
}

export default ContactPage;
