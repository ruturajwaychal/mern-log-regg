import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="banner-area">
        <header>
          <div className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Serrvices</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>

              <li>
                <Link to="/login" type="submit" classNameName="btn">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="banner-text">
          <h1>Welcome to Homepage</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic autem
            harum eaque aut deserunt pariatur eum ea, sequi minus nam veniam
            atque et quisquam molestiae aperiam! Iusto, ipsum.
          </p>
          <a href="#">Read More</a>
          <a href="#">Watch More</a>
        </div>
      </div>
    </>
  );
};

export default Home;
