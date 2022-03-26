import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink,Navigate } from "react-router-dom";
import logo from '../logo.svg';

export const Navigation=()=>{
    return (
        <BrowserRouter>
        <div className="main-layout">
        <nav>
            <img src={logo} alt="react logo"/>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/users">User</NavLink>
            </li>
        </ul>
        </nav>

        <Routes>
            <Route path="about" element={<h1>about page</h1>}></Route>
            <Route path="users" element={<h1>users page</h1>}></Route>
            <Route path="/" element={<h1>Home page</h1>}></Route>
            <Route path="/*" element={<Navigate to="/home" replace/>}></Route>
        </Routes>


        </div>
        </BrowserRouter>
    )

}