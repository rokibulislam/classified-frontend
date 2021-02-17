import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AdminLayout from '../../layout/AdminLayout'
import { useMutation, useQuery } from '@apollo/client';
import { createPostmutation } from '../../mutations/Post' 
import { QueryPosts } from '../../query/post'
import { QueryCategories } from '../../query/category'
import { QueryTags } from '../../query/tag'
import { QueryBrands } from '../../query/brand'

const PostCreate = ( props  ) => {
    const [state , setState] = useState({
        title : "",
        body : "",
        categories: "",
        tags: "",
        brands: "",
        error: {}
    })

    const { loading: loadingcategories, error: errorcategories, data: category } = useQuery( QueryCategories);
    const { loading: loadingtags, error: errortags, data: tag } = useQuery( QueryTags );
    const { loading: loadingbrands, error: errorbrands, data: brand } = useQuery( QueryBrands );

    const [ createPost ] = useMutation( createPostmutation, {
        refetchQueries: [ { query: QueryPosts } ],
        onError: (error) => {
            console.log('error');
        },
        update: (store, response) => {
            props.history.push('/admin/posts');
        }
    } );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        createPost({
            variables: {
                title: state.title, 
                body: state.body,
                categories: state.categories,
                tags: state.tags,
                brands: state.brands,
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

    if ( loadingcategories || loadingtags ||  loadingbrands ) return 'Loading...';
    if ( errorcategories ) return `Error! ${errorcategories.message}`;
    if ( errortags ) return `Error! ${errortags.message}`;
    if ( errorbrands ) return `Error! ${errorbrands.message}`;

    const renderSelect = ( options, selectdata ) => {
        return options.map( ( { id, name }) => <option key={id} value={id}> {name} </option>)
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
                            <select name="categories" className="form-control" onChange={handleChange}>
                                <option value=""> </option>
                                { renderSelect( category.categories, category ) }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor=""> Tags </label>
                            <select name="tags" className="form-control" onChange={handleChange}>
                                <option value=""> </option>
                                { renderSelect( tag.tags, tag ) }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor=""> Brands </label>
                            <select name="brands" className="form-control"  onChange={handleChange}>
                                <option value=""> </option>
                                { renderSelect( brand.brands, brand ) }
                            </select>
                        </div>

                        <div className="form-group">
                            <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Create Post </button> 
                        </div> 
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default PostCreate;