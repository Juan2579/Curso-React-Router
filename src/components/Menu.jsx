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

      </ul>
    </nav>
  )
}

const routes = [
  {
    to: "/",
    text: "Home"
  },
  {
    to: "/blog",
    text: "Blog"
  },
  {
    to: "/profile",
    text: "Profile"
  },
  {
    to: "/login",
    text: "Login"
  },
  {
    to: "/logout",
    text: "Logout"
  },
]
