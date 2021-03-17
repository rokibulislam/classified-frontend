import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import auth from '../../services/authService'
// import '../../css/sidebar.css'
import './sidebar.css';

const AdminSidebar: React.FC<{}> = (props) => {
    let history = useHistory();
    const { t } = useTranslation()

    const logout = () => {
        auth.logout();
        history.push('/')
    }

    return (
        <>  

        <div className="sidebar">
            <Link to="/" className="sidebar-logo">
                Logo
            </Link>

            <ul className="menu-nav sidebar-nav">
                <li> <Link to="/" className="sidebar-nav-link">  { t('Dashboard') } </Link>  </li>
                <li> <Link to="/admin/posts" className="sidebar-nav-link"> { t('Posts') } </Link> </li>
                <li> <Link to="/admin/attribute" className="sidebar-nav-link"> { t('Attribute') } </Link> </li> 
                <li> <Link to="/admin/coupon" className="sidebar-nav-link"> { t('Coupon') } </Link> </li> 
                <li> <Link to="/admin/categories" className="sidebar-nav-link"> { t('Categories') } </Link> </li>
                <li> <Link to="/admin/tags" className="sidebar-nav-link"> { t('Tags') } </Link> </li>
                <li> <Link to="/admin/brands" className="sidebar-nav-link"> { t('Brands') } </Link> </li>
                <li> <Link to="/admin/packages" className="sidebar-nav-link"> { t('Packages') } </Link> </li>
                <li> <Link to="/admin/complains" className="sidebar-nav-link"> { t('Complain') } </Link> </li> 
                <li> <Link to="/admin/orders" className="sidebar-nav-link"> { t('Order') } </Link> </li> 
                <li> <Link to="/admin/reports" className="sidebar-nav-link"> { t('Reports') } </Link> </li> 
                <li> <Link to="/admin/reviews" className="sidebar-nav-link">  { t('Reviews') } </Link> </li> 
                <li> <Link to="/admin/profile" className="sidebar-nav-link"> { t('Profile') } </Link> </li> 
                <li> <Link to="/admin/users" className="sidebar-nav-link"> { t('User') } </Link> </li> 
                { !auth.getCurrentUser() ? (
                    <>
                        <li> <Link to="/login" className="sidebar-nav-link"> { t('Login') } </Link> </li> 
                        <li> <Link to="/register" className="sidebar-nav-link"> { t('Register') } </Link> </li>
                    </>
                ) : <> 
                    <li> <Link to="/" className="sidebar-nav-link" onClick={logout}>  { t('Logout') }  </Link> </li> 
                </>
            }
            </ul>
        </div>
        </>
    )
}

export default AdminSidebar;