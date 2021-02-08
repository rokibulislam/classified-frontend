import React from 'react'

const authLayout = (props) => {
    return (
        <div className="row">
            <div className="container">
                <div className="flex-center">
                    { props.children }
                </div>
            </div>
        </div>
    )
}

export default authLayout;
