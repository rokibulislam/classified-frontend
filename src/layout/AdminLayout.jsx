import React from 'react'
import AdminSidebar from '../components/admin/adminSidebar'
import AdminTopbar from '../components/admin/adminTopbar'
import './layout.css';

const AdminLayout = props => {
    return (
      <>
      <div className="classified-admin">
        <div className="row">
          <div className="col-lg-2">
            <AdminSidebar/>
          </div>
          <div class="main-content col-lg-10">
              <AdminTopbar/>
              <div className="content-body">
                { props.children }
              </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default AdminLayout;