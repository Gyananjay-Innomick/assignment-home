import React, { useState } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/InnomickLogo1.png';
import PropTypes from 'prop-types';

const Header = () => {
  const [isMobile, setMobile] = useState(false);
  const [showDropdown, setDropdown] = useState(false);

  return (
    <div className="header-container" data-testid="header">
      <div className="header-upper">
        <span>
          <i className="fa fa-envelope-o social-media-icon icon-color" />
          contactus@innomick.com
        </span>
        <div>
          <span className="header-announcemnt">We are hiring!</span>
          <i className="fa fa-linkedin-square social-media-icon" />
          <i className="fa fa-twitter social-media-icon" />
        </div>
      </div>

      <div>
        <nav className="navbar">
          <div className="header-logo">
            <img
              alt="innomicklogo"
              src={logo}
              style={{
                height: 30,
                width: 120,
              }}
            />
          </div>
          <ul
            className={isMobile ? 'nav-links-mobile' : 'nav-links'}
            onClick={() => setMobile(false)}
          >
            <Link to="#" className="nav-items" data-testid="Home">
              <li>Home</li>
            </Link>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                nav
                caret
                data-testid="Company"
                className="nav-dropdown-item"
              >
                Company
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Link to="#" className="nav-items" data-testid="Services">
              <li>Services</li>
            </Link>
            <Link to="#" className="nav-items" data-testid="Technologies">
              <li>Technologies</li>
            </Link>
            <Link to="#" className="nav-items" data-testid="Blog">
              <li>Blog</li>
            </Link>
            <Link to="#" className="nav-items" data-testid="Contact Us">
              <li>Contact Us</li>
            </Link>
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!isMobile)}
          >
            {isMobile ? (
              <i className="fa fa-times" />
            ) : (
              <i className="fa fa-bars" />
            )}
          </button>
        </nav>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
