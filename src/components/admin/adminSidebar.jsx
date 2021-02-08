import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import auth from '../../services/authService'
// import '../../css/sidebar.css'


const AdminSidebar = (props) => {

    const logout = () => {
        auth.logout();
        props.history.push('/')
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
                        <Link onClick={logout}> 
                            Logout
                        </Link>
                    </li> 
                </>
            }
            </ul>
        </>
    )
}

export default withRouter(AdminSidebar);