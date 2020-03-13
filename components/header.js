import React from 'react';
const Header = () => (
    <React.Fragment>
    <div className="header-bar">
        <div className="row">
            <div className="col-sm-4 d-none d-sm-block leftside">
                <ion-icon name="menu-outline"></ion-icon>
                <ion-icon className="search-btn" name="search"></ion-icon>
            </div>
            <div className="col-sm-4 text-center">
                <img width="209" src="/images/logo.png" alt="" />
            </div>
            <div className="col-sm-4 d-none d-sm-block rightside text-right">
                <img className="country" src="/images/nigeria.png" alt="Nigeria" />
                <img className="country" src="/images/china.png" alt="China" />
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </div>
    </div>
    <div className="trans_shadow"></div>
    </React.Fragment>
)

export default Header
