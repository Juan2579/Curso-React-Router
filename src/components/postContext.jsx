import { createContext, useContext } from "react";
import { blogdata } from "../blogData";

const postContext = createContext()

export const PostProvider = ({children}) => {
  const blogs = blogdata

  const onEdit = (blogpost, newTitle, newContent, newAuthor) => {
    const oldBlog = blogs.find(blog => blog.slug === blogpost.slug)
    oldBlog.title = newTitle
    oldBlog.content = newContent
    oldBlog.author = newAuthor
  }

  return (
    <postContext.Provider value={onEdit}>
      {children}
    </postContext.Provider>
  )
}

export const usePostContext = () => {
  const post = useContext(postContext)
  return post
}