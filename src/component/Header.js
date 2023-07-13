import './header.css';
import Logo from "../image/Logo.png"
import Hamburger from "../image/Hamburger.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import ProductIcon from "../image/ProductIcon.png"
// import BookmarkIcon from "../image/BookmarkIcon.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const Dropdown = () => setIsOpen(!isOpen);

    return (
        // flex container
      <header className='header-container'>
        <div className='logo-container'>
            <div className='logo-img'>
                <Link to = '/'><img src={Logo} alt="logo" /></Link>
            </div>
            <span className='logo-title'>COZ Shopping</span>
        </div>
        <img src={Hamburger} alt="hamburger menu" onClick={Dropdown}/>

                {/* <div className="dropdown-menu">
                    {<ul>
                        <li>ooo님, 안녕하세요!</li>
                        <li><img src={ProductIcon} alt="logo" />상품리스트 페이지</li>
                        <li><img src={BookmarkIcon} alt="logo" />북마크 페이지</li>
                    </ul>}
                </div> */}

      </header>
    );
  }
  
  export default Header;