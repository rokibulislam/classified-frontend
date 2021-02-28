import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ProfileForm = () => {
    const {  t } = useTranslation();
    const [ state, setState ] = useState({
        firstname: "",
        lastname: "",
    });

    const [ address, setAddress ] = useState({
        postcode: "",
        city: "",
        country: "",
    });

    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleAddressChange = ( e ) => {
        const {name , value} = e.target   
        setAddress(prevState => ({
            ...prevState,
            [name] : value
        }))  
    }

    const handleSubmit =  ( e ) => {
        e.preventDefault();

        const payload = {
            firstname: state.firstname,
            lastname: state.lastname,
            address: {
                postcode: address.postcode,
                city: address.city,
                country: address.country
            }
        }

        console.log( payload );
    }

    return (
        <>
        <form className="loginform"> 
            <div className="row">

                <div className="col-md-4">
                    <div class="form-group">
                        <label> { t( 'First Name' ) } </label>
                        <input type="text" className="form-control" name="firstname" placeholder="Enter Your Email" 
                            value={state.firstname} onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="form-group">
                        <label> { t( 'Last Name' ) }  </label>
                        <input type="text" className="form-control" name="lastname" placeholder="Enter Your Email" 
                            value={state.lastname} onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="form-group">
                        <label> { t( 'Postcode' ) } </label>
                        <input type="text" className="form-control" name="postcode" placeholder="Enter Your Postcode" 
                            value={address.postcode} onChange={handleAddressChange}
                        />
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="form-group">
                        <label> { t( 'City') } </label>
                        <input type="text" className="form-control" name="city" placeholder="Enter Your Postcode" 
                            value={address.city} onChange={handleAddressChange}
                        />
                    </div>
                </div>

                <div className="col-md-4">

                    <div class="form-group">
                        <label> { t( 'Country') } </label>
                        <input type="text" className="form-control" name="country" placeholder="Enter Your Postcode" 
                            value={address.country} onChange={handleAddressChange}
                        />
                    </div>
                
                </div>
            
            </div>

            <div className="row">
                <div className="form-group">
                    <button type="submit"  className="btn btn-primary mt-3 btn-block" onClick={handleSubmit}> { t( 'Update Profile') } </button> 
                </div> 
            </div>
        </form>
        
        </>
    )
}

export default ProfileForm;