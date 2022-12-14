import { useAuth } from "./auth"

export const LogoutPage = () => {

  const auth = useAuth()
  const logout = (e) => {
    e.preventDefault()
    auth.logout()
  }

  return (
    <>
		  <h1>Logout</h1>

		  <form onSubmit={logout}>
        <label htmlFor="">Quieres cerrar sesion?</label>
        <button type="submit">Salir</button>
		  </form>
	</>
  )
}
