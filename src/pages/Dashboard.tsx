import React from 'react'
import AdminLayout from '../layout/AdminLayout'
import Card from '../components/dashboard/card/index'
import Orders from '../components/orders'

const AdminDashboard: React.FC<{}> = () => {
    
    const authors = [
        {
            'name': 'Ricky Hunt',
            'description': 'PHP, SQLite, Artisan CLI'
        },
        {
            'name': 'Ricky Hunt',
            'description': 'PHP, SQLite, Artisan CLI'
        },
    ]

    return (
        <>
            <AdminLayout>
               <h2> Dashboard </h2>
               <div className="row">
                    <Card title="Authors" authors={authors} />
                    <Card title="Authors" authors={authors} />
                    <Card title="Authors" authors={authors} />
               </div>
               <div className="row">
                <Orders/>
               </div>
            </AdminLayout>
        </>
    )
}


export default AdminDashboard;