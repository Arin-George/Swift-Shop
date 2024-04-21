import React, { useState } from 'react';
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
import shoe4 from '../imgvid/shoe4.webp';
import shoe5 from '../imgvid/shoe5.webp';
import watch1 from '../imgvid/watch1.webp';
import watch2 from '../imgvid/watch2.webp';
import watch3 from '../imgvid/watch3.webp';
import watch4 from '../imgvid/watch4.webp';
import watch5 from '../imgvid/watch5.webp';
import lap1 from '../imgvid/lap1.webp';
import lap2 from '../imgvid/lap2.webp';
import lap3 from '../imgvid/lap3.webp';
import lap4 from '../imgvid/lap4.webp';
import lap5 from '../imgvid/lap5.webp';
import products from './data.js';

function Shop(){
    //   const [searchTerm, setSearchTerm] = useState('');
    //   const [filteredProducts, setFilteredProducts] = useState([]);

    //   const handleInputChange = (event) => {
    //   const term = event.target.value.trim().toLowerCase();
    //   setSearchTerm(term);
      
    //   const filtered = products.filter(product => 
    //     product.name.toLowerCase().includes(term)
    //   );
    //   setFilteredProducts(filtered);
      
    //   const element=document.getElementsByClassName('h1ear').textContent;
    //   element.style.color='red';
    // };


    return (
      <div>
        <nav id="header">
          <a href="#"><img src={logo} className="logo" alt="Logo" /></a>
          <div>
            <ul id="navbar" type="none">
              <li><a href="/">Home</a></li>
              <li><a className="active" href="/shop">Shop</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blogs</a></li>
              <li><a href="/sign">Sign Up</a></li>
              <li><a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a></li>
            </ul>
          </div>
        </nav>
        
  
        <div className='feats'>
          <h1>Check out our wide variety of products</h1><br></br><br></br>
          <input type="text" id="search-input" placeholder="Search"/>
          {/* <div>
            <input type="text" id="search-input" placeholder="Search" value={searchTerm} onChange={handleInputChange}/>
            <div className="products">
            {filteredProducts.map(product => (
              <div key={product.id} className="contain">
                <div className="name">
                  {product.name}
                </div>
              </div>
            ))}
            </div> 
          </div> */}
          <div className='procontain'>
            <div className='contain'>
              <img src={a}></img>
              <div className="des">
                <span>GANT</span>
                <h5 className='name'>White T-Shirt</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$29</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={b}></img>
              <div className="des">
                <span>Polo</span>
                <h5 className='name'>Black T-Shirt</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$29</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={c}></img>
              <div className="des">
                <span>LEVI</span>
                <h5 className='name'>Blue T-Shirt</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$29</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={d}></img>
              <div className="des">
                <span>CK</span>
                <h5 className='name'>Slim-Fit Jeans</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$29</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={e}></img>
              <div className="des">
                <span>Polo</span>
                <h5 className='name'>Skin-Tight Jeans</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$29</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={f}></img>
              <div className="des">
                <span>LEVI</span>
                <h5 className='name'>Baggy Jeans</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$29</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={g}></img>
              <div className="des">
                <span>Nike</span>
                <h5 className='name'>Nike Air</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$49</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={h}></img>
              <div className="des">
                <span>HushPuppy</span>
                <h5 className='name'>HushPuppy Grand</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$49</h4>
              </div> 
              <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className='contain'>
              <img src={i}></img>
              <div className="des">
                <span>Sketchers</span>
                <h5 className='name'>Sketchers GoWalk</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$49</h4>
              </div> 
              <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className='contain'>
              <img src={shoe4}></img>
              <div className="des">
                <span>Reebok</span>
                <h5 className='name'>Reebok Premium</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$49</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={shoe5}></img>
              <div className="des">
                <span>Campus</span>
                <h5 className='name'>Campus Terminator Shoes</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$49</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={watch1}></img>
              <div className="des">
                <span>Tissot</span>
                <h5 className='name'>Tissot Grand</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$59</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={watch2}></img>
              <div className="des">
                <span>Rolex</span>
                <h5 className='name'>Rolex Gold</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$59</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={watch3}></img>
              <div className="des">
                <span>CK</span>
                <h5 className='name'>CK Green</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$59</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={watch4}></img>
              <div className="des">
                <span>Fastrack</span>
                <h5 className='name'>Fastrack Ultra</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$59</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={watch5}></img>
              <div className="des">
                <span>Titan</span>
                <h5 className='name'>Titan Premium</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$59</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={lap1}></img>
              <div className="des">
                <span>HP</span>
                <h5 className='name'>HP Victus</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$89</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={lap2}></img>
              <div className="des">
                <span>Lenovo</span>
                <h5 className='name'>Lenovo Ideapad</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$89</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={lap3}></img>
              <div className="des">
                <span>ASUS</span>
                <h5 className='name'>ASUS Vivobook</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$89</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={lap4}></img>
              <div className="des">
                <span>HP</span>
                <h5 className='name'>HP Pavilion</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$89</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
            <div className='contain'>
              <img src={lap5}></img>
              <div className="des">
                <span>Dell</span>
                <h5 className='name'>Dell G16</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>$89</h4>
              </div> 
              <a href="#"><i className='fa-solid fa-shopping-cart'></i></a>
            </div>
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

  
export default Shop;

        
      