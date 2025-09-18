// Link - enables navigation by clicking (like ,<a> in Html, but without reloading)
//        used to add links in a navbar or buttons that move the user to another page
//        import {Link} from 'react-router-dom'

// Outlet - acts as a placeholder for nested routes
//          if you have a layout (e.g Navbar + footer) and want the middle part to change depending on the route
//          import {Outlet} from 'react-router-dom'



import {Link, Outlet} from 'react-router-dom'
function Layout() {
  return(
    <>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/form" className="nav-link">Form</Link>
          </li>
        </ul>
      </nav>

      <Outlet/>
    </>
  )
}

export default Layout;
