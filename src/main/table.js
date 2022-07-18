import React, { memo } from "react"
import TableList from "./tableList"

const Table = ({tableData, deleteData, editData, setFlag}) => {

    console.log("child component")

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data) => 
                    <TableList key = {data.id} data = {data} deleteData = {deleteData} editData = {editData} setFlag={setFlag} />
                )}
            </tbody>
        </table>
    )
}

export default memo(Table)