import React from 'react'
import './layout.css';

const authLayout = (props) => {
    return (
    <div className="classified-admin">
        <div className="row">
            <div className="container">
                <div className="flex-center">
                    { props.children }
                </div>
            </div>
        </div>
    </div>
    )
}

export default authLayout;
