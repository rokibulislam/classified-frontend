import React, { memo } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Orders: React.FC<{}> = ( props ) => {

    const orders = [
        {
            'id': '56037XDER',
            'name': 'Rokib',
            'date': '03/03/2021',
            'paymentstatus': 'paid',
            'status': 'Approved'
        },
        {
            'id': '56037XDERF',
            'name': 'Babu',
            'date': '03/03/2021',
            'paymentstatus': 'unpaid',
            'status': 'Approved'
        }
    ]

    return (
        <>
        <div className="card card-custom">
            <div className="card-header border-0 py-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label font-weight-bolder text-dark">New Orders</span>
                </h3>
            </div>
            <div className="card-body py-0">
                <div className="table-responsive">
                    <table className="table table-head-custom table-vertical-center" id="kt_advance_table_widget_4">
                        <thead>
                            <tr className="text-left">
                                <th className="pl-0" style={{ width: "30px" }}>
                                    <label className="checkbox checkbox-lg checkbox-inline mr-2">
                                        <input type="checkbox" value="1" />
                                        <span></span>
                                    </label>
                                </th>
                                <th className="pl-0" style={{ minWidth: "120px" }}>Order id</th>
                                <th style={{minWidth: "110px"}}>
                                    <span className="text-info">Date</span>
                                </th>
                                <th style={{minWidth: "120px" }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        { 
                            orders.map( ({ id, name, date, paymentstatus, status } ) => {
                                return (
                            <tr>
                                <td className="pl-0 py-6">
                                    <label className="checkbox checkbox-lg checkbox-inline">
                                        <input type="checkbox" value="1" />
                                        <span></span>
                                    </label>
                                </td>
                                <td className="pl-0">
                                    <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"> { id } </a>
                                </td>
                                <td>
                                    <span className="text-info font-weight-bolder d-block font-size-lg"> { date } </span>
                                    <span className="text-muted font-weight-bold"> { paymentstatus } </span>
                                </td>
                                <td>
                                <span className="label label-lg label-light-primary label-inline"> { status } </span>
                                </td>
                            </tr>
                            )
                        })
                    }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default memo( Orders );