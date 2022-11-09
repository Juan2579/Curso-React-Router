import { useNavigate, useParams } from "react-router-dom"
import { blogdata } from "../blogData"

export const BlogPost = () => {
    const navigate = useNavigate()

    const { slug } = useParams()

    const blogpost = blogdata.find(blog => blog.slug === slug)

    const returnToBlog = () => {
        navigate("/blog")
    }

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button className="border-2 bg-slate-500 text-white p-1 text-sm" onClick={returnToBlog}>Volver a la lista de blogs</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>
        </>
    )
}
