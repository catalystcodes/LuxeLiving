import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="md:flex md:justify-between md:items-center">
      <div className="flex justify-between items-center p-5 bg-white">
        <a href="/">
          <img src="/logo.svg" alt="Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <img src="/menuIcon.svg" alt="" />
        </button>
      </div>

      <div id="navbar-default" className="hidden md:block">
        <ul className="flex gap-4">
          <li>
            <Link to="/product" className="text-gray-800 font-bold">
              Product
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-800 font-bold">
              Services
            </Link>
          </li>
          <li>
            <Link to="/articles" className="text-gray-800 font-bold">
              Articles
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="text-gray-800 font-bold">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className=" gap-5 items-center hidden md:inline-flex">
        <img src="/chart.svg" alt="Chart" className="w-8 h-8" />
        <img src="/userImage.svg" alt="User" className="w-8 h-8" />
      </div>
    </header>
  );
};

export default Header;
