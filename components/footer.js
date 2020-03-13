import React from 'react';
const Footer = () => (
    <React.Fragment>
    <div className="footer mt-5 mb-0">
        <h3 className="text-center baloo-font">SADE</h3>
        <p className="text-center varela_font py-4">subscribe to the latest.</p>
        <div className="text-center">
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className="row pt-5">
            <div className="col-sm-4 varela_font text-center">Copyright 2019</div>
            <div className="col-sm-4 varela_font text-center">About SADE Privacy Policy Contact Us</div>
            <div className="col-sm-4 varela_font text-center">Powered by SocketWorks</div>
        </div>
    </div>
    </React.Fragment>
)

export default Footer
