import './style.css'
import { Link,useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar(){
    
    return (
        <nav className="nav">
            <Link to="/" clssName="site-title">
            Alujan
            </Link>
            <ul>
                <CustomLink to='/pricing'>Pricing</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resolvedPath.pathname })
    return (
        <li className={isActive ? 'active' : ''}>
           <Link to={to} {...props}>
            {children}
           </Link>
         </li>
    )
}