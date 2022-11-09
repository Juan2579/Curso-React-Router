import { Link, NavLink } from "react-router-dom"

export const Menu = () => {
  return (
    <nav>
      <ul className="flex gap-5">

        {routes.map(route => (
          <li key={route.text}>
            <NavLink
              className={({ isActive }) => isActive ? "text-blue-500" : "text-red-500"}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}

        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}

        {/* <li>
          <NavLink 
            to="/"
            className={({ isActive }) => isActive ? "text-blue-500" : "text-red-500"}
          >Home</NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => isActive ? "text-blue-500" : "text-red-500"}
            to="/blog"
          >Blog</NavLink>
        </li>
        <li>
          <NavLink 
            className={({ isActive }) => isActive ? "text-blue-500" : "text-red-500"}
            to="/profile"
          >Profile</NavLink>
        </li> */}
      </ul>
    </nav>
  )
}

const routes = []
routes.push({
  to: "/",
  text: "Home"
})
routes.push({
  to: "/blog",
  text: "Blog"
})
routes.push({
  to: "/profile",
  text: "Profile"
})
