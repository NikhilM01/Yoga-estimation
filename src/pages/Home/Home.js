import React from "react";
import { Link } from "react-router-dom";
import carousel3 from "../../utils/images/carousel3.svg";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
        <div class="main-header">
        <div class="header-nav">
          <nav class="main-nav">
            <div class="max-width">
              <p href="" class="logo-link">
                Fit <span>Heaven</span>
              </p>
              <ul class="nav-list">
                <li class="nav-item">
                  <p
                    href=""
                    target="_self"
                    class="nav-link link"
                  >
                    YOGA POSE ESTIMATION
                  </p>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>


      <div className="home-main">
        <div className="image-container">
          <img src={carousel3} id="img-car" class="d-block" alt="..." />
        </div>
        <div className="btn-section">
          <Link to="/start">
            <button className="btn start-btn">LET'S START</button>
          </Link>
          <Link to="/tutorials">
            <button className="btn start-btn">TUTORIALS</button>
          </Link>
        </div>
      </div>
    </div>
    
  );
  
}
