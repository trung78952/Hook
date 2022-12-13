import './Nav.scss'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <ul>
            <li><NavLink activeClassName="active" to="/" exact>To do list</NavLink></li>
            <li><NavLink activeClassName='active' to="/addnew">Add new</NavLink></li>
            <li><NavLink activeClassName="active" to="/product">Product</NavLink></li>
            <li><NavLink activeClassName="active" to="/covid">Covid</NavLink></li>
        </ul>
    )
}
export default Nav