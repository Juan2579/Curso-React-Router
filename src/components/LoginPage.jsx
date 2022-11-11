import { useState } from 'react'
import { useAuth } from "./auth"

export const LoginPage = () => {
	const auth = useAuth()
	const [username, setUsername] = useState("")	
	
	const login = (event) => {
		event.preventDefault()
		auth.login({username})
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
