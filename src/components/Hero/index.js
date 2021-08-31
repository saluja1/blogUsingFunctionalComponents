import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Service from '../../utils/Service';


/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(

    <div>
        <Card>
            <div style={{ padding: '20px 0'  }}>
              <Logo appTitle={Service.getAppTitle()} />
            </div>
            <Navbar />
        </Card>
    </div>
   )

 }

export default Hero