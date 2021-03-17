import React from 'react'
import './auth.css';

const authLayout = (props) => {
    return (
<div className="d-flex flex-column flex-root">
    <div className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
      
        <div className="login-aside d-flex flex-column flex-row-auto" style={{ backgroundColor: "#F2C98A"}}>
            <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
                <a href="#" className="text-center mb-10">
                    <img src="assets/media/logos/logo-letter-1.png" className="max-h-70px" alt="" />
                </a>
                <h3 className="font-weight-bolder text-center font-size-h4 font-size-h1-lg" style={{ color: '#986923'}}>Discover Amazing Metronic
                <br />with great build tools</h3>
            </div>
            <div className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" style={{
                backgroundImage: ''
            }}>
            </div>
        </div>

        <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
           <div className="d-flex flex-column-fluid flex-center"> 
                { props.children }
            </div>
        </div>
    </div>
</div>
    )
}

export default authLayout;
