import React from 'react'

const ForgetPassForm = ( props ) => {

    const handleSubmit = () => {

    }

    return (
      <>

    <div className="row justify-content-md-center mt-5">
        <div className="col-md-offset-4 col-md-4">
            <form className="loginform"> 
                <div class="form-group">
                    <label> Email  </label>
                    <input type="email" className="form-control" name="email" placeholder="Enter Your Email" 
                        value=""
                    />
                </div>

                <div className="form-group">
                    <button type="submit"  className="btn btn-primary mt-3 btn-block" onClick={handleSubmit}> Submit </button> 
                </div> 
            </form>
        </div>
    </div>

      </>  
    )
}

export default ForgetPassForm