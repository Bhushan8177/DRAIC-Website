import React from 'react';
import { NavLink } from 'react-router-dom';
import "./about.css"
function About() {
  return (
    <div className='aboutouter'>
      <div className="aboutmain">
        <div className="firstrowaboutus">
          <h1 className="wheredowe">WHO WE ARE AND WHY WE ARE DOING THIS</h1>
          <div className="seperator">
            <div className="lineaboutus1"></div>
            <div>
              <h1 className="aboutusheading">ABOUT US</h1>
            </div>
            <div className="lineaboutus2"></div>
          </div>

        </div>
        {/* <div className="about-title"><p>Who we are and <br></br> why we are doing this</p></div> */}
        {/* <div className="about-text"><p> Who vdsv vesv vv svv  gvavavgvverv xcvxvvxvxv <br></br> lkvjbv vvfv fadv z zdavearvhv'pih</p></div> */}
        <div className="testimonial-grid">
          <article className="testimonial flow bg-secondary-400 text-neutral-100 testi">
            <div className="flex">
              <div className='imgbox1'>
                <img className='img3' src="https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffffff/external-group-social-media-sbts2018-solid-sbts2018.png" alt="who we are" />
              </div>
              <div>
                <h2 className="name">WHO WE ARE</h2>
              </div>
            </div>

            <p className="position">
              D. Y. Patil Robotics & AI Club is a group of highly dedicated individuals, from all engineering disciplines, working passionately in the field of Robotics & AI to take the college (DYPCOE, Pune) to new heights in this field. The Club focuses on the development of students through working on various robotic projects and also participating in National as well as International level Competitions.
            </p>
          </article>
          <article className="testimonial flow bg-secondary-400 text-neutral-100">
            <div className="flex">
              <div className='imgbox1'>
                <img className='img3' src="https://img.icons8.com/ios-filled/50/ffffff/mission-of-a-company.png" alt="mission" />
              </div>
              <div>
                <h2 className="name">MISSION</h2>

              </div>
            </div>
            <p className="position">
              Team DRAIC seeks to inspire the next generation of bright minds, to cultivate an appreciation for the present technology and develop a cognitive thinking towards the solutions to present scenario by engaging in competition and building innovative projects.
            </p>
          </article>
        </div>
        <div className="row2">
          <article className="testimonial grid-col-span-2 flow bg-secondary-400 text-neutral-100 testi">
            <div className="flex">
              <div className='imgbox1'>
                <img className='img3' src="https://img.icons8.com/android/48/ffffff/rocket.png" alt="vission" />
              </div>
              <div>
                <h2 className="name">VISSION</h2>

              </div>
            </div>

            <p className="position">
              To achieve an excellence in the field of robotics and AI, Thus contributing towards the development of the nation.
            </p>
          </article>
          <article className="testimonial  flow bg-secondary-500 text-neutral-100">
            <div className="flex">
              <div>
                <h2 className="name2"><strong>50+</strong></h2>
                <p className="subscript1">Members</p>
              </div>
            </div>

          </article>
          <article className="testimonial flow bg-secondary-500 text-neutral-100">
            <div className="flex">

              <div>
                <h2 className="name2"><strong>50+</strong></h2>
                <p className="subscript1">Alumni</p>
                {/* <p className="position">Verified Graduate</p> */}
              </div>
            </div>


          </article>

          <article className="testimonial  flow bg-secondary-500 text-neutral-100">
            <div className="flex">

              <div>
                <h2 className="name2"><strong>50+</strong></h2>
                <p className="subscript1">Projects</p>
                {/* <p className="position">Verified Graduate</p> */}
              </div>
            </div>


          </article>
          <article className="testimonial flow bg-secondary-500 text-neutral-100 testi2">
            <div className="flex">

              <div>
                <h2 className="name2"><strong>50+</strong></h2>
                <p className="subscript1" style={{fontSize: '1.3rem'}}>Achievements</p>
                {/* <p className="position">Verified Graduate</p> */}
              </div>
            </div>

          </article>
        </div>

      {/* </div>
      <div> */}
        <div className="dept">
        <div className="firstrowaboutus2">
          <h1 className="wheredowe">WHO WE ARE AND WHY WE ARE DOING THIS</h1>
          <div className="seperator">
            <div className="lineaboutus12"></div>
            <div>
              <h1 className="aboutusheading">OUR DEPARTMENTS</h1>
            </div>
            <div className="lineaboutus22"></div>
          </div>

        </div>
          <div className="dept-grid">

            <NavLink activeClassName="active" className="deptpagelink" aria-current="page" to="/progammingDepartment">
              <article className="dept-grid-box flow bg-black text-neutral-100 border-primary-400">

                <div className='title-div'>
                  <img className='dept-img' alt="progdep" src="https://img.icons8.com/ios-filled/50/ffffff/code.png" />
                  <p className="dept-name">PROGRAMMING</p>
                </div>

                <div className="dept-content">
                  <p>
                    I received a job offer mid-course, and the subjects I learned were current, if not more so,
                    in the company I joined. I honestly feel I got every penny,s worth.
                  </p>
                </div>

              </article>
            </NavLink>
            <NavLink activeClassName="active" className="deptpagelink" aria-current="page" to="/MechenicalDepartment">
              <article className="dept-grid-box flow bg-black text-neutral-100 border-primary-400">

                <div className='title-div'>
                  <img className='dept-img' alt="mechdep" src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/ffffff/external-wrench-labour-day-vitaliy-gorbachev-fill-vitaly-gorbachev.png" />
                  <p className="dept-name">MECHANICAL</p>
                </div>

                <div className="dept-content">
                  <p>
                    I received a job offer mid-course, and the subjects I learned were current, if not more so,
                    in the company I joined. I honestly feel I got every penny's worth.
                  </p>
                </div>

              </article>
            </NavLink>
            <NavLink activeClassName="active" className="deptpagelink" aria-current="page" to="/ElectricalDepartment">
              <article className="dept-grid-box flow bg-black text-neutral-100 border-primary-400">

                <div className='title-div'>
                  <img className="dept-img" src="https://img.icons8.com/ios-filled/50/ffffff/electronics.png" alt="" />
                  <p className="dept-name">ELECTRICAL</p>
                </div>
                <div className="dept-content">
                  <p>
                    I received a job offer mid-course, and the subjects I learned were current, if not more so,
                    in the company I joined. I honestly feel I got every penny’s worth.
                  </p>
                </div>
              </article>
            </NavLink>
          </div>

        </div>

      </div>
    </div>
  )
}
export default About;

