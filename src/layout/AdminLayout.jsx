import React from 'react'
import AdminSidebar from '../components/admin/adminSidebar'
import AdminTopbar from '../components/admin/adminTopbar'

const AdminLayout = props => {
    return (
      <>
        <AdminTopbar/>
        <div className="row">
            <div class="col-lg-4">
               <AdminSidebar/>
            </div>
            <div class="col-lg-8">
              { props.children }
            </div>
        </div>
      </>
    )
}

export default AdminLayout;