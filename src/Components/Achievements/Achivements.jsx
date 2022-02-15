import React from "react";
import "./Achievements.css"
import Achievements1 from "../../Assets/Achievements1.jpg"
import Achievements2 from "../../Assets/Achievements2.webp"
import Achievements3 from "../../Assets/Achievements3.webp"
import Achievements4 from "../../Assets/Achievements4.webp"
import Achievements5 from "../../Assets/Achievements5.webp"
// const images = [xyz]
const Main = () => {

  return (
    <div className="achiveouter">
      
      <div className="firstrowachive">
        <h1 className="wheredowe">OPPORTUNITIES DON’T HAPPEN, YOU CREATE THEM</h1>
        <div className="seperator">
          <div className="lineachi1"></div>
          <div>
            <h1 className="aboutusheading">OUR ACHIEVEMENTS</h1>
          </div>
          <div className="lineachi2"></div>
        </div>

      </div>
      <div className="timeline">

     

        <div className="container left">
          <div className="content">
            <div className="contents">
              <h2>Shreyash Choppawar, Amit Prasad & Vedansh Shrivastav</h2>
              <div class="devicer"></div>
              <p>
                Second Runner-up at Innovate for Smart Pimpri Chinchwad, innovation Challenge organised by PCSCL, PCMC & PCCOE, Pune.
              </p>
            </div>
            <div className="image-conainer">
              <img className="image" src={Achievements1} alt="" />

            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <div className="image-conainer">
              <img className="image" src={Achievements2} alt="" />
            </div>
            <div className="contents">
              <h2> Sagar Warungase</h2>
              <div class="devicer"></div>
              <p>
                First Position at Techtatva Electronics Competition Organised by EnTC Dept, DYPCOE, Pune.
              </p>
            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <div className="contents">
              <h2>Samiksha Bhokare & Dibyanshu Sharma</h2>
              <div class="devicer"></div>
              <p>
                Second Position at Techtatva Electronics Competition Organised by EnTC Dept, DYPCOE, Pune.
              </p>
            </div>
            <div className="image-conainer">
              <img className="image" src={Achievements3} alt="" />
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <div className="image-conainer">
              <img className="image" src={Achievements4} alt="" />
            </div>
            <div className="contents">
              <h2> Arvind Patel</h2>
              <div class="devicer"></div>
              <p>
                Second Runner-up at COEP Mindspark-19 Search & Destroy, organised by COEP, Pune.
              </p>
            </div>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <div className="contents">
              <h2>Arvind Patel</h2>
              <div class="devicer"></div>
              <p>
                First Position at Bro Code & Code Capture Competition organised by PCCOE, Ravet.
              </p>
            </div>
            <div className="image-conainer">
              <img className="image" src={Achievements5} alt="" />
            </div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <div className="image-conainer">
              <img className="image" src={Achievements1} alt="" />
            </div>
            <div className="contents">

              <h2>Lorem ipsum dolor sit amet</h2>
              <div class="devicer"></div>
              <p>
                Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;