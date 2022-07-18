import { InputSharp } from "@material-ui/icons"
import React, {useState} from "react"
import Table from "./table"
import Header from "./header"

export default function Main() {
    const [ count, setCount ] = useState(0)
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    const [data, setData] = useState([
        {
            id: 1,
            name: "Raymond",
            email: "raymond.dev@mdiMicrosoftOutlook.com"
        },
        {
            id: 2,
            name: "Dowden",
            email: "raymond@gmail.com"
        },
        {
            id: 3,
            name: "Robert",
            email: "Robert@Outlook.com"
        }
    ])
    const [inputs, setInputs] = useState({})

    const onSubmit = (e) => {
        e.preventDefault();
        setData([...data, inputs])  
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const editData = (id) => {

    }

    const deleteData = (id) => {
        setData(data.filter((e) => e.id != id))
    }

    const increment = () => {
        setCount((c) => c + 1);
    }

    return (
        <>
            <Header />
            <div>
                <h4>Count:{count}</h4>
                <button onClick={increment}>+</button>
            </div>
            <input type = "text" name="id" vale = {inputs.id} onChange = {handleChange} />
            <input type = "text" name="name" vale = {inputs.name} onChange = {handleChange} />
            <input type = "text" name="email" vale = {inputs.email} onChange = {handleChange} />
            <button onClick={onSubmit}> Add </button>
            <Table tableData = {data} deleteData = {deleteData} editData={editData} />
        </>
    )
}