import React from 'react';
import '../styles.css'; // Import your CSS file
import logo from '../imgvid/logo.jpg'; // Import your logo image
import down from '../imgvid/down.webp'; // Import your down image
import pay from '../imgvid/pay.webp'; // Import your payment image
import hero4 from '../imgvid/blog.jpg';
import blog1 from '../imgvid/blog1.webp'
import blog2 from '../imgvid/blog2.jpg'
import blog3 from '../imgvid/blog3.webp'
import blog4 from '../imgvid/blog4.jpg'
import blog5 from '../imgvid/blog5.jpg'
import blog6 from '../imgvid/blog6.webp'
import blog7 from '../imgvid/blog7.jpg'
import blog8 from '../imgvid/blog8.jpg'
import blog9 from '../imgvid/blog9.webp'


function Blog() {
  return (
    <div>
      <nav id="header">
        <a href="#"><img src={logo} className="logo" alt="Logo" /></a>
        <div>
          <ul id="navbar" type="none">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a className='active' href="/blog">Blogs</a></li>
            <li><a href="/sign">Sign Up</a></li>
            <li><a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a></li>
          </ul>
        </div>
      </nav>

      <div className="hero4">
        <h2>#Blogs</h2>
        <p>Lorem ipsum, dolor sit amet consectetur</p>
      </div>

      <div className='container'>
        <a href='https://www.lucidchart.com/blog/aligning-human-resources-and-business-strategy' target="_blank" className='bl'>
            <img src={blog1}></img>
            <div className="des">
              <div className='creator'>
                <i className="fa-solid fa-user"></i>&emsp;
                <p>Admin</p>&emsp;
                <p>Mar 22, 2023 . 10min</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-solid fa-bars"></i>
              </div><br></br>
              <h3>When human strategy drives business strategy</h3><br></br>
              <p>Create a blog post subtitle that summarizes your post in a few short, 
                punchy sentences and entices your audience to continue reading....</p>
            </div><br></br>
            <div className='views'>
                &nbsp;&nbsp;<i class="fa-regular fa-eye"></i>&nbsp;
                <p>128 Views</p>&emsp;
                <i class="fa-regular fa-comment"></i>&nbsp;
                <p>100 Comments</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-regular fa-heart"></i>&nbsp;
                <p>92 Likes</p>
            </div>
        </a>

        <a href="https://www.apm.org.uk/blog/the-10-golden-rules-of-planning/" target="_blank" className='bl'>
            <img src={blog2}></img>
            <div className="des">
              <div className='creator'>
                <i className="fa-solid fa-user"></i>&emsp;
                <p>Admin</p>&emsp;
                <p>Mar 22, 2023 . 10min</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-solid fa-bars"></i>
              </div><br></br>
              <h3>Effective Planning: Our 10 Golden Rules</h3><br></br>
              <p>Create a blog post subtitle that summarizes your post in a few short, 
                punchy sentences and entices your audience to continue reading....</p>
            </div><br></br>
            <div className='views'>
                &nbsp;&nbsp;<i class="fa-regular fa-eye"></i>&nbsp;
                <p>128 Views</p>&emsp;
                <i class="fa-regular fa-comment"></i>&nbsp;
                <p>100 Comments</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-regular fa-heart"></i>&nbsp;
                <p>92 Likes</p>
            </div>
        </a>

        <a href="https://www.forbes.com/sites/forbescoachescouncil/2022/02/03/10-telltale-signs-that-a-company-is-growing-too-quickly/?sh=136594bb50ab" target="_blank" className='bl'>
            <img src={blog3}></img>
            <div className="des">
              <div className='creator'>
                <i className="fa-solid fa-user"></i>&emsp;
                <p>Admin</p>&emsp;
                <p>Mar 22, 2023 . 10min</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-solid fa-bars"></i>
              </div><br></br>
              <h3>10 Signs your company is growing too fast</h3><br></br>
              <p>Create a blog post subtitle that summarizes your post in a few short, 
                punchy sentences and entices your audience to continue reading....</p>
            </div><br></br>
            <div className='views'>
                &nbsp;&nbsp;<i class="fa-regular fa-eye"></i>&nbsp;
                <p>128 Views</p>&emsp;
                <i class="fa-regular fa-comment"></i>&nbsp;
                <p>100 Comments</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-regular fa-heart"></i>&nbsp;
                <p>92 Likes</p>
            </div>
        </a>

        <a href="https://socialmediamarketingel.medium.com/10-best-startup-blogs-of-2024-b6d0e1cfca4d" target="_blank" className='bl'>
            <img src={blog4}></img>
            <div className="des">
              <div className='creator'>
                <i className="fa-solid fa-user"></i>&emsp;
                <p>Admin</p>&emsp;
                <p>Mar 22, 2023 . 10min</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-solid fa-bars"></i>
              </div><br></br>
              <h3>Best business hubs to watch in 2024</h3><br></br>
              <p>Create a blog post subtitle that summarizes your post in a few short, 
                punchy sentences and entices your audience to continue reading....</p>
            </div><br></br>
            <div className='views'>
                &nbsp;&nbsp;<i class="fa-regular fa-eye"></i>&nbsp;
                <p>128 Views</p>&emsp;
                <i class="fa-regular fa-comment"></i>&nbsp;
                <p>100 Comments</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-regular fa-heart"></i>&nbsp;
                <p>92 Likes</p>
            </div>
        </a>

        <a href="https://startit-x.com/en/accelerate/blog/the-5-golden-rules-to-perfect-your-startup-pitch" target="_blank" className='bl'>
            <img src={blog5}></img>
            <div className="des">
              <div className='creator'>
                <i className="fa-solid fa-user"></i>&emsp;
                <p>Admin</p>&emsp;
                <p>Mar 22, 2023 . 10min</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-solid fa-bars"></i>
              </div><br></br>
              <h3>5 Important rules to pitch your Startup</h3><br></br>
              <p>Create a blog post subtitle that summarizes your post in a few short, 
                punchy sentences and entices your audience to continue reading....</p>
            </div><br></br>
            <div className='views'>
                &nbsp;&nbsp;<i class="fa-regular fa-eye"></i>&nbsp;
                <p>128 Views</p>&emsp;
                <i class="fa-regular fa-comment"></i>&nbsp;
                <p>100 Comments</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-regular fa-heart"></i>&nbsp;
                <p>92 Likes</p>
            </div>
        </a>

        <a href="https://getnave.com/blog/successful-project-managers/" target="_blank" className='bl'>
            <img src={blog6}></img>
            <div className="des">
              <div className='creator'>
                <i className="fa-solid fa-user"></i>&emsp;
                <p>Admin</p>&emsp;
                <p>Mar 22, 2023 . 10min</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-solid fa-bars"></i>
              </div><br></br>
              <h3>5 Qualities of successful project managers</h3><br></br>
              <p>Create a blog post subtitle that summarizes your post in a few short, 
                punchy sentences and entices your audience to continue reading....</p>
            </div><br></br>
            <div className='views'>
                &nbsp;&nbsp;<i class="fa-regular fa-eye"></i>&nbsp;
                <p>128 Views</p>&emsp;
                <i class="fa-regular fa-comment"></i>&nbsp;
                <p>100 Comments</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-regular fa-heart"></i>&nbsp;
                <p>92 Likes</p>
            </div>
        </a>

        <a href="https://www.krimcode.com/blog/packing-list-for-a-business-trip/" target="_blank" className='bl'>
            <img src={blog7}></img>
            <div className="des">
              <div className='creator'>
                <i className="fa-solid fa-user"></i>&emsp;
                <p>Admin</p>&emsp;
                <p>Mar 22, 2023 . 10min</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-solid fa-bars"></i>
              </div><br></br>
              <h3>10 Essentials for a travelling businessman</h3><br></br>
              <p>Create a blog post subtitle that summarizes your post in a few short, 
                punchy sentences and entices your audience to continue reading....</p>
            </div><br></br>
            <div className='views'>
                &nbsp;&nbsp;<i class="fa-regular fa-eye"></i>&nbsp;
                <p>128 Views</p>&emsp;
                <i class="fa-regular fa-comment"></i>&nbsp;
                <p>100 Comments</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-regular fa-heart"></i>&nbsp;
                <p>92 Likes</p>
            </div>
        </a>

        <a href="https://www.gsquaredcfo.com/blog/top-10-traits-attract-investors-to-startup" target='_blank' className='bl'>
            <img src={blog8}></img>
            <div className="des">
              <div className='creator'>
                <i className="fa-solid fa-user"></i>&emsp;
                <p>Admin</p>&emsp;
                <p>Mar 22, 2023 . 10min</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-solid fa-bars"></i>
              </div><br></br>
              <h3>Business Tip: How to attract Investors</h3><br></br>
              <p>Create a blog post subtitle that summarizes your post in a few short, 
                punchy sentences and entices your audience to continue reading....</p>
            </div><br></br>
            <div className='views'>
                &nbsp;&nbsp;<i class="fa-regular fa-eye"></i>&nbsp;
                <p>128 Views</p>&emsp;
                <i class="fa-regular fa-comment"></i>&nbsp;
                <p>100 Comments</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <i class="fa-regular fa-heart"></i>&nbsp;
                <p>92 Likes</p>
            </div>
        </a> 
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

export default Blog;
