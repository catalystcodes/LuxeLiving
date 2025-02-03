import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="flex justify-between items-center header">
      <a href="/">
        <img src="/logo.svg" alt="" />
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className=" flex gap-x-[1.3rem] align-center ">
        <img src="/chart.svg" alt="" />
        <img src="userImage.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
