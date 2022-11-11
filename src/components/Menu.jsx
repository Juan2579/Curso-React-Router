import { Link, NavLink } from "react-router-dom"
import { useAuth } from "./auth"

export const Menu = () => {

  const auth = useAuth()

  if(!auth.user){

  }

  return (
    <nav>
      <ul className="flex gap-5">

        {routes.map(route => {

          if(route.private && !auth.user) return null
          if(route.text === 'Login' && auth.user) return null
          return(
          <li key={route.text}>
            <NavLink
              className={({ isActive }) => isActive ? "text-blue-500" : "text-red-500"}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        )})}

      </ul>
    </nav>
  )
}

const routes = [
  {
    to: "/",
    text: "Home",
    private: false
  },
  {
    to: "/blog",
    text: "Blog",
    private: false
  },
  {
    to: "/profile",
    text: "Profile",
    private: true
  },
  {
    to: "/login",
    text: "Login",
    private: false
  },
  {
    to: "/logout",
    text: "Logout",
    private: true
  },
]
