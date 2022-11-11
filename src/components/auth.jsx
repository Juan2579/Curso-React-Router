import { createContext, useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";


const roles = {
  admins: [
    "Irisval", "RetaxMaster", "freddier"
  ],
  editors: [
    "juandc", "juan2579"
  ]
}

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const login = ({username}) => {
    const isAdmin = roles.admins.find(admin => admin === username)
    const isEditor = roles.editors.find(editor => editor === username)
    setUser({username, isAdmin, isEditor})
    navigate("/profile")
  }

  const logout = () => {
    setUser(null)
    navigate("/login")
  }

  const auth = { user, login, logout }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () =>{
  const auth = useContext(AuthContext)
  return auth
}

export const AuthRoute = (props) => {
  const auth = useAuth()

  if(!auth.user){
    return <Navigate to="/login"/>
  }// }else if(auth.user){
  //   return <Navigate to="/profile"/>
  // }

  return props.children
}