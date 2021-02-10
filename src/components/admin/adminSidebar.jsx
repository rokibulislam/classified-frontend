import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import auth from '../../services/authService'
// import '../../css/sidebar.css'


const AdminSidebar = (props) => {
    let history = useHistory();

    const logout = () => {
        auth.logout();
        history.push('/')
    }

    return (
        <>  
            <ul className="sidebar-menu">
                <li>
                    <Link to="/"> 
                        Dashboard
                    </Link>
                </li>
                  
                <li>
                    <Link to="/admin/posts"> 
                        Posts
                    </Link>
                </li>
                
                <li>
                    <Link to="/admin/categories"> 
                        Categories
                    </Link>
                </li>

                <li>
                    <Link to="/admin/tags"> 
                        Tags
                    </Link>
                </li>

                <li>
                    <Link to="/admin/brands"> 
                        Brands
                    </Link>
                </li>

                <li>
                    <Link to="/admin/packages"> 
                        Packages
                    </Link>
                </li>

                <li>
                    <Link to="/admin/complains"> 
                        Complain
                    </Link>
                </li> 

                <li>
                    <Link to="/admin/orders"> 
                        Order
                    </Link>
                </li> 

                <li>
                    <Link to="/admin/reports"> 
                        Reports
                    </Link>
                </li> 


                <li>
                    <Link to="/admin/reviews"> 
                        Reviews
                    </Link>
                </li> 

                <li>
                    <Link to="/admin/profile"> 
                        Profile
                    </Link>
                </li> 
            {
                !auth.getCurrentUser() ? (
                    <>
                        <li>
                            <Link to="/login"> 
                                Login
                            </Link>
                        </li> 
                        
                        <li>
                            <Link to="/login"> 
                                Login
                            </Link>
                        </li>
                    </>
                )
                : <> 
                    <li>
                        <Link to="/" onClick={logout}> 
                            Logout
                        </Link>
                    </li> 
                </>
            }
            </ul>
        </>
    )
}

export default AdminSidebar;