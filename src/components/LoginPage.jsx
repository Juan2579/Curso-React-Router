import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from "./auth"

export const LoginPage = () => {
	const auth = useAuth()
	const [username, setUsername] = useState("")	
	
	const login = (event) => {
		event.preventDefault()
		auth.login({username})
	}
	
	if(auth.user){
		return <Navigate to="/profile" />
	}

  return (
	<>
		<h1>Login</h1>

		<form onSubmit={login}>
			<label htmlFor="">Escribe tu usuario</label>
			<input 
			className="border-2 border-red-300" 
			value={username} 
			onChange={(event) => setUsername(event.target.value)}  />

			<button type="submit">Iniciar sesion</button>
		</form>
	</>
  )
}
