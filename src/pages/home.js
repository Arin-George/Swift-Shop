import React from 'react';
import '../styles.css'; // Import your CSS file
import logo from '../imgvid/logo.jpg'; // Import your logo image
import down from '../imgvid/down.webp'; // Import your down image
import pay from '../imgvid/pay.webp'; // Import your payment image
import ship from '../imgvid/ship.jpg';
import money from '../imgvid/money.jpg';
import time from '../imgvid/time.jpg';
import promo from '../imgvid/promo.jpg';
import lap from '../imgvid/lap.jpg';
import cloth from '../imgvid/prod1.jpg'
import watch from '../imgvid/prod2.jpg'
import shoe from '../imgvid/prod3.webp'
import lapt from '../imgvid/laptop.jpg'
import a from '../imgvid/1.webp';
import b from '../imgvid/2.webp';
import c from '../imgvid/3.webp';
import d from '../imgvid/4.webp';
import e from '../imgvid/5.webp';
import f from '../imgvid/6.webp';
import g from '../imgvid/7.webp';
import h from '../imgvid/8.webp';
import i from '../imgvid/9.webp';
import j from '../imgvid/10.webp';
import k from '../imgvid/11.webp';
import l from '../imgvid/12.webp';

function HomePage() {
  return (
    <div>
      <nav id="header">
        <a href="#"><img src={logo} className="logo" alt="Logo" /></a>
        <div>
          <ul id="navbar" type="none">
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blogs</a></li>
            <li><a href="/sign">Sign Up</a></li>
            <li><a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a></li>
          </ul>
        </div>
      </nav>

      <div className="hero1">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all Products</h1>
        <p>Save more with coupons & upto 70% off!</p><br />
        <button><a href='/shop'>Shop Now&emsp;<i class="fa-solid fa-arrow-right"></i></a></button>
      </div>

      <div className='cats'>
        <h1>Featured Categories</h1><br></br>
        <p>Choose from a wide range of products</p><br></br>
      </div>

      <div className="prod1">
        <div className="text">
          <h1>Product 1</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
          <br></br><br></br><button><a href='/shop'>Search More&emsp;<i class="fa-solid fa-arrow-right"></i></a></button>
        </div>
        <img src={cloth} alt="Who We Are" />
      </div>

      <div className="prod1">
        <img src={watch} alt="Who We Are" />
        <div className="text">
          <h1>Product 2</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
          <br></br><br></br><button><a href='/shop'>Search More&emsp;<i class="fa-solid fa-arrow-right"></i></a></button>
        </div>
      </div>

      <div className="prod1">
        <div className="text">
          <h1>Product 3</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
          <br></br><br></br><button><a href='/shop'>Search More&emsp;<i class="fa-solid fa-arrow-right"></i></a></button>
        </div>
        <img src={shoe} alt="Who We Are" />
      </div>

      <div className="prod1">
        <img src={lapt} alt="Who We Are" />
        <div className="text">
          <h1>Product 4</h1><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos laborum sequi repudiandae eum esse ut, consequuntur culpa atque corporis dolorem quisquam molestiae ipsum odio voluptate laudantium aut sapiente fuga.</p><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed deleniti officiis corporis possimus asperiores obcaecati accusantium facilis eos ratione quo harum non, velit recusandae quibusdam natus repudiandae ducimus quod! Porro.</p>
          <br></br><br></br><button><a href='/shop'>Search More&emsp;<i class="fa-solid fa-arrow-right"></i></a></button>
        </div>
      </div>

      <div className='feats'>
        <h1>Featured Products</h1><br></br>
        <p>Summer Collection New Modern Design</p><br></br>
        <div className='procontain'>
          <div className='contain'>
            <img src={a}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$69</h4>
            </div> 
            <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
          </div>
          <div className='contain'>
            <img src={b}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$69</h4>
            </div> 
            <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
          </div>
          <div className='contain'>
            <img src={c}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$69</h4>
            </div> 
            <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
          </div>
          <div className='contain'>
            <img src={d}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Jeans</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$69</h4>
            </div> 
            <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
          </div>
          <div className='contain'>
            <img src={e}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Jeans</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$69</h4>
            </div> 
            <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
          </div>
          <div className='contain'>
            <img src={f}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Jeans</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$69</h4>
            </div> 
            <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
          </div>
          <div className='contain'>
            <img src={g}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Shoes</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$69</h4>
            </div> 
            <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
          </div>
          <div className='contain'>
            <img src={h}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Shoes</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$69</h4>
            </div> 
            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
          </div>
          <div className='contain'>
            <img src={i}></img>
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut Shoes</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$69</h4>
            </div> 
            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
          </div>
        </div>
      </div>

      <div className="sec3">
        <div className="box">
          <img src={ship} alt="Free Shipping" />
          <h4>Free Shipping</h4>
        </div>
        <div className="box">
          <img src={time} alt="On-Time Delivery" />
          <h4>On-Time Delivery</h4>
        </div>
        <div className="box">
          <img src={money} alt="Save Money" />
          <h4>Save Money</h4>
        </div>
        <div className="box">
          <img src={promo} alt="Promotions" />
          <h4>Promotions</h4>
        </div>
        <div className="box">
          <img src={lap} alt="24/7 Support" />
          <h4>24/7 Support</h4>
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
          <p>Terms &amp; Conditions</p>
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

export default HomePage;
