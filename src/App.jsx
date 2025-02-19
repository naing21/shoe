import React from 'react';
import orgview from '../src/images/view.jpg';
import sideback from '../src/images/sideback.jpg';
import up from '../src/images/up.jpg';
import falcon from '../src/images/Falcon.jpg';
import main from '../src/images/mainview.jpg';
import image from '../src/images/image.png'
import xsfpi from '../src/images/x-speed-flow-pink - Copy.jpg';
import facebook from '../src/images/Google.png';
import google from '../src/images/Facebook.png';
import twitter from '../src/images/Twitter.png';
import red from '../src/images/adidas red - Copy.jpg';
import black from '../src/images/adidas-black - Copy.jpg';
import pblue from '../src/images/predator blue - Copy.jpg';
import pink from '../src/images/pink.jpg';
import reds from '../src/images/red - Copy.jpg';
import xsflow from '../src/images/x speed flow - Copy.jpg';
import xsfbw from '../src/images/x speed flow bl wh - Copy.jpg';
import xsfb from '../src/images/x speed flow black - Copy.png';
import xsfc from '../src/images/x-speed-flow-champion - Copy.jpg';
import xsfg from '../src/images/x-speed-flow-gray - Copy.jpg';
import xsfp from '../src/images/x-speed-flow-pink - Copy.jpg';
import f50w from '../src/images/f50-white-gold.jpg';
import tiger from '../src/images/Tiger.png'
import kangroo from '../src/images/Kangroo.png'
import t from '../src/images/tiger2.png'
import deer from '../src/images/Deer.png'
import hibbo from '../src/images/Hibbo.png';


