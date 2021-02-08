import React from 'react'
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import AdminPosts from './pages/Posts'
import CreatePost from './pages/cretePost'
import AdminTags from './pages/Tags'
import CreateTag from './pages/createTag'
import AdminCategories from './pages/Categories'
import createCategories from './pages/createCategories'
import AdminBrands from './pages/Brands'
import CreateBrand from './pages/createBrand'
import AdminPackages from './pages/Packages'
import CreatePackage from './pages/createPackage'

import AdminComplains from './pages/Complains'
import CreateComplain from './pages/createComplain'

import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

import ProtectedRoute from './components/common/protectedRoute'

import { logout } from './services/authService'

const routes = () => {
    return (
        <Router>
            <Switch>
                <ProtectedRoute path='/' exact component={Dashboard} />
                <Route path='/login' exact component={LoginPage} />
                <Route path='/register' exact component={RegisterPage} />
                <ProtectedRoute path='/admin/posts'  component={AdminPosts} />
                <ProtectedRoute path='/admin/create-post'  component={CreatePost} />
                <ProtectedRoute path='/admin/categories'  component={AdminCategories} />
                <ProtectedRoute path='/admin/create-category'  component={createCategories} />
                <ProtectedRoute path='/admin/tags'  component={AdminTags} />
                <ProtectedRoute path='/admin/create-tag'  component={CreateTag} />
                <ProtectedRoute path='/admin/brands'  component={AdminBrands} />
                <ProtectedRoute path='/admin/create-brand'  component={CreateBrand} />
                <ProtectedRoute path='/admin/packages'  component={AdminPackages} />
                <ProtectedRoute path='/admin/create-package'  component={CreatePackage} />
                <ProtectedRoute path='/admin/complains'  component={AdminComplains} />
                <ProtectedRoute path='/admin/create-complain'  component={CreateComplain} />

            </Switch>
        </Router>
    )
}

export default routes;