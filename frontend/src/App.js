import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';


function App() {
  const openmenu = () => {
    document.getElementById("side-menu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="block";
}
  const closemenu = () => {
    document.getElementById("side-menu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
  }
  return (
      
    <BrowserRouter> 
    <div>

    <div className="top-nav-bar">
    <div className="search-box">
        <i className="fa fa-bars" id="menu-btn" onClick={openmenu}></i>
        <i className="fa fa-times" id="close-btn" onClick={closemenu}></i>
    <Link to="/"><img src="/images/blu-logo.png" className="logo" alt=""/></Link>
    <input type="text" className="form-control"/>
    <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i>
        </span>
    </div>
    <div className="menu-bar">
        <ul>
            <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i>
                Cart</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Log In</a></li>
        </ul>
    </div>
    </div>

<section className="header">
        <div className="side-menu" id="side-menu">
            <ul>
                <li>Comics<i className="fa fa-book" aria-hidden="true"></i>
                    <ul>
                        <li>Sub Menu-1</li>
                        <li>Sub Menu-1</li>
                        <li>Sub Menu-1</li>
                        <li>Sub Menu-1</li>
                    </ul>
                </li>
                <li>Travel<i className="fa fa-plane"></i>
                    <ul>
                        <li>Sub Menu-2</li>
                        <li>Sub Menu-2</li>
                        <li>Sub Menu-2</li>
                        <li>Sub Menu-2</li>
                    </ul>
                </li>
                    
                <li>Language<i className="fa fa-microphone"></i>
                    <ul>
                        <li>Sub Menu-3</li>
                        <li>Sub Menu-3</li>
                        <li>Sub Menu-3</li>
                        <li>Sub Menu-3</li>
                    </ul>
                </li>
            </ul>
        </div>
        </section>
        <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/" exact={true} component={HomeScreen}/>
    
{/* <!-------------------Website features--------------------------> */}

<section className="website-features">
    <div className="container">
        <div className="row">
            <div className="col-md-3 feature-box">
                <img src="/images/feature-1.png" alt="feature 1"/>
                <div className="feature-text">
                    <p><b>100% Original items </b>are available at company.</p>
                </div>
            </div>

            <div className="col-md-3 feature-box">
                <img src="/images/feature-2.jpg" alt="feature 2"/>
                <div className="feature-text">
                    <p><b>Return within 30 days </b>of receiving your order.</p>
                </div>
            </div>

            <div className="col-md-3 feature-box">
                <img src="/images/feature-3.png" alt="feature 3"/>
                <div className="feature-text">
                    <p><b>Get free delivery for every </b>order on more than price.</p>
                </div>
            </div>

            <div className="col-md-3 feature-box">
                <img src="/images/feature-4.png" alt="feature 4"/>
                <div className="feature-text">
                    <p><b>Payment Online through multiple </b>options (card/Netbanking)</p>
                </div>
            </div>
        </div>
    </div>
</section>


{/* <!----------------------------Footer-------------------------> */}
<section className="footer">
    <div className="container text-center">
        <div className="row">
            <div className="col-md-3">
                <h1>Useful Links</h1>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Return Policy</p>
                <p>Discount Coupons</p>
            </div>

            <div className="col-md-3">
                <h1>Company</h1>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Career</p>
                <p>Affiliate</p>
            </div>

            <div className="col-md-3">
                <h1>Follow Us On</h1>
                <p><i className="fa fa-facebook-official"></i> Facebook</p>
                <p><i className="fa fa-youtube-play"></i> Youtube</p>
                <p><i className="fa fa-linkedin"></i> Linkedin</p>
                <p><i className="fa fa-twitter"></i> Twitter</p>
            </div>

            <div className="col-md-3 footer-image">
                <h1>Download App</h1>
                <img src="/images/app-logo.png" alt="for downloading mobile app"/>
            </div>
        </div>
        <hr/>
        <p className="copyright">Made with <i className="fa fa-heart-o"></i> by Some Tutorials</p>
        </div>
        </section>
</div>
</BrowserRouter>
  );
}
export default App;
