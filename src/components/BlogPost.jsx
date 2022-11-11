import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { blogdata } from "../blogData"
import { useAuth } from "./auth"
import { usePostContext } from "./postContext"

export const BlogPost = () => {

    const [editSection, setEditSection] = useState(false)

    const edit = usePostContext()

    const navigate = useNavigate()
    const { slug } = useParams()
    const auth = useAuth()

    const blogpost = blogdata.find(blog => blog.slug === slug)

    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user.username
    const canEdit = auth.user?.isAdmin || auth.user?.isEditor

    const openEdit = () => {
        setEditSection(true)
    }
    const sendEdit = (event) => {
        event.preventDefault()
    }

    const returnToBlog = () => {
        navigate("/blog")
    }

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button className="border-2 bg-slate-500 text-white p-1 text-sm" onClick={returnToBlog}>Volver a la lista de blogs</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>

            {canDelete && (
                <button>Eliminar blog</button>
            )}
            {canEdit && (
                <button onClick={openEdit}>Editar blog</button>
            )}
            {editSection && (
                <form onSubmit={sendEdit}>
                    <input type="text" defaultValue={blogpost.title} />
                </form>
            )}
        </>
    )
}
