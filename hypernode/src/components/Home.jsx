import React from "react";
import { Chat } from "./Chat";
import "./home.css";

export const Home = () => {
  return (
    <>
      <div className="homepage">
        <Chat/>
        <div className="homebox">
          <div className="searchcontain">
            <div className="searches">
              <p className="maintitle">Tech classes for upskilling</p>
              <p>The largest hub of tech-related educational products</p>
              <div className="searchbox">
                <input
                  type={"text"}
                  placeholder="What do you want to learn ?"
                />
                <button className="searchbtn">Search</button>
              </div>
              <p>Serving 129,896 products from</p>
            </div>
            <div className="searchimg">
              <img src="https://cdn.classpert.com/assets/svg/brain-feeding-off-computers-0e44f73fca1a4f15df674a247bf046b239781e0b1b739ea24499995cf2011f04.svg" />
            </div>
          </div>
        </div>
        <div className="platform">
          <div className="platdiv">
            <img src="https://cdn.classpert.com/assets/svg/technologies-fd307df94d2b91f225347ca2999eabe38f85dfb7f4e71c6e9db06819ad267f2f.svg" />
            <div className="platformtext">
              <p className="plattitle">
                A platform designed for the ubiquitous learning era
              </p>
              <p>
                To keep up with the rapidly changing digital economy, you need
                to nurture the habit of continuous learning. On Classpert,
                you'll find courses to sharpen your technical skills and stay
                updated with the latest technologies.
              </p>
              <button>View all Topics</button>
            </div>
          </div>
        </div>
        <div className="network">
          <div className="networkdiv">
            <img src="https://cdn.classpert.com/assets/svg/providers-11fbf9faac3520d5d0935eedd6c95aea577ed377d716463c98d1f5542f8fbc24.svg" />
            <div className="networktext">
              <p className="networktitle">
                Our learning network is also supplied by courses from external
                providers
              </p>
              <p>
                Keeping a relevant and up-to-date course catalog is an endless
                job for a single provider. We support and distribute content
                from our partners through our elastic, ever-growing learning
                network.
              </p>
              <button>Join the network</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
