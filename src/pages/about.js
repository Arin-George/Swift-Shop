import React from 'react';
import '../styles.css'; // Import your CSS file
import logo from '../imgvid/logo.jpg'; // Import your logo image
import who from '../imgvid/who.jpg'; // Import your who image
import down from '../imgvid/down.webp'; // Import your down image
import pay from '../imgvid/pay.webp'; // Import your payment image
import appVideo from '../imgvid/app.mp4';
import past from '../imgvid/past.mp4';
import present from '../imgvid/present.mp4';
import mission from '../imgvid/mission.mp4';
import vision from '../imgvid/vision.mp4';


function AboutPage() {
  return (
    <div>
      <nav id="header">
        <a href="#"><img src={logo} className="logo" alt="Logo" /></a>
        <div>
          <ul id="navbar" type="none">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a className='active' href="/about">About</a></li>
            <li><a href="/blog">Blogs</a></li>
            <li><a href="/sign">Sign Up</a></li>
            <li><a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a></li>
          </ul>
        </div>
      </nav>

      <div className="hero3">
        <h2>#Know Us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className="sec1">
      <video autoPlay muted loop src={past}></video>
        <div className="text">
          <h1>Our Past...</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
        </div>
      </div>

      <div className="sec1">
        
        <div className="text">
          <h1>Who We Are Now?</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
        </div>
        <video autoPlay muted loop src={present}></video>
      </div>

      <div className="sec1">
      <video autoPlay muted loop src={mission}></video>
        <div className="text">
          <h1>Our Mission...</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
        </div>
      </div>

      <div className="sec1">
        
        <div className="text">
          <h1>Our Vision...</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
        </div>
        <video autoPlay muted loop src={vision}></video>
      </div>

      <div className="sec2">
        <h1>Download Our App</h1><br />
        <p>To avail our services and know more about us</p><br></br><br></br>
        <div className="vid">
          <video autoPlay muted loop src={appVideo}></video>
        </div>
      </div>


      <footer>
        <div className="col1">
          <img src={logo} alt="Logo" />
          <h3>Contact</h3>
          <p><strong>Address:</strong> 287 Bharat Roads, Street 32, Gandhinagar</p>
          <p><strong>Phone:</strong> (+91) 8590521964/(+91) 9819165791</p>
          <p><strong>Hours:</strong> 10:00 - 20:00, Mon-Sat</p>
          <br />
          <h3>Follow Us</h3>
          <div className="icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <br />
          <div className="copy">
            <p><strong>© 2024, SwiftStore or its affiliates</strong></p>
          </div>
        </div>

        <div className="col1">
          <h3>About</h3>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
        </div>

        <div className="col1">
          <h3>My Account</h3>
          <p>Sign In</p>
          <p>View Cart</p>
          <p>My Wishlist</p>
          <p>Track My Order</p>
          <p>Help</p>
        </div>

        <div className="col1">
          <h3>Install App</h3>
          <p>From App Store or Google Pay</p>
          <img src={down} alt="Download" />
          <h3>Payment Gateways</h3><br />
          <img src={pay} alt="Payment" />
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
