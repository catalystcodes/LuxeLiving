// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="flex justify-between items-center header">
//       <a href="/">
//         <img src="/logo.svg" alt="" />
//       </a>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/product">Product</Link>
//           </li>
//           <li>
//             <Link to="/services">Services</Link>
//           </li>
//           <li>
//             <Link to="/articles">Articles</Link>
//           </li>
//           <li>
//             <Link to="/about-us">About Us</Link>
//           </li>
//         </ul>
//       </nav>
//       <div className=" flex gap-x-[1.3rem] align-center ">
//         <img src="/chart.svg" alt="" />
//         <img src="userImage.svg" alt="" />
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center header">
      <a href="/">
        <img src="/logo.svg" alt="Logo" />
      </a>
      <img
        src="/menuIcon.svg"
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
      <nav className={menuOpen ? "open" : ""}>
        <ul className="flex gap-x-4">
          <li className="link">
            <Link to="/product">Product</Link>
          </li>
          <li className="link">
            <Link to="/services">Services</Link>
          </li>
          <li className="link">
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-x-5 items-center">
        <img src="/chart.svg" alt="Chart" className="img1" />
        <img src="/userImage.svg" alt="User" className="img1" />
      </div>
    </header>
  );
};

export default Header;
