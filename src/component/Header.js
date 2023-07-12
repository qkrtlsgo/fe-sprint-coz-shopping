import './header.css';
import Logo from "../image/Logo.png"
import Hamburger from "../image/Hamburger.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const DropDown = () => {
    isOpen === true ? setIsOpen(false): setIsOpen(true)
  };

    return (
        // flex container
      <header className='header-container'>
        <div className='logo-container'>
            <div className='logo-img'>
                <Link to = '/'><img src={Logo} alt="logo" /></Link>
            </div>
            <span className='logo-title'>COZ Shopping</span>
        </div>
          <button onClick={DropDown}>
          <img src={Hamburger} alt="hamburger menu" />
          </button>
      </header>
    );
  }
  
  export default Header;