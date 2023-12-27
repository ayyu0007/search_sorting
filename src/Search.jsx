import React, { useState } from 'react'
import { Data } from './Data'

const Search = () => {

    const [search, setsearch] = useState('')

    return (
        <div className='container'>
            <h1>Search</h1>
            <input type='text' onChange={(e) => setsearch(e.target.value)} placeholder='First Name' className='mb-3 w-100' />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First_Name</th>
                        <th scope="col">Last_Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.filter((item) => {
                            return search.toLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search)
                        }).map((val, index) => {
                            return (
                                <tr key={index}>
                                    <td>{val.id}</td>
                                    <td>{val.first_name}</td>
                                    <td>{val.last_name}</td>
                                    <td>{val.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Search
