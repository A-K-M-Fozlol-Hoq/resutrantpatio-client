import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import "./NotFound.css";

const NotFound = () => {
    return (
       <>
       <NavBar></NavBar>
       <div className="error-page">
            <div id="error-page" className=" p-5 rounded">
                <div className="content">
                    <h2 className="header" data-text="404">
                    404
                    </h2>
                    <h4 data-text="Opps! Page not found">
                    Opps! Page not found
                    </h4>
                    <p className="text-white">
                    Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
                    </p>
                    <div className="btns">
                    <a style={{color:'#fff'}} href="/">Return Home</a>
                    <a style={{color:'#fff'}} href="/calculator">Get Quotation</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
       </>
    );
};

export default NotFound;