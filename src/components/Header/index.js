import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(

    <header className="header">
      {props.children}
    </header>
   )

 }

export default Header