import React from 'react'
import AdminLayout from '../../layout/AdminLayout'
import Reviews from '../../components/reviews'
import ReviewForm from '../../components/reviewForm'

const ReviewPage: React.FC<{}> = () => {
    return (
        <AdminLayout>
            <Reviews/>
            <ReviewForm/>
        </AdminLayout>
    )
}

export default ReviewPage