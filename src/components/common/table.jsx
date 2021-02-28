import React from 'react'
import TableHeader from './tableHeader'
import TableBody from './tableBody'
import TableFooter from './tableFooter'

const Table = props  => {
    return (
        <>
            <table className="table">
                <TableHeader/>
                <TableBody/>
                <TableFooter/>
            </table>
        </>
    )
}

export default Table;