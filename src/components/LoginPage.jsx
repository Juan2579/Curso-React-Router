import { useState } from 'react'

export const LoginPage = () => {
	const [username, setUsername] = useState("")	
	console.log(username)
  
  return (
	<>
		<h1>Login</h1>

		<form onSubmit={login}>
			<label htmlFor="">Escribe tu usuario</label>
			<input 
			className="border-2 border-red-300" 
			value={username} 
			onChange={(event) => setUsername(event.target.value)}  />

			<button type="submit"></button>
		</form>
	</>
  )
}
