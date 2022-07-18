import React from "react"
import { Link } from "react-router-dom"

export default function Header() {

    return (
        <div style={{display:'flex'}}>
            <h3 style = {{marginLeft:'20px'}}><Link to = "/home">Home</Link></h3>
            <h3 style = {{marginLeft:'20px'}}><Link to = "/blog">Blog</Link></h3>
            <h3 style = {{marginLeft:'20px'}}><Link to = "/contact">Contact us</Link></h3>
        </div>
    )
}