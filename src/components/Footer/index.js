import React from 'react';
import Logo from '../Logo';
import Service from '../../utils/Service';
import CopyrightBlock from '../CopyrightBlock';


const Footer = props => {
    let copyrightData = Service.getCopyrightData();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Logo appTitle={Service.getAppTitle()} />
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row">
                    <CopyrightBlock copyright={copyrightData} />
                </div>

            </div>
        </>
    );
};

export default Footer;