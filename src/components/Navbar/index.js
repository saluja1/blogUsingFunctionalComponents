import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Service from '../../utils/Service';
import SearchBar from './SearchBar';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {


  return(
    <div className="navbar">
        <ul>
            {Service.getNavigation("header").map((x, index)=> <li key={index}><NavLink to={x.pageLink} >{x.pageName}</NavLink></li> )}
        </ul>
        <SearchBar />
    </div>
   )

 }

export default Navbar