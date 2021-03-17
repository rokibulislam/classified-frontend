import React from 'react'
import AdminLayout from '../../layout/AdminLayout'

const AdminOrder: React.FC<{}> = (  props ) => {
    return (
        <AdminLayout>
            <div className="flex-row-fluid ml-lg-12">
                <div className="card card-custom gutter-b">
                    <div className="card-body p-0">
                        <div className="row justify-content-center py-8 px-8 py-md-27 px-md-0">
                            <div className="col-md-10">
                                <div className="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row">
                                    <h1 className="display-4 font-weight-boldest mb-10">ORDER DETAILS</h1>
                                    <div className="d-flex flex-column align-items-md-end px-0">
                                        <a href="#" className="mb-5">
                                            <img src="assets/media/logos/logo-dark.png" alt="" />
                                        </a>
                                        <span className="d-flex flex-column align-items-md-end opacity-70">
                                            <span>Cecilia Chapman, 711-2880 Nulla St, Mankato</span>
                                            <span>Mississippi 96522</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="border-bottom w-100"></div>
                                <div className="d-flex justify-content-between pt-6">
                                    <div className="d-flex flex-column flex-root">
                                        <span className="font-weight-bolder mb-2">ORDER DATE</span>
                                        <span className="opacity-70">Jan 07, 2020</span>
                                    </div>
                                    <div className="d-flex flex-column flex-root">
                                        <span className="font-weight-bolder mb-2">ORDER NO.</span>
                                        <span className="opacity-70">64616-103</span>
                                    </div>
                                    <div className="d-flex flex-column flex-root">
                                        <span className="font-weight-bolder mb-2">DELIVERED TO.</span>
                                        <span className="opacity-70">Iris Watson, P.O. Box 283 8562 Fusce RD.
                                        <br />Fredrick Nebraska 20620</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center py-8 px-8 py-md-10 px-md-0">
                            <div className="col-md-10">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="pl-0 font-weight-bold text-muted text-uppercase">Ordered Items</th>
                                                <th className="text-right font-weight-bold text-muted text-uppercase">Qty</th>
                                                <th className="text-right font-weight-bold text-muted text-uppercase">Unit Price</th>
                                                <th className="text-right pr-0 font-weight-bold text-muted text-uppercase">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="font-weight-boldest">
                                                <td className="border-0 pl-0 pt-7 d-flex align-items-center">
                                                <div className="symbol symbol-40 flex-shrink-0 mr-4 bg-light">
                                                    <div className="symbol-label" 
                                                    // style={{ backgroundImage: url('assets/media/products/11.png') }}
                                                    ></div>
                                                </div>
                                                Street Sneakers</td>
                                                <td className="text-right pt-7 align-middle">2</td>
                                                <td className="text-right pt-7 align-middle">$90.00</td>
                                                <td className="text-primary pr-0 pt-7 text-right align-middle">$180.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center bg-gray-100 py-8 px-8 py-md-10 px-md-0 mx-0">
                            <div className="col-md-10">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="font-weight-bold text-muted text-uppercase">PAYMENT TYPE</th>
                                                <th className="font-weight-bold text-muted text-uppercase">PAYMENT STATUS</th>
                                                <th className="font-weight-bold text-muted text-uppercase">PAYMENT DATE</th>
                                                <th className="font-weight-bold text-muted text-uppercase text-right">TOTAL PAID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="font-weight-bolder">
                                                <td>Credit Card</td>
                                                <td>Success</td>
                                                <td>Jan 07, 2020</td>
                                                <td className="text-primary font-size-h3 font-weight-boldest text-right">$789.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center py-8 px-8 py-md-10 px-md-0">
                            <div className="col-md-10">
                                <div className="d-flex justify-content-between">
                                    <button type="button" className="btn btn-light-primary font-weight-bold" onclick="window.print();">Download Order Details</button>
                                    <button type="button" className="btn btn-primary font-weight-bold" onclick="window.print();">Print Order Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminOrder;