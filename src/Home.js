import React from "react";
import "./Home.css";
import Product from "./Product";
// import { AnimationWrapper } from 'react-hover-animation';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

     <div className="home__row">
          <Product
            id="12321341"
            title="OnePlus 10R 5G (Forest Green, 12GB RAM, 256GB Storage, 80W SuperVOOC)"
            price={23999}
            rating={5}
            image="https://m.media-amazon.com/images/I/716uVx3Wr5L._AC_UY327_FMwebp_QL65_.jpg"
          />
          
          
          <Product
            id="49538094"
            title="Colorbar All Matte Eyeliner, Black 001, 2.5ml"
            price={655.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/41OXb3IgG7L._AC_UL480_FMwebp_QL65_.jpg"
          />
          
        

        <Product
            id="1232187"
            title="Kuber Industries PVC 6 Seater Transparent Dining Table Cover - Gold,CTCOMPST01)"
            price={269}
            rating={5}
            image="https://m.media-amazon.com/images/I/71mmXUjzTdL._AC_UL480_QL65_.jpg"
          />
          </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="boAt Airdopes 121v2 True Wireless Earbuds with Upto 14 Hours Playback, Lightweight Earbuds, 8MM Drivers, LED Indicators and Multifunction Controls(Active Black)"
            price={1299}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/31KjuRb9oNL._AC_SX184_.jpg"
          />
          <Product
            id="23445930"
            title="Fire-Boltt 360 SpO2 Full Touch Large Display Round Smartwatch with in-Built Games, 8 Days Battery Life, IP67 Water Resistant with Blood Oxygen &"
            price={2499}
            rating={5}
            image="https://m.media-amazon.com/images/I/61F1SVuthwS._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="SUGAR Cosmetics - Blend The Rules - Eyeshadow Palette - 01 Flawless (8 Warm Neutral Shades) - Long Lasting, Smudge Proof Eyeshadow"
            price={598.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71dxyqCffFS._AC_UL480_FMwebp_QL65_.jpg" 
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Faces Splash Glossy Nail Enamel, Viola 41, 8 ml"
            price={118.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71MtGXBO2LL._AC_UL480_FMwebp_QL65_.jpg"
            />
            <Product
            id="90829398"
            title="Campus Women's Sunshine Running Sport Shoe"
            price={1472}
            rating={4}
            image="https://m.media-amazon.com/images/I/71HoMJdVVNL._AC_SR200,161_QL70_.jpg"
            />
            <Product
            id="90829387"
            title="RARE
            Women's Regular fit Top"
            price={349.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/611zkAWpGWL._AC_UL480_FMwebp_QL65_.jpg"
            />
            </div>
      </div>
    </div>
  );
}

export default Home;