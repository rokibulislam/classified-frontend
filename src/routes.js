import React from 'react'
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'

import AdminPosts from './pages/post/Posts'
import PostCreate from './pages/post/Postcreate'
import PostEdit from './pages/post/PostEdit'

import AdminTags from './pages/tag/Tags'
import TagCreate from './pages/tag/Tagcreate'
import TagEdit from './pages/tag/TagEdit'

import AdminCategories from './pages/categories/Categories'
import CategoryCreate from './pages/categories/Categorycreate'
import CategoryEdit from './pages/categories/CategoryEdit'

import AdminBrands from './pages/brand/Brands'
import BrandCreate from './pages/brand/Brandcreate'
import BrandEdit from './pages/brand/BrandEdit'


import AdminPackages from './pages/package/Packages'
import PackageCreate from './pages/package/Packagecreate'
import PackageEdit from './pages/package/PackageEdit'

import AdminComplains from './pages/complain/Complains'
import ComplainCreate from './pages/complain/Complaincreate'
import ComplainEdit from './pages/complain/ComplainEdit'

import LoginPage from './pages/auth/Login'
import RegisterPage from './pages/auth/Register'
import ForgetPasswordPage from './pages/auth/ForgetPassword'
import ResetPasswordPage from './pages/auth/ResetPassword'

import AdminOrders from './pages/order/orders'
import Profile from './pages/user/profile'
import ReviewPage from './pages/review/reviews'
import ReportPage from './pages/report/reports'

import ProtectedRoute from './components/common/protectedRoute'

import AdminPosttAttribute from './pages/attribute/attribute'
import AttributeCreate from './pages/attribute/AttributeCreate'
import AttributeEdit from './pages/attribute/AttributeEdit'

import AdminCoupon from './pages/coupon/coupon'
import CouponCreate from './pages/coupon/CouponCreate'
import CouponEdit from './pages/coupon/CouponEdit'

import UserPage from './pages/user/User'

import { logout } from './services/authService'

const routes = () => {
    return (
        <Router>
            <Switch>
                <ProtectedRoute path='/' exact component={Dashboard} />
                <Route path='/login'  component={LoginPage} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/forget-password' component={ForgetPasswordPage}/>
                <Route path='/reset-password' component={ResetPasswordPage}/>
                <Route path='/admin/coupon/create' component={CouponCreate}/>
                <Route path='/admin/coupon/:id/edit' component={CouponEdit}/>              
                <Route path='/admin/coupon' component={AdminCoupon}/>
                <Route path='/admin/attribute/create' component={AttributeCreate}/>
                <Route path='/admin/attribute/:id/edit' component={AttributeEdit}/>              
                <Route path='/admin/attribute' component={AdminPosttAttribute}/>
                <ProtectedRoute path='/admin/posts/create'  component={PostCreate} />
                <ProtectedRoute path='/admin/posts/:id/edit'  component={PostEdit} />
                <ProtectedRoute path='/admin/posts'  component={AdminPosts} />
                <ProtectedRoute path='/admin/categories/create'  component={CategoryCreate} />
                <ProtectedRoute path='/admin/categories/:id/edit' component={CategoryEdit} />
                <ProtectedRoute path='/admin/categories'  component={AdminCategories} />
                <ProtectedRoute path='/admin/tags/create'  component={TagCreate} />
                <ProtectedRoute path='/admin/tags/:id/edit' component={TagEdit} />
                <ProtectedRoute path='/admin/tags'  component={AdminTags} />
                <ProtectedRoute path='/admin/brands/create'  component={BrandCreate} />
                <ProtectedRoute path='/admin/brands/:id/edit' component={BrandEdit} />
                <ProtectedRoute path='/admin/brands'  component={AdminBrands} />
                <ProtectedRoute path='/admin/packages/create'  component={PackageCreate} />
                <ProtectedRoute path='/admin/packages/:id/edit' component={PackageEdit} />
                <ProtectedRoute path='/admin/packages'  component={AdminPackages} />
                <ProtectedRoute path='/admin/complains/create'  component={ComplainCreate} />
                <ProtectedRoute path='/admin/complains/:id/edit'  component={ComplainEdit} />
                <ProtectedRoute path='/admin/complains'  component={AdminComplains} />
                <ProtectedRoute path='/admin/orders'  component={AdminOrders} />
                <ProtectedRoute path='/admin/profile'  component={Profile} />
                <ProtectedRoute path='/admin/reviews'  component={ReviewPage} />
                <ProtectedRoute path='/admin/reports'  component={ReportPage} />

                <ProtectedRoute path='/admin/users'  component={UserPage} />
                
            </Switch>
        </Router>
    )
}

export default routes;