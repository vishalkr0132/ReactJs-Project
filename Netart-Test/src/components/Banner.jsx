import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
    <div className="container">
      <div className="Navbar">
        <img src="/images/logo.png" alt="Logo design" />
      </div>

      <div className="Header">
        <div className="Header-left">
          <img src="/images/award.png" alt="Logo design" />
        </div>

        <div className="Header-right">
          <h3>
            C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
            4th time.
          </h3>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated 
              energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <img src="/images/banner.png" alt="Logo design" />
          <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, 
            Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of 
            Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <h5>
      INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 
      MILLION UNITS OF POWER FOR THE NATION.
      </h5>
      <div className="parts">
        <img src="/images/parts.png" alt="Logo design" />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>
      <div className="line">
        </div>

      <div className="parts">
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p>CHEMICALS | PROCESS POWER WATER | WASTE WATER OILS | GAS PHARMA SUGARS | DISTILLERIES PAPER | 
          PULP MARINE | DEFENCE METAL | MINING FOOD | BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING 
          HVAC FIRE FIGHTING AGRICULTURE | RESIDENTIAL</p>
      </div>

      <footer>
        <div className="media">
          
            <div className="innerfooter">
                <div className="inner_div social-icons">
                <img src="/images/phone.svg" alt="Logo design" />
                <div className="text">
                    <a href="#" className="toll-no">Toll free 1800 200 1234</a>
                </div>
                </div>
            </div>

            <div className="innerfooter">
                <div className="inner_div social-icons">
                  <img src="/images/facebook.svg" alt="Logo design" />
                <div className="text">
                  <a href="#">www.facebook/cripumps</a>              
                </div>
                </div>
            </div>

            <div className="innerfooter">
                <div className="inner_div social-icons">
                <img src="/images/internet.svg" alt="Logo design" />
                <div className="text">
                    <a href="#">www.crigroups.com</a>
                </div>
                </div>
            </div>
            
        </div>
      </footer>
      </div>
    </>
  );
};

export default Banner;
