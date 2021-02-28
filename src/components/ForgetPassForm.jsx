import React from 'react'
import { useTranslation } from 'react-i18next'
const ForgetPassForm = ( props ) => {
    const { t } = useTranslation();

    const handleSubmit = e => {
        e.preventDefault();

        try {

        } catch( ex ) {

        }
    }

    return (
      <>

    <div className="row justify-content-md-center mt-5">
        <div className="col-md-offset-4 col-md-4">
            <form className="loginform"> 
                <div class="form-group">
                    <label> { t('Email' ) }  </label>
                    <input type="email" className="form-control" name="email" placeholder="Enter Your Email" 
                        value=""
                    />
                </div>

                <div className="form-group">
                    <button type="submit"  className="btn btn-primary mt-3 btn-block" onClick={handleSubmit}> { t('Submit') }å </button> 
                </div> 
            </form>
        </div>
    </div>

      </>  
    )
}

export default ForgetPassForm