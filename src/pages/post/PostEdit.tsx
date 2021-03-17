import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client';
import AdminLayout from '../../layout/AdminLayout'
import { updatePostmutation } from '../../mutations/Post'

import { QueryPost,QueryPosts } from '../../query/post'
import { QueryCategories } from '../../query/category'
import { QueryTags } from '../../query/tag'
import { QueryBrands } from '../../query/brand'

const PostEdit = ( props  ) => {
    const [state , setState] = useState({
        title : "",
        body : "",
        categories: "",
        tags: "",
        brands: "",
        error: {}
    })

    let { id } = useParams();

    const { loading: loadingcategories, error: errorcategories, data: category } = useQuery( QueryCategories);
    const { loading: loadingtags, error: errortags, data: tag } = useQuery( QueryTags );
    const { loading: loadingbrands, error: errorbrands, data: brand } = useQuery( QueryBrands );

    const [ updatePost, mutationResult ] = useMutation( updatePostmutation, {
        onError: (error) => {
            console.log( 'error' );
        },
        update: (store, response) => {
            props.history.push('/admin/posts');
        }
    } )

    const { loading, error, data } = useQuery(QueryPost, {
        variables: { id },
        onCompleted: ( data ) => {
            setState(prevState => ({
                ...prevState,
                title : data.post.title,
                body: data.post.body
            }))  
        }
    });

    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        
        updatePost({
            variables: {
                title: state.title,
                body:  state.body,
                categories: state.categories,
                tags: state.tags,
                brands: state.brands,
                id: id
            }
        })
    }

    const renderSelect = ( options, selectdata ) => {
        console.log( selectdata );
        return options.map( ( { id, name }) => <option key={id} value={id}> {name} </option>)
    }

    if ( loadingcategories || loadingtags ||  loadingbrands ) return 'Loading...';
    if ( errorcategories ) return `Error! ${errorcategories.message}`;
    if ( errortags ) return `Error! ${errortags.message}`;
    if ( errorbrands ) return `Error! ${errorbrands.message}`;
    
    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (
        <>
            <AdminLayout>
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
                                <label> Body  </label>
                                <input type="text" className="form-control" name="body" placeholder="Enter Your Body" 
                                    value={state.body} onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor=""> Categories </label>
                                <select name="categories" className="form-control" onChange={handleChange}>
                                    <option value=""> </option>
                                    { renderSelect( category.categories, category.categories ) }
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor=""> Tags </label>
                                <select name="tags" className="form-control" onChange={handleChange}>
                                    <option value=""> </option>
                                    { renderSelect( tag.tags, tag.tags ) }
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor=""> Brands </label>
                                <select name="brands" className="form-control"  onChange={handleChange}>
                                    <option value=""> </option>
                                    { renderSelect( brand.brands, brand.brands ) }
                                </select>
                            </div>

                            <div className="form-group">
                                <button type="submit"  className="btn btn-primary" onClick={handleSubmit}> Update Post </button> 
                            </div> 
                        </form>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default PostEdit