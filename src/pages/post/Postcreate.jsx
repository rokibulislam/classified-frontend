import React, { useState } from 'react'
import AdminLayout from '../../layout/AdminLayout'
import { useMutation, useQuery } from '@apollo/client';
import { createPostmutation } from '../../mutations/Post' 
import { QueryCategories } from '../../query/category'
import { QueryTags } from '../../query/tag'
import { QueryBrands } from '../../query/brand'

const PostCreate = ( props  ) => {
    
    const [state , setState] = useState({
        title : "",
        body : "",
        error: {}
    })

    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const { loading: loadingcategories, error: errorcategories, data: category } = useQuery( 
        QueryCategories
    );
    const { loading: loadingtags, error: errortags, data: tag } = useQuery( QueryTags );
    const { loading: loadingbrands, error: errorbrands, data: brand } = useQuery( QueryBrands );

    const [ createPost ] = useMutation( createPostmutation );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        try {
            const payload = {
                "title":  state.title,
                "body":state.body,
            }

            createPost({
                variables: {
                    title: payload.title, 
                    body: payload.body 
                }
            }).then( (response) => {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            })

        } catch(ex) {

        }
    }

    if ( loadingcategories || loadingtags ||  loadingbrands ) return 'Loading...';
    if ( errorcategories ) return `Error! ${errorcategories.message}`;
    if ( errortags ) return `Error! ${errortags.message}`;
    if ( errorbrands ) return `Error! ${errorbrands.message}`;

    const renderCategories = () => {
        return category.categories.map( ( { id, name }) => <option key={id} value={name}> {name} </option>)
    }

    const rendertags = () => {
        return tag.tags.map( ( { id, name }) => <option key={id} value={name}> {name} </option>)
    }

    const renderbrands = () => {
        return brand.brands.map( ( { id, name }) => <option key={id} value={name}> {name} </option>)
    }

    return (
        <AdminLayout>  
            {
                ( state.error && state.error.length  ? <div className="alert alert-danger"> { state.error } </div> : null )
            }
            <div className="row justify-content-md-center mt-5">
                <div className="col-md-offset-4 col-md-4">
                    <form className="loginform"> 
                        
                        <div className="form-group">
                            <label> Title  </label>
                            <input type="text" className="form-control" name="title" placeholder="Enter Your Title" 
                                value={state.title} onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label> description  </label>
                            <input type="text" className="form-control" name="body" placeholder="Enter Your description"   
                                value={state.body} onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor=""> Categories </label>
                            <select className="form-control">
                                <option value=""> </option>
                                { renderCategories() }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor=""> Tags </label>
                            <select className="form-control">
                                <option value=""> </option>
                                { rendertags() }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor=""> Brands </label>
                            <select className="form-control">
                                <option value=""> </option>
                                { renderbrands() }
                            </select>
                        </div>

                        <div class="form-group">
                            <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Post </button> 
                        </div> 
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default PostCreate;