function App() {
  return (
    <body>
      <section>
        <nav>
          <div class="logo">
            <h1>TM<span>sports</span></h1>
          </div>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Products">Products</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Review">Review</a></li>
            <li><a href="#Services">Service</a></li>
          </ul>

          <div class="icons">
            <i class="fa-solid fa-heart"></i>
            <i href="cart" class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-user"></i>
            {/* <!-- <a href=""><i class="fa-solid fa-cart-shopping"></i></a> --> */}
          </div>
        </nav>
        <div class="main" id="Home">
          <div class="main-content">
            <div class="main_text">
              <h1>ADIDAS <br /> <span>Collection</span></h1>
            </div>
            <div class="main-image">
              <img src={image} alt="" />
              {/* <img src="./images/images - Copy.png" alt=""/> */}
            </div>
          </div>

          <div class="social_icon">
            <a href="facebook"><i class="fa-brands fa-facebook"></i></a>
            <a href="instagram"><i class="fa-brands fa-square-instagram"></i></a>
            <a href="twitter"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="linkedin-in"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="tiktok"><i class="fa-brands fa-tiktok"></i><i /></a>
          </div>


          <div class="button">
            <a href="shop">SHOP NOW</a>
            <i class="fa-solid fa-arrow-right"></i>
          </div>

          <div class="Content">

            <div class="para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem aperiam ab soluta, sed ut distinctio optio magnam, autem, aliquam dignissimos libero beatae recusandae totam eum? Pariatur facilis, error dignissimos exercitationem architecto quasi quis sint tenetur doloremque hic possimus dolorum nobis odio consectetur repudiandae numquam accusamus, voluptates natus quisquam quaerat cum reiciendis. Voluptatum eaque est unde velit non voluptate ut, repellendus, perferendis eum quibusdam sint neque iusto aliquam, fuga sit quod ratione. Necessitatibus eum facilis nisi earum nam alias quasi ratione, adipisci temporibus consequatur velit expedita voluptas. Voluptatem quo iusto perspiciatis vel beatae quis expedita eveniet animi ratione quisquam! Aspernatur, ea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* product */}
      <div class="products" id="Products">
        <h1>Products</h1>

        <div class="box">
          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={red} alt="" />
              {/* <img src="./images/adidas red - Copy.jpg" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>RED</p>
              <h3>$80</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>

          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={black} alt="" />
              {/* <img src="./images/adidas-black - Copy.jpg" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>BLACK </p>
              <h3>$95.8</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <box-icon type='solid' name='cart'></box-icon>
            </div>
          </div>
          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={pblue} alt="" />
              {/* <img src="./images/predator blue - Copy.jpg" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>PREDATOR BLUE </p>
              <h3>$98.7</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <box-icon type='solid' name='cart'></box-icon>
            </div>
          </div>
          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={pink} alt="" />

              {/* <img src="./images/pink.jpg" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>PINK </p>
              <h3>$75.43</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <box-icon type='solid' name='cart'></box-icon>
            </div>
          </div>
          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={reds} alt="" />
              {/* <img src="./images/red - Copy.jpg" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>RED-WHITE VERSION </p>
              <h3>$60</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <box-icon type='solid' name='cart'></box-icon>
            </div>
          </div>
          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={xsflow} alt="" />
              {/* <img src="./images/x speed flow - Copy.jpg" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>X SPEED FLOW WHITE VERSION </p>
              <h3>$125</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <box-icon type='solid' name='cart'></box-icon>
            </div>
          </div>
          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={xsfbw} alt="" />

              {/* <img src="./images/x speed flow bl wh - Copy.jpg" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>X SPEED FLOW LIGHTBLUE </p>
              <h3>$150</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <box-icon type='solid' name='cart'></box-icon>
            </div>
          </div>
          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={xsfb} alt="" />

              {/* <img src="./images/x speed flow black - Copy.png" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>X SPEED FLOW BLACK TYPE</p>
              <h3>$120</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <box-icon type='solid' name='cart'></box-icon>
            </div>
          </div>
          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={xsfc} alt="" />

              {/* <img src="./images/x-speed-flow-champion - Copy.jpg" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>XSPEED FLOW CHP. EDITION</p>
              <h3>$230</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <box-icon type='solid' name='cart'></box-icon>
            </div>
          </div>
          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={xsfg} alt="" />

              {/* <img src="./images/x-speed-flow-gray - Copy.jpg" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>XSPEED FLOW GRAY</p>
              <h3>$200</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <box-icon type='solid' name='cart'></box-icon>
            </div>
          </div>
          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={xsfp} alt="" />

              {/* <img src="./images/x-speed-flow-pink - Copy.jpg" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>XSF SPECIAL EDITION</p>
              <h3>$300</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <box-icon type='solid' name='cart'></box-icon>
            </div>
          </div>
          <div class="card">
            <div class="small_card">
              <i class="fa-solid fa-heart"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <div class="image">
              <img src={f50w} alt="" />

              {/* <img src="./images/f50-white-gold.jpg" alt=""/> */}
            </div>
            <div class="products_text">
              <h2>ADIDAS</h2>
              <p>F50 GOLD VERSION <br />
                LIMITED EDITION</p>
              <h3>$450</h3>
              <div class="products_star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <a href="shop" class="btn">Add To Cart</a>
              <box-icon type='solid' name='cart'></box-icon>
            </div>
          </div>
        </div>
      </div>

      {/*  about */}
      <div class="about" id="About">
        <h1>Web<span>About</span></h1>

        <div class="about_main">
          <div class="about_image">
            <div class="about_small_image">
              <img src={orgview} onclick="functio(this)" />
              <img src={sideback} onclick="functio(this)" />
              <img src={up} onclick="functio(this)" />
              <img src={falcon} onclick="functio(this)" />
              {/* <img src="./images/2-1view.jpg" onclick="functio(this)"/>
                  <img src="./images/sidebackview.jpg" onclick="functio(this)"/>
                  <img src="./images/upview.jpg" onclick="functio(this)"/>
                  <img src="./images/Falcon.jpg" onclick="functio(this)"/> */}
            </div>

            <div class="image_container">
              <img src={main} />
              {/* <img src="./images/mainview.jpg" id="imagebox"/> */}
            </div>

          </div>

          <div class="about_text">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>

        </div>

        <a href="shop" class="about_btn">Shop Now</a>

        {/* <script>
              function = functio(small){
                full = docement.getElementbyId("imagebox")
                full.src = small.src
              }
            </script> */}

      </div>
      {/* review */}
      <div class="review" id="Review">
        <h1>Customer's<span>review</span></h1>

        <div class="review_box">

          <div class="review_card">

            <div class="card_top">

              <div class="profile">

                <div class="profile_image">
                  <img src={tiger} alt="" />
                  {/* <img src="./images/Tiger.png" alt=""/> */}
                </div>

                <div class="name">
                  <strong>Ki Mu Ra</strong>

                  <div class="like">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>

              </div>
            </div>

            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem fugiat illum officiis vero eveniet?
              </p>
            </div>

          </div>



          <div class="review_card">

            <div class="card_top">

              <div class="profile">

                <div class="profile_image">
                  <img src={kangroo} alt="" />
                  {/* <img src="./images/Kangroo.png" /> */}
                </div>

                <div class="name">
                  <strong>Miyaa</strong>

                  <div class="like">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>

              </div>
            </div>

            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem fugiat illum officiis vero eveniet?
              </p>
            </div>

          </div>



          <div class="review_card">

            <div class="card_top">

              <div class="profile">

                <div class="profile_image">
                  <img src={t} alt="" />
                  {/* <img src="./images/tiger2.png" alt=""/> */}
                </div>

                <div class="name">
                  <strong>Ta Wa Pon</strong>

                  <div class="like">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>

              </div>
            </div>

            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem fugiat illum officiis vero eveniet?
              </p>
            </div>

          </div>


          <div class="review_card">

            <div class="card_top">

              <div class="profile">

                <div class="profile_image">
                  <img src={deer} alt="" />
                  {/* <img src="./images/Deer.png" alt=""/> */}
                </div>

                <div class="name">
                  <strong>Ta Na Ka</strong>

                  <div class="like">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>

              </div>
            </div>

            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem fugiat illum officiis vero eveniet?
              </p>
            </div>

          </div>



          <div class="review_card">

            <div class="card_top">

              <div class="profile">

                <div class="profile_image">
                  <img src={hibbo} alt="" />
                  {/* <img src="./images/Hibbo.png" alt=""/> */}
                </div>

                <div class="name">
                  <strong>Ya Ma Da</strong>

                  <div class="like">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                </div>

              </div>
            </div>

            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem fugiat illum officiis vero eveniet?
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* services */}
      <div class="services" id="Services">
        <h1>our <span>services</span></h1>

        <div class="services_cards">
          <div class="services_box">
            <i class="fa-solid fa-truck-fast"></i>
            <h3>Fast Delivery</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquam.
            </p>
          </div>

          <div class="services_box">
            <i class="fa-solid fa-rotate-left"></i>
            <h3>10 Days Replace</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eius!</p>
          </div>

          <div class="services_box">
            <i class="fa-solid fa-headphones-simple"></i>
            <h3>24 x 7 Support</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eius!</p>
          </div>

        </div>
      </div>

      {/* loginform  */}
      <div class="login_form">
        <div class="left">
          <img src={xsfpi} alt="" />
          {/* <img src="./images/x-speed-flow-pink - Copy.jpg" /> */}
        </div>

        <div class="right">
          <h1>Welcome Back!</h1>

          <form action="#" method="post">
            <p class="username"> User Name</p>
            <div class="user">
              <i class="fa-solid fa-user"></i>
              <input type="text" name="user" placeholder="User Name" />
            </div>

            <p class="password_tag">Password</p>
            <div class="password">
              <i class="fa-solid fa-lock"></i>
              <input type="text" name="password" placeholder="Password" />
            </div>

            <p class="forget">Forget Password?</p>

            <button type="submit">Login</button>
            <div class="loging_icon">
              <a href="google">    <img src={facebook} alt="" />
              </a>
              <a href="facebook">    <img src={google} alt="" />
              </a>
              <a href="twitter">    <img src={twitter} alt="" />
                <i /></a>
            </div>
          </form>
        </div>

      </div>
      {/* footer */}
      <footer>
  <div class="footer_main">
    <div class="tag">
      <h1>Contact</h1>
      <a href="location"><i class="fa-solid fa-house"></i>123/Mandalay/Myanmar</a>
      <a href="phone"><i class="fa-solid fa-tty"></i>+959987654321</a>
      <a href="email"><i class="fa-solid fa-envelope"></i>tmsports@gamil.com</a>
    </div>

    <div class="tag">
      <h1>Get Help</h1>
      <a href="faq" class="center">FAQ</a>
      <a href="shipping" class="center">Shipping</a>
      <a href="returns" class="center">Returns</a>
      <a href="payment optins" class="center">Payment Options</a>

    </div>

    <div class="tag">
      <h1>Our Stores</h1>
      <a href="mandalay" class="center">Mandalay</a>
      <a href="madaya" class="center">Madaya</a>
      <a href="yangon" class="center">Yangon</a>
      <a href="taunggyi" class="center">TaungGyi</a>

    </div>

    <div class="tag">
      <h1>Follow Us</h1>
      <div class="social_link">
        <a href="facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="twitter"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="instagram"><i class="fa-brands fa-square-instagram"></i></a>
        <a href="linkedin-in"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>

    </div>

    <div class="tag">
      <h1>Newsletter</h1>
    <div class="search_bar">
      <input type="text" placeholder="Your email id here"/>
      <button type="submit">Subscribe</button>
    </div>
    </div>
    
  </div>
</footer>
    </body>
  )
}

export default App