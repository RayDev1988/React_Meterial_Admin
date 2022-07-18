import React, { useState } from "react"

export default function TableList({data, deleteData, editData, setFlag}) {

    const edit = (id) => {
        editData(id)
        setFlag(true)
    }

    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td><button className="btn btn-primary" onClick={() => edit(data.id)}>Edit</button></td>
            <td><button className="btn btn-primary" onClick={() => deleteData(data.id)}>Delete</button></td>
        </tr>
    )
}