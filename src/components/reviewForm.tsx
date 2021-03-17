import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMutation, useQuery } from '@apollo/client';
import { createReviewmutation } from '../mutations/review'
import { QueryReviews } from '../query/review'

const ReviewForm: React.FC<{}> = ( props  ) => {
    const { t } = useTranslation();

    const [state , setState] = useState({
        name : "",
        rating : "",
        comment : "",
        error: {}
    })

    const [ createReview ] = useMutation( createReviewmutation, {
        refetchQueries: [ { query: QueryReviews } ],
        onError: (error) => {
            console.log('error');
        },
        update: (store, response) => {

        }
    } );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        createReview({
            variables: {
                name: state.name, 
                rating: state.rating,
                comment: state.comment,
            }
        })
    }

    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    return (
            <div className="row justify-content-md-center mt-5">
                <div className="col-md-offset-4 col-md-4">
                    <form className="loginform"> 
                        
                        <div className="form-group">
                            <label> { t('Name') }  </label>
                            <input type="text" className="form-control" name="name" placeholder="Enter Your Title" 
                                value={state.name} onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label> { t('Rating') }  </label>
                            <input type="text" className="form-control" name="rating" placeholder="Enter Your description"   
                                value={state.rating} onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label> { t('Comment') }  </label>
                            <input type="text" className="form-control" name="comment" placeholder="Enter Your description"   
                                value={state.comment} onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> { t('Create Review') } </button> 
                        </div> 
                    </form>
                </div>
            </div>
    )
}

export default ReviewForm;