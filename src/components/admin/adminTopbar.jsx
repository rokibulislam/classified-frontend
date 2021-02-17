import React, { useState, useEffect } from 'react'
import Language from '../languages'
import './topbar.css'

const AdminTopbar = (props) => {

    useEffect(() => {

    });
    
    return (
        <> 
        <div className="classified-admin-header">
            <div className="row topbar">
                <div className="col-lg-6">
                </div>
                <div className="col-lg-6">
                    <Language/>
                </div>
            </div> 
        </div>
        </>
    )
}

export default AdminTopbar;