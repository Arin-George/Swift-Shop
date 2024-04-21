import React from 'react';
import '../styles.css'; // Import your CSS file
import signupImage from '../imgvid/signup.jpg'; // Import your signup image
import logo from '../imgvid/logo.jpg'; // Import your logo image
import ReactDOM from 'react-dom/client';

function SignUpPage() {
  const sub = () => {
    alert("Form successfully submitted!");
  }

  return (

    <div className="back">
      <nav id="header">
        <a href="#"><img src={logo} className="logo" alt="Logo" /></a>
        <div>
          <ul id="navbar" type="none">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blogs</a></li>
            <li><a className='active' href="/sign">Sign Up</a></li>
            <li><a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <img src={signupImage} alt="Sign Up" />
        <div className="forms">
          <form action="#">
            <h1>Sign Up</h1><br /><br />
            <h2>Get better offers and customized shopping preferences & more!</h2><br /><br />
            <div className="input-group">
              <input type="text" placeholder="Enter Full Name" id="name" name="name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Enter EmailID" id="email" name="email" required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Enter Password" id="password" name="password" required />
            </div><br /><br />
            <div className="input-group">
              <input type="checkbox" id="terms" name="terms" /> I agree to SwiftStore's <a href="#">Terms of Service</a><br /><br />
              {/* <input type="checkbox" id="data" name="data" /> I accept SwiftStore's use of my data for the service and everything else
              described in the <a href="#">Privacy Policy</a> and <a href="#">Data Processing Agreement</a><br /><br /> */}
            </div><br />
            <div className="input-group">
              <button onClick={sub} type="submit">Create my free account</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignUpPage/>);

export default SignUpPage;